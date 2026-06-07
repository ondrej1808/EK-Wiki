#!/usr/bin/env python3
"""
render_tikz.py — Pre-render TikZ blocks from SZZ markdown files to SVG.

Scans all SZZ/**/*.md files for ```tikz ... ``` code blocks, renders
each to SVG using pdflatex + pdf2svg, and saves results to tikz-cache/.
Also writes tikz-cache/index.json (hash → svg path) for wiki.js.

Requirements: pdflatex, pdf2svg (sudo apt-get install texlive-pictures pdf2svg)
Run from repo root:  python3 tools/render_tikz.py
"""

import re, os, sys, json, hashlib, shutil, subprocess, tempfile, pathlib

REPO_ROOT   = pathlib.Path(__file__).parent.parent
SZZ_DIR     = REPO_ROOT / 'SZZ'
CACHE_DIR   = REPO_ROOT / 'tikz-cache'
INDEX_FILE  = CACHE_DIR / 'index.json'

TIKZ_RE = re.compile(r'```tikz\n(.*?)\n```', re.DOTALL)

LATEX_PREAMBLE = r"""\documentclass[border=4pt,tikz]{standalone}
\usepackage{tikz}
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
\usetikzlibrary{arrows.meta,calc,decorations.pathmorphing,patterns,positioning}
"""

def block_hash(src: str) -> str:
    return hashlib.sha256(src.strip().encode()).hexdigest()[:16]

def render_block(tikz_src: str, svg_path: pathlib.Path) -> bool:
    """Render a single TikZ block to SVG. Returns True on success."""
    # Build a standalone LaTeX document
    src = tikz_src.strip()
    # Blocks from Obsidian notes already include \begin{document}...\end{document}
    if r'\begin{document}' in src:
        doc = LATEX_PREAMBLE + src
    else:
        doc = LATEX_PREAMBLE + '\n\\begin{document}\n' + src + '\n\\end{document}\n'

    with tempfile.TemporaryDirectory() as tmp:
        tmp = pathlib.Path(tmp)
        tex = tmp / 'input.tex'
        pdf = tmp / 'input.pdf'
        svg_tmp = tmp / 'output.svg'

        tex.write_text(doc, encoding='utf-8')

        # Step 1: pdflatex
        result = subprocess.run(
            ['pdflatex', '-interaction=nonstopmode', '-halt-on-error',
             '-output-directory', str(tmp), str(tex)],
            capture_output=True, text=True, timeout=60
        )
        if result.returncode != 0 or not pdf.exists():
            print(f'  [pdflatex error]\n{result.stdout[-800:]}', file=sys.stderr)
            return False

        # Step 2: pdf2svg
        result2 = subprocess.run(
            ['pdf2svg', str(pdf), str(svg_tmp)],
            capture_output=True, text=True, timeout=30
        )
        if result2.returncode != 0 or not svg_tmp.exists():
            # Fallback: try dvisvgm --pdf
            result2 = subprocess.run(
                ['dvisvgm', '--pdf', '--no-fonts', '--optimize',
                 f'--output={svg_tmp}', str(pdf)],
                capture_output=True, text=True, timeout=30
            )
        if not svg_tmp.exists():
            print(f'  [svg conversion failed]', file=sys.stderr)
            return False

        svg_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(svg_tmp, svg_path)
        return True


def main():
    CACHE_DIR.mkdir(exist_ok=True)
    index: dict[str, str] = {}

    # Load existing index
    if INDEX_FILE.exists():
        try:
            index = json.loads(INDEX_FILE.read_text())
        except Exception:
            index = {}

    # Find all SZZ markdown files (skip .obsidian)
    md_files = sorted(
        f for f in SZZ_DIR.rglob('*.md')
        if '.obsidian' not in f.parts
    )

    total_blocks = 0
    rendered = 0
    skipped = 0
    failed  = 0

    for md_path in md_files:
        try:
            content = md_path.read_text(encoding='utf-8', errors='ignore')
        except Exception as e:
            print(f'[skip] {md_path}: {e}')
            continue

        blocks = TIKZ_RE.findall(content)
        if not blocks:
            continue

        rel = md_path.relative_to(REPO_ROOT)
        print(f'{rel}: {len(blocks)} block(s)')

        for tikz_src in blocks:
            total_blocks += 1
            h = block_hash(tikz_src)
            svg_rel = f'tikz-cache/{h}.svg'
            svg_abs = REPO_ROOT / svg_rel

            if svg_abs.exists() and h in index:
                skipped += 1
                continue

            print(f'  rendering {h[:8]}…', end=' ', flush=True)
            ok = render_block(tikz_src, svg_abs)
            if ok:
                index[h] = svg_rel
                rendered += 1
                print('OK')
            else:
                failed += 1
                print('FAILED')

    # Write updated index
    INDEX_FILE.write_text(json.dumps(index, indent=2, ensure_ascii=False))
    print(f'\nDone: {total_blocks} blocks, {rendered} rendered, '
          f'{skipped} cached, {failed} failed.')
    print(f'Index: {INDEX_FILE}')


if __name__ == '__main__':
    main()
