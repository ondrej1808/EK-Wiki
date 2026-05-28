#!/usr/bin/env python3
import json
import re
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
V3 = ROOT
V4 = ROOT.parent / 'v4'
V4.mkdir(exist_ok=True)

EXCLUDE = {'LAGA', 'MA1A', 'ZEOA'}

math_token_patterns = [
    r'\\frac', r'\\sum', r'\\int', r'\\sqrt', r'lim_', r'lim\\_', r'lim\\{',
    r'\\alpha', r'\\beta', r'\\gamma', r'\\sigma', r'\\mu', r'\\pi',
    r'\^\{', r'\^\\w', r'_[{]?', r'≤', r'≥', r'→', r'∑', r'∫', r'√', r'π', r'σ', r'μ',
]
math_token_re = re.compile('(?:' + '|'.join(math_token_patterns) + ')')

def looks_like_math(s: str) -> bool:
    if not isinstance(s, str):
        return False
    # If already contains explicit math delimiters, skip
    if '$' in s or '\\(' in s or '\\[' in s or '\\begin{' in s:
        return False
    # Search for LaTeX commands or typical math markers
    if math_token_re.search(s):
        return True
    # look for simple exponent pattern like 2^n or x^2
    if re.search(r"\w\^\w", s):
        return True
    return False

def wrap_if_needed(s: str) -> str:
    if not isinstance(s, str):
        return s
    if looks_like_math(s):
        s = s.strip()
        # Avoid double wrapping
        if not (s.startswith('$') and s.endswith('$')):
            return f"${s}$"
    return s

def process_file(src_path: Path, dst_path: Path):
    data = json.loads(src_path.read_text(encoding='utf-8'))
    # Process title
    if 'title' in data:
        data['title'] = wrap_if_needed(data['title'])
    for q in data.get('questions', []):
        if 'question' in q:
            q['question'] = wrap_if_needed(q['question'])
        for part in q.get('answer_parts', []):
            if 'text' in part:
                part['text'] = wrap_if_needed(part['text'])
    dst_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')

def main():
    written = 0
    copied = 0
    for p in sorted(V3.iterdir()):
        if p.is_file() and p.suffix.lower() == '.json':
            stem = p.stem
            dst = V4 / p.name
            if stem in EXCLUDE:
                shutil.copy(p, dst)
                copied += 1
            else:
                process_file(p, dst)
                written += 1
    print(f"Wrote {written} files to {V4} (copied {copied} excluded files)")

if __name__ == '__main__':
    main()
