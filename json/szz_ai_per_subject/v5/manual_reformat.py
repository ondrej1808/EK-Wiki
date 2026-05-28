#!/usr/bin/env python3
import json
import re
from pathlib import Path
import difflib
import shutil

ROOT = Path(__file__).resolve().parent

ORDER = [
    "LAGA", "MA1A", "DRN", "MA2A", "KANA", "STP", "FY1", "FY2",
    "ZEOA", "EO1", "EMB", "DITA", "DATA", "ELPA", "EMPA", "ELD",
    "SEE", "SAS", "TBK", "CZS", "AVT", "MIT", "TSI",
]

math_token = re.compile(
    r"(?:\\\\[a-zA-Z]+|\\w+\\([^)]*\\)|\\w\\^[\\w{}]+|[²³]|[πσμχ]|≤|≥|→|∑|∫|√|\\\\frac|\\\\sum|\\\\int)"
)
protected_re = re.compile(
    r"\\$\\$.*?\\$\\$|\\$.*?\\$|\\\\\\(.*?\\\\\\)|\\\\\\[.*?\\\\\\]",
    re.DOTALL,
)


def protected_spans(s: str):
    return [m.span() for m in protected_re.finditer(s)]


def is_in_spans(span, spans):
    a, b = span
    for x, y in spans:
        if a >= x and b <= y:
            return True
    return False


def wrap_substrings(s: str) -> str:
    spans = protected_spans(s)
    out = []
    last = 0
    for m in math_token.finditer(s):
        a, b = m.span()
        if is_in_spans((a, b), spans):
            continue
        out.append(s[last:a])
        seg = s[a:b]
        out.append(f"${seg}$")
        last = b
    out.append(s[last:])
    return "".join(out)


def has_prose(text: str) -> bool:
    # Heuristic: longer words not preceded by backslash indicate prose.
    return bool(re.search(r"(?<!\\)[A-Za-zÁ-ž]{4,}", text))


def suggest_rewrite(s: str) -> str:
    if not isinstance(s, str):
        return s
    stripped = s.strip()
    if "$$" in s:
        return s
    if stripped.startswith("$$") and stripped.endswith("$$") and len(stripped) > 4:
        return s
    if stripped.startswith("$") and stripped.endswith("$") and len(stripped) > 2:
        inner = stripped[1:-1]
        if has_prose(inner):
            # Move normal text out of math mode and wrap math-like fragments.
            return wrap_substrings(inner)
        return s
    return wrap_substrings(s)


def preview_diff(old: str, new: str) -> str:
    diff = difflib.unified_diff(
        old.splitlines(),
        new.splitlines(),
        lineterm="",
        fromfile="old",
        tofile="new",
    )
    return "\n".join(list(diff)[:8])


def prompt_multiline() -> str:
    print("Enter replacement text. End with a single '.' line:")
    lines = []
    while True:
        line = input()
        if line == ".":
            break
        lines.append(line)
    return "\n".join(lines)


def process_string(label: str, s: str) -> str:
    suggestion = suggest_rewrite(s)
    if suggestion == s:
        return s
    print(f"\n{label}:")
    print("ORIGINAL:\n" + s)
    print("SUGGESTED:\n" + suggestion)
    print("DIFF:\n" + preview_diff(s, suggestion))
    while True:
        choice = input("Accept [a], Edit [e], Skip [s], Quit [q]: ").strip().lower()
        if choice == "a":
            return suggestion
        if choice == "e":
            edited = prompt_multiline()
            return edited
        if choice == "s":
            return s
        if choice == "q":
            raise KeyboardInterrupt


def process_file(path: Path):
    data = json.loads(path.read_text(encoding="utf-8"))
    changed = False
    for q_index, q in enumerate(data.get("questions", []), start=1):
        q_label = f"{path.name} Q{q_index} question"
        new_q = process_string(q_label, q.get("question", ""))
        if new_q != q.get("question", ""):
            q["question"] = new_q
            changed = True
        for a_index, part in enumerate(q.get("answer_parts", []), start=1):
            label = f"{path.name} Q{q_index} A{a_index}"
            new_text = process_string(label, part.get("text", ""))
            if new_text != part.get("text", ""):
                part["text"] = new_text
                changed = True
    if changed:
        backup = path.with_suffix(path.suffix + ".bak")
        if not backup.exists():
            shutil.copy(path, backup)
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    return changed


def main():
    files = [ROOT / f"{code}.json" for code in ORDER if (ROOT / f"{code}.json").exists()]
    # Append any remaining json files that are not in ORDER and not SZZ.json
    extra = [p for p in ROOT.glob("*.json") if p.name not in {f.name for f in files} and p.name != "SZZ.json"]
    files.extend(sorted(extra))

    print(f"Processing {len(files)} files...")
    try:
        for path in files:
            print(f"\n=== {path.name} ===")
            process_file(path)
    except KeyboardInterrupt:
        print("\nStopped by user. Progress saved.")
        return

    print("\nDone. Run merge_json.py to rebuild SZZ.json.")


if __name__ == "__main__":
    main()
