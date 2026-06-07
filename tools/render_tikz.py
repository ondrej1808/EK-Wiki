#!/usr/bin/env python3
"""
render_tikz.py — Pre-render TikZ blocks from SZZ markdown to SVG.

Scans SZZ/**/*.md for ```tikz ... ``` code blocks, renders each to SVG,
saves to tikz-cache/HASH16.svg, writes tikz-cache/index.json for wiki.js.

Rendering strategy (tries in order until one works):
  1. latex  + dvisvgm       — preferred; DVI route; NO Ghostscript needed
  2. pdflatex + dvisvgm --pdf — PDF route; needs Ghostscript
  3. pdflatex + pdf2svg      — Linux/Mac only

Usage:
  python3 tools/render_tikz.py            # render all new blocks
  python3 tools/render_tikz.py --force    # re-render everything
  python3 tools/render_tikz.py --check    # print tool availability only
"""

import re, os, sys, json, hashlib, shutil, subprocess, tempfile, pathlib, argparse

REPO_ROOT  = pathlib.Path(__file__).resolve().parent.parent
SZZ_DIR    = REPO_ROOT / 'SZZ'
CACHE_DIR  = REPO_ROOT / 'tikz-cache'
INDEX_FILE = CACHE_DIR / 'index.json'

TIKZ_RE = re.compile(r'```tikz\r?\n(.*?)\r?\n```', re.DOTALL)

# ── LaTeX preamble ────────────────────────────────────────────────────────────
# standalone class gives tight bounding box. Works with both latex and pdflatex.
PREAMBLE = r"""\documentclass[border=5pt]{standalone}
\usepackage{tikz}
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
\usetikzlibrary{arrows,arrows.meta,calc,patterns,decorations.pathmorphing,positioning,shapes}
"""

def cmd_exists(name: str) -> bool:
    return shutil.which(name) is not None

def block_hash(src: str) -> str:
    """16-char hex SHA-256 prefix. Must match wiki.js tikzHash() logic."""
    return hashlib.sha256(src.strip().encode('utf-8')).hexdigest()[:16]

def build_doc(tikz_src: str) -> str:
    """Wrap TikZ source in a standalone LaTeX document."""
    src = tikz_src.strip()
    if r'\begin{document}' in src:
        # Obsidian notes already include \begin{document}…\end{document}
        return PREAMBLE + src
    return PREAMBLE + '\n\\begin{document}\n' + src + '\n\\end{document}\n'

def run(cmd, cwd=None, timeout=90) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, capture_output=True, text=True,
                          timeout=timeout, cwd=cwd)

# ── Rendering back-ends ───────────────────────────────────────────────────────

def _dvi_route(doc: str, tmp: pathlib.Path, svg_out: pathlib.Path) -> bool:
    """latex → dvisvgm  (no Ghostscript needed, works on Windows + Linux)."""
    if not cmd_exists('latex') or not cmd_exists('dvisvgm'):
        return False
    tex = tmp / 'fig.tex'
    tex.write_text(doc, encoding='utf-8')
    r = run(['latex', '-interaction=nonstopmode', '-halt-on-error', 'fig.tex'], cwd=tmp)
    dvi = tmp / 'fig.dvi'
    if r.returncode != 0 or not dvi.exists():
        return False
    r2 = run(['dvisvgm', '--no-fonts', '--exact-bbox', '-o', str(svg_out), 'fig.dvi'], cwd=tmp)
    return r2.returncode == 0 and svg_out.exists()

def _pdf_dvisvgm_route(doc: str, tmp: pathlib.Path, svg_out: pathlib.Path) -> bool:
    """pdflatex → dvisvgm --pdf  (needs Ghostscript for PDF parsing)."""
    if not cmd_exists('pdflatex') or not cmd_exists('dvisvgm'):
        return False
    tex = tmp / 'fig.tex'
    tex.write_text(doc, encoding='utf-8')
    r = run(['pdflatex', '-interaction=nonstopmode', '-halt-on-error', 'fig.tex'], cwd=tmp)
    pdf = tmp / 'fig.pdf'
    if r.returncode != 0 or not pdf.exists():
        return False
    r2 = run(['dvisvgm', '--pdf', '--no-fonts', '--exact-bbox',
              '-o', str(svg_out), 'fig.pdf'], cwd=tmp)
    return r2.returncode == 0 and svg_out.exists()

def _pdf2svg_route(doc: str, tmp: pathlib.Path, svg_out: pathlib.Path) -> bool:
    """pdflatex → pdf2svg  (Linux / Homebrew Mac)."""
    if not cmd_exists('pdflatex') or not cmd_exists('pdf2svg'):
        return False
    tex = tmp / 'fig.tex'
    tex.write_text(doc, encoding='utf-8')
    r = run(['pdflatex', '-interaction=nonstopmode', '-halt-on-error', 'fig.tex'], cwd=tmp)
    pdf = tmp / 'fig.pdf'
    if r.returncode != 0 or not pdf.exists():
        return False
    r2 = run(['pdf2svg', str(pdf), str(svg_out)], cwd=tmp)
    return r2.returncode == 0 and svg_out.exists()

BACKENDS = [
    ('latex+dvisvgm (DVI)',      _dvi_route),
    ('pdflatex+dvisvgm (PDF)',   _pdf_dvisvgm_route),
    ('pdflatex+pdf2svg',         _pdf2svg_route),
]

def render_block(tikz_src: str, svg_path: pathlib.Path) -> tuple[bool, str]:
    """Try each backend in order. Returns (success, backend_name_used)."""
    doc = build_doc(tikz_src)
    with tempfile.TemporaryDirectory() as _tmp:
        tmp = pathlib.Path(_tmp)
        svg_tmp = tmp / 'fig.svg'
        for name, fn in BACKENDS:
            try:
                ok = fn(doc, tmp, svg_tmp)
            except FileNotFoundError:
                continue
            except subprocess.TimeoutExpired:
                print(f'    [{name}] timeout', file=sys.stderr)
                continue
            if ok:
                svg_path.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(svg_tmp, svg_path)
                return True, name
            svg_tmp.unlink(missing_ok=True)   # clean for next attempt
    return False, ''

# ── Tool check ────────────────────────────────────────────────────────────────

def check_tools():
    tools = ['latex', 'pdflatex', 'dvisvgm', 'pdf2svg', 'gs']
    print('Tool availability:')
    for t in tools:
        found = cmd_exists(t)
        status = '✓' if found else '✗'
        print(f'  {status}  {t}')
    print()
    if cmd_exists('latex') and cmd_exists('dvisvgm'):
        print('→ DVI route available (recommended)')
    elif cmd_exists('pdflatex') and cmd_exists('dvisvgm') and cmd_exists('gs'):
        print('→ PDF+dvisvgm route available (needs Ghostscript)')
    elif cmd_exists('pdflatex') and cmd_exists('pdf2svg'):
        print('→ pdf2svg route available')
    else:
        print('✗ No usable rendering route found.')
        print()
        print('Install one of:')
        print('  Windows : TeX Live  https://tug.org/texlive/')
        print('  macOS   : brew install mactex  OR  brew install texlive')
        print('  Linux   : sudo apt-get install texlive-pictures dvisvgm')

# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(description='Pre-render TikZ blocks to SVG')
    ap.add_argument('--force',  action='store_true', help='Re-render all blocks (ignore cache)')
    ap.add_argument('--check',  action='store_true', help='Print tool availability and exit')
    ap.add_argument('--file',   metavar='PATH', help='Process only this markdown file')
    args = ap.parse_args()

    if args.check:
        check_tools()
        return

    CACHE_DIR.mkdir(exist_ok=True)
    index: dict = {}
    if not args.force and INDEX_FILE.exists():
        try:
            index = json.loads(INDEX_FILE.read_text(encoding='utf-8'))
        except Exception:
            index = {}

    # Collect markdown files
    if args.file:
        md_files = [pathlib.Path(args.file).resolve()]
    else:
        md_files = sorted(
            f for f in SZZ_DIR.rglob('*.md')
            if '.obsidian' not in f.parts and 'ai' not in f.parts
        )

    total = rendered = skipped = failed = 0

    for md_path in md_files:
        try:
            content = md_path.read_text(encoding='utf-8', errors='ignore')
        except Exception as e:
            print(f'[skip] {md_path.name}: {e}')
            continue

        blocks = TIKZ_RE.findall(content)
        if not blocks:
            continue

        try:
            rel = md_path.relative_to(REPO_ROOT)
        except ValueError:
            rel = md_path
        print(f'\n{rel}  ({len(blocks)} block{"s" if len(blocks)!=1 else ""})')

        for tikz_src in blocks:
            total += 1
            h     = block_hash(tikz_src)
            svg_p = CACHE_DIR / f'{h}.svg'

            if not args.force and svg_p.exists() and h in index:
                skipped += 1
                print(f'  [{h[:8]}] cached')
                continue

            print(f'  [{h[:8]}] rendering…', end=' ', flush=True)
            ok, backend = render_block(tikz_src, svg_p)
            if ok:
                index[h] = f'tikz-cache/{h}.svg'
                rendered += 1
                print(f'OK  ({backend})')
            else:
                failed += 1
                print('FAILED')

    INDEX_FILE.write_text(
        json.dumps(index, indent=2, ensure_ascii=False, sort_keys=True),
        encoding='utf-8'
    )

    print(f'\n{"─"*50}')
    print(f'Total {total} blocks: {rendered} rendered, {skipped} cached, {failed} failed')
    print(f'Index → {INDEX_FILE}')
    if rendered > 0:
        print('\nNext steps:')
        print('  git add tikz-cache/')
        print('  git commit -m "Add pre-rendered TikZ SVGs"')
        print('  git push')

if __name__ == '__main__':
    main()
