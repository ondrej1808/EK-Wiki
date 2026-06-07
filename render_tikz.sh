#!/usr/bin/env bash
# render_tikz.sh — Pre-render TikZ diagrams to SVG (Linux / macOS)
# Run from repo root:  ./render_tikz.sh
# Options:  --check   print tool availability only
#           --force   re-render everything (ignore cache)
#           --file F  process only file F

set -euo pipefail
cd "$(dirname "$0")"

# ── Check for Python ──────────────────────────────────────────────────────────
PYTHON=""
for cmd in python3 python; do
    if command -v "$cmd" &>/dev/null; then PYTHON="$cmd"; break; fi
done
if [ -z "$PYTHON" ]; then
    echo "ERROR: Python 3 not found." >&2; exit 1
fi

# ── Check / offer to install LaTeX ───────────────────────────────────────────
if ! command -v latex &>/dev/null && ! command -v pdflatex &>/dev/null; then
    echo ""
    echo "LaTeX not found."
    if command -v apt-get &>/dev/null; then
        echo "Install with:"
        echo "  sudo apt-get install -y texlive-pictures texlive-latex-extra dvisvgm"
        read -r -p "Install now? [y/N] " yn
        if [[ "$yn" == [yY] ]]; then
            sudo apt-get update -q
            sudo apt-get install -y --no-install-recommends \
                texlive-latex-base texlive-latex-extra texlive-pictures dvisvgm
        else
            exit 1
        fi
    elif command -v brew &>/dev/null; then
        echo "Install with:  brew install --cask mactex"
        exit 1
    else
        echo "Install TeX Live: https://tug.org/texlive/"
        exit 1
    fi
fi

# ── Run ───────────────────────────────────────────────────────────────────────
echo ""
echo "Running TikZ pre-renderer…"
echo ""

"$PYTHON" tools/render_tikz.py "$@"
EXIT=$?

echo ""
if [ $EXIT -eq 0 ] && [[ "$*" != *--check* ]]; then
    echo "Done! SVGs saved to tikz-cache/"
    echo ""
    echo "To deploy:"
    echo "  git add tikz-cache/"
    echo "  git commit -m 'Add pre-rendered TikZ SVGs'"
    echo "  git push"
fi
exit $EXIT
