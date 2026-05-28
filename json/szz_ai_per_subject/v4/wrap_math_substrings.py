#!/usr/bin/env python3
import json
import re
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
SRC = ROOT
DST = ROOT.parent / 'v4_manual'
DST.mkdir(exist_ok=True)

EXCLUDE = {'LAGA', 'MA1A', 'ZEOA'}

# Patterns that indicate math content
math_token = re.compile(r'(?:\\[a-zA-Z]+|\w+\([^)]*\)|\w\^[\w{}]+|[²³]|[πσμχ]|≤|≥|→|∑|∫|√|\\frac|\\sum|\\int)')

# find existing dollar spans and \( \) and \[ \]
protected_re = re.compile(r'\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\]', re.DOTALL)

def protected_spans(s: str):
    return [m.span() for m in protected_re.finditer(s)]

def is_in_spans(span, spans):
    a, b = span
    for x, y in spans:
        if a >= x and b <= y:
            return True
    return False

def wrap_substrings(s: str) -> str:
    if not isinstance(s, str):
        return s
    spans = protected_spans(s)
    out = []
    last = 0
    for m in math_token.finditer(s):
        a, b = m.span()
        if is_in_spans((a,b), spans):
            continue
        # append text before
        out.append(s[last:a])
        seg = s[a:b]
        # avoid wrapping if already has $ around immediate neighbors
        if seg.startswith('$') and seg.endswith('$'):
            out.append(seg)
        else:
            out.append(f"${seg}$")
        last = b
    out.append(s[last:])
    res = ''.join(out)
    # collapse accidental $ $ around whole string
    if res.startswith('$$') and res.endswith('$$'):
        return res
    return res

def process_file(src: Path, dst: Path):
    data = json.loads(src.read_text(encoding='utf-8'))
    if 'title' in data:
        data['title'] = wrap_substrings(data['title'])
    for q in data.get('questions', []):
        if 'question' in q:
            q['question'] = wrap_substrings(q['question'])
        for part in q.get('answer_parts', []):
            if 'text' in part:
                part['text'] = wrap_substrings(part['text'])
    dst.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')

def main():
    written = 0
    copied = 0
    for p in sorted(SRC.iterdir()):
        if p.is_file() and p.suffix.lower() == '.json':
            stem = p.stem
            dst = DST / p.name
            if stem in EXCLUDE:
                shutil.copy(p, dst)
                copied += 1
            else:
                process_file(p, dst)
                written += 1
    print(f"Wrote {written} files to {DST} (copied {copied} excluded files)")

if __name__ == '__main__':
    main()
