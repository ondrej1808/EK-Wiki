"""
Cards study app - FastAPI server.
Serves all static files and handles image uploads.
Upload permission is gated by client IP (LAN / VPN only).

Dev (Windows):  uvicorn server:app --host 0.0.0.0 --port 8000 --reload
Live (Ubuntu):  uvicorn server:app --host 0.0.0.0 --port 80
"""

import hashlib
import mimetypes
import os
import re
import time
from pathlib import Path

from fastapi import FastAPI, Request, UploadFile, File, HTTPException
from fastapi.responses import FileResponse, JSONResponse, PlainTextResponse
from fastapi.staticfiles import StaticFiles

ROOT = Path(__file__).parent
FIGS_DIR = ROOT / "figs"
FIGS_DIR.mkdir(exist_ok=True)
SZZ_DIR = ROOT / "SZZ"

SUBJECT_ORDER = ["LAGA", "MA1A", "MA2A", "DRN", "KANA", "PST", "STP",
                 "EMPA", "ELD", "SAS", "ZEOA", "EO1", "EO2", "EMB",
                 "DITA", "DATA", "ELPA", "SEE", "TBK", "CZS", "AVT",
                 "MIT", "TSI", "FY1", "FY2"]

# Files/dirs to skip in wiki index
WIKI_SKIP_DIRS = {"ai", ".obsidian"}
WIKI_SKIP_FILES = {"README.md"}

EK_DRIVE_DIR = ROOT / "ek-drive"
EK_DRIVE_DIR.mkdir(exist_ok=True)

ALLOWED_MIME = {"image/png", "image/jpeg", "image/gif", "image/webp"}
MIME_EXT = {"image/png": ".png", "image/jpeg": ".jpg", "image/gif": ".gif", "image/webp": ".webp"}

# IPs/prefixes that are allowed to write (upload images, save JSON)
WRITABLE_PREFIXES = [
    "127.0.0.1",
    "::1",
    "192.168.18.",   # LAN
    "100.113.149.",  # Tailscale / VPN
]

app = FastAPI()


def client_ip(request: Request) -> str:
    # Respect X-Forwarded-For only for known local proxies
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        ip = forwarded.split(",")[0].strip()
        # Only trust forwarded header from loopback (ngrok tunnels from 127.0.0.1)
        if request.client and request.client.host in ("127.0.0.1", "::1"):
            return ip
    return request.client.host if request.client else "unknown"


def is_writable(request: Request) -> bool:
    ip = client_ip(request)
    return any(ip.startswith(prefix) for prefix in WRITABLE_PREFIXES)


@app.get("/api/writable")
async def api_writable(request: Request):
    return {"writable": is_writable(request), "ip": client_ip(request)}


@app.post("/upload_image")
async def upload_image(request: Request, file: UploadFile = File(...)):
    if not is_writable(request):
        raise HTTPException(status_code=403, detail="Upload not allowed from this IP")

    mime = file.content_type or ""
    if mime not in ALLOWED_MIME:
        raise HTTPException(status_code=400, detail=f"Unsupported image type: {mime}")

    data = await file.read()
    if len(data) > 20 * 1024 * 1024:  # 20 MB limit
        raise HTTPException(status_code=413, detail="Image too large (max 20 MB)")

    sha8 = hashlib.sha256(data).hexdigest()[:8]
    ts = int(time.time())
    ext = MIME_EXT[mime]
    filename = f"{ts}_{sha8}{ext}"
    dest = FIGS_DIR / filename

    dest.write_bytes(data)

    rel_path = f"figs/{filename}"
    return JSONResponse({"ok": True, "path": rel_path})


def parse_wiki_file(text: str) -> dict:
    """Parse frontmatter + H1 heading from a wiki markdown file."""
    result = {}
    body = text
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            fm = text[3:end]
            body = text[end + 4:].lstrip()
            in_aliases = False
            aliases = []
            for line in fm.splitlines():
                if line.startswith("okruh:"):
                    try:
                        result["okruh"] = int(line.split(":", 1)[1].strip())
                    except ValueError:
                        pass
                elif line.startswith("predmet:"):
                    result["predmet"] = line.split(":", 1)[1].strip()
                elif line.strip() == "aliases:":
                    in_aliases = True
                elif in_aliases and line.startswith("  - "):
                    aliases.append(line[4:].strip())
                elif not line.startswith(" "):
                    in_aliases = False
            if aliases:
                # Prefer the longest alias (usually the full Czech title)
                result["alias"] = max(aliases, key=len)

    # Extract first H1 heading from body, stripping leading number prefix
    for line in body.splitlines():
        if line.startswith("# "):
            h1 = line[2:].strip()
            h1 = re.sub(r'^\d+[a-z]?\s+', '', h1, flags=re.IGNORECASE)
            result["h1"] = h1
            break

    return result


def parse_wiki_filename(name: str) -> tuple[int | None, str]:
    """Parse '01 Some topic title.md' -> (1, 'Some topic title')."""
    m = re.match(r'^(\d+[a-z]?)\s+(.+)$', name, re.IGNORECASE)
    if m:
        num_str = m.group(1)
        try:
            num = int(re.sub(r'[a-z]', '', num_str, flags=re.IGNORECASE))
        except ValueError:
            num = None
        return num, m.group(2)
    return None, name


@app.get("/wiki/index")
async def wiki_index():
    if not SZZ_DIR.exists():
        return JSONResponse([])

    entries = []
    for md_file in sorted(SZZ_DIR.rglob("*.md")):
        # Skip unwanted dirs and files
        parts = md_file.relative_to(SZZ_DIR).parts
        if any(p in WIKI_SKIP_DIRS for p in parts):
            continue
        if md_file.name in WIKI_SKIP_FILES:
            continue

        rel_path = "/".join(md_file.relative_to(SZZ_DIR).parts)
        subject = parts[0] if len(parts) > 1 else ""
        stem = md_file.stem

        # Try frontmatter first
        try:
            text = md_file.read_text(encoding="utf-8", errors="replace")
        except Exception:
            continue
        fm = parse_wiki_file(text)

        number = fm.get("okruh")
        # Title priority: H1 heading > longest alias > filename parse
        title = fm.get("h1") or fm.get("alias") or stem
        if subject == "" and fm.get("predmet"):
            subject = fm["predmet"]

        if number is None:
            num, parsed_title = parse_wiki_filename(stem)
            number = num
            if not fm.get("h1") and not fm.get("alias"):
                title = parsed_title

        entries.append({
            "subject": subject,
            "number": number,
            "title": title,
            "path": rel_path,
        })

    def sort_key(e):
        subj = e["subject"]
        order = SUBJECT_ORDER.index(subj) if subj in SUBJECT_ORDER else len(SUBJECT_ORDER)
        num = e["number"] if e["number"] is not None else 999
        return (order, subj, num, e["title"])

    entries.sort(key=sort_key)
    return JSONResponse(entries)


@app.get("/wiki/file")
async def wiki_file(path: str):
    if not SZZ_DIR.exists():
        raise HTTPException(status_code=503, detail="SZZ submodule not initialised")
    # Sanitise path — must stay inside SZZ_DIR
    try:
        target = (SZZ_DIR / path).resolve()
        target.relative_to(SZZ_DIR.resolve())  # raises ValueError if outside
    except (ValueError, Exception):
        raise HTTPException(status_code=400, detail="Invalid path")
    if not target.exists() or not target.is_file():
        raise HTTPException(status_code=404, detail="File not found")
    text = target.read_text(encoding="utf-8", errors="replace")
    return PlainTextResponse(text, media_type="text/plain; charset=utf-8")


SUBJECT_CODES = set(SUBJECT_ORDER)

@app.get("/wiki/drive-index")
async def wiki_drive_index():
    """List all PDFs in ek-drive/ recursively.
    Subject is detected by finding the first parent folder whose name
    matches a known subject code (e.g. LAGA, MA1A) — works regardless
    of how deep the file lives (e.g. Bakaláři/6. semestr/SZZ/LS2026/LAGA/file.pdf).
    """
    files = []
    if not EK_DRIVE_DIR.exists():
        return JSONResponse(files)
    for item in sorted(EK_DRIVE_DIR.rglob("*.pdf")):
        rel = item.relative_to(EK_DRIVE_DIR)
        parts = rel.parts          # everything between ek-drive/ and filename
        # Walk parent folders looking for a subject code match
        subject = ""
        for part in parts[:-1]:   # exclude filename itself
            if part.upper() in SUBJECT_CODES:
                subject = part.upper()
                break
        files.append({
            "name": item.name,
            "path": "ek-drive/" + "/".join(parts),
            "subject": subject,
        })
    return JSONResponse(files)


# Serve index.html at root
@app.get("/")
async def root():
    return FileResponse(ROOT / "index.html")


# Serve everything else as static files
app.mount("/", StaticFiles(directory=str(ROOT), html=True), name="static")
