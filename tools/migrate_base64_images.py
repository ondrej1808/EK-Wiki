"""
Migrate base64-encoded images in card JSON files to physical files.

Usage:
  python tools/migrate_base64_images.py json/szz-open-micro.json --figs-dir figs --dry-run
  python tools/migrate_base64_images.py json/szz-open-micro.json --figs-dir figs

Also flattens deeply-nested `raw` fields produced by old creator versions.
"""

import argparse
import base64
import hashlib
import json
import re
import shutil
import sys
from pathlib import Path


MIME_EXT = {
    "image/png": ".png",
    "image/jpeg": ".jpg",
    "image/gif": ".gif",
    "image/webp": ".webp",
}

DATA_URL_RE = re.compile(r'^data:(image/[^;]+);base64,(.+)$', re.DOTALL)


def extract_base64(value: str):
    """Return (mime, raw_bytes) if value is a data URL, else None."""
    m = DATA_URL_RE.match(value.strip())
    if not m:
        return None
    mime = m.group(1)
    try:
        data = base64.b64decode(m.group(2))
    except Exception:
        return None
    return mime, data


def save_image(data: bytes, mime: str, figs_dir: Path, dry_run: bool) -> str:
    ext = MIME_EXT.get(mime, ".png")
    sha8 = hashlib.sha256(data).hexdigest()[:8]
    filename = f"migrated_{sha8}{ext}"
    dest = figs_dir / filename
    rel = f"figs/{filename}"
    if not dry_run:
        figs_dir.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(data)
    return rel


def flatten_raw(obj):
    """Collapse raw.raw.raw... nesting into a single {title, text} dict."""
    if not isinstance(obj, dict):
        return obj
    # Walk down raw chain until no more raw nesting
    while isinstance(obj.get("raw"), dict):
        inner = obj["raw"]
        # If inner only has raw (and maybe empty fields), keep going
        obj = inner
    # Return only title and text
    return {k: obj.get(k, "") for k in ("title", "text") if k in obj or True}


def process_answer_part(part: dict, figs_dir: Path, dry_run: bool, stats: dict) -> dict:
    """Migrate imageSrc and image.src in a single answer part, flatten raw."""
    part = dict(part)

    # Handle imageSrc field
    for field in ("imageSrc",):
        val = part.get(field)
        if isinstance(val, str) and val.startswith("data:"):
            result = extract_base64(val)
            if result:
                mime, data = result
                path = save_image(data, mime, figs_dir, dry_run)
                part[field] = path
                stats["extracted"] += 1
                if dry_run:
                    print(f"  [DRY-RUN] Would extract imageSrc -> {path}")
                else:
                    print(f"  Extracted imageSrc -> {path}")
            else:
                print(f"  WARNING: Could not decode imageSrc data URL", file=sys.stderr)
        elif isinstance(val, str) and val and not val.startswith("data:"):
            stats["kept_path"] += 1

    # Handle legacy image.src object
    image = part.get("image")
    if isinstance(image, dict):
        src = image.get("src", "")
        if isinstance(src, str) and src.startswith("data:"):
            result = extract_base64(src)
            if result:
                mime, data = result
                path = save_image(data, mime, figs_dir, dry_run)
                part["image"] = {**image, "src": path}
                # Also set imageSrc for consistency
                if not part.get("imageSrc"):
                    part["imageSrc"] = path
                stats["extracted"] += 1
                if dry_run:
                    print(f"  [DRY-RUN] Would extract image.src -> {path}")
                else:
                    print(f"  Extracted image.src -> {path}")

    # Flatten raw nesting
    raw = part.get("raw")
    if isinstance(raw, dict) and isinstance(raw.get("raw"), dict):
        depth = 0
        r = raw
        while isinstance(r.get("raw"), dict):
            r = r["raw"]
            depth += 1
        part["raw"] = {k: r.get(k, "") for k in ("title", "text")}
        stats["flattened_raw"] += 1
        if dry_run:
            print(f"  [DRY-RUN] Would flatten raw (depth {depth})")

    return part


def process_card(card: dict, figs_dir: Path, dry_run: bool, stats: dict) -> dict:
    card = dict(card)
    answer_parts = card.get("answer_parts")
    if isinstance(answer_parts, list):
        card["answer_parts"] = [
            process_answer_part(p, figs_dir, dry_run, stats)
            if isinstance(p, dict) else p
            for p in answer_parts
        ]
    # Also check top-level imageSrc (closed cards)
    for field in ("imageSrc",):
        val = card.get(field)
        if isinstance(val, str) and val.startswith("data:"):
            result = extract_base64(val)
            if result:
                mime, data = result
                path = save_image(data, mime, figs_dir, dry_run)
                card[field] = path
                stats["extracted"] += 1
    return card


def process_file(json_path: Path, figs_dir: Path, dry_run: bool):
    print(f"\n{'[DRY-RUN] ' if dry_run else ''}Processing: {json_path}")
    text = json_path.read_text(encoding="utf-8")
    data = json.loads(text)

    questions = None
    if isinstance(data, list):
        questions = data
    elif isinstance(data, dict):
        questions = data.get("questions") or data.get("cards")

    if questions is None:
        print(f"  ERROR: Cannot find questions array in {json_path}", file=sys.stderr)
        return

    stats = {"extracted": 0, "kept_path": 0, "flattened_raw": 0}
    processed = [
        process_card(q, figs_dir, dry_run, stats) if isinstance(q, dict) else q
        for q in questions
    ]

    if not dry_run:
        # Backup
        backup = json_path.with_suffix(json_path.suffix + ".bak")
        shutil.copy2(json_path, backup)
        print(f"  Backup written to {backup}")

        # Write patched data
        if isinstance(data, list):
            out = processed
        else:
            out = {**data, ("questions" if "questions" in data else "cards"): processed}
        json_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"  Patched file written.")

    print(f"  Summary: {stats['extracted']} images extracted, "
          f"{stats['kept_path']} path entries kept, "
          f"{stats['flattened_raw']} raw fields flattened.")


def main():
    parser = argparse.ArgumentParser(description="Migrate base64 images in card JSON files")
    parser.add_argument("files", nargs="+", help="JSON files to process")
    parser.add_argument("--figs-dir", default="figs", help="Directory to save extracted images")
    parser.add_argument("--dry-run", action="store_true", help="Show what would happen without writing")
    args = parser.parse_args()

    figs_dir = Path(args.figs_dir)

    for path_str in args.files:
        json_path = Path(path_str)
        if not json_path.exists():
            print(f"ERROR: File not found: {json_path}", file=sys.stderr)
            continue
        process_file(json_path, figs_dir, args.dry_run)


if __name__ == "__main__":
    main()
