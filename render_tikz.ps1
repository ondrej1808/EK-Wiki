# render_tikz.ps1 — Pre-render TikZ diagrams to SVG (Windows)
# Run from repo root: .\render_tikz.ps1
# Options:  .\render_tikz.ps1 --check   (just check tool availability)
#           .\render_tikz.ps1 --force   (re-render everything)

param(
    [switch]$Check,
    [switch]$Force,
    [string]$File = ""
)

Set-Location $PSScriptRoot

# ── Check for Python ──────────────────────────────────────────────────────────
$python = $null
foreach ($cmd in @("python", "python3", "py")) {
    if (Get-Command $cmd -ErrorAction SilentlyContinue) {
        $python = $cmd; break
    }
}
if (-not $python) {
    Write-Host "ERROR: Python not found. Install from https://python.org" -ForegroundColor Red
    exit 1
}

# ── Check for LaTeX tools ─────────────────────────────────────────────────────
$hasLatex   = [bool](Get-Command latex    -ErrorAction SilentlyContinue)
$hasPdfLtx  = [bool](Get-Command pdflatex -ErrorAction SilentlyContinue)
$hasDvisvgm = [bool](Get-Command dvisvgm  -ErrorAction SilentlyContinue)
$hasPdf2svg = [bool](Get-Command pdf2svg  -ErrorAction SilentlyContinue)

if (-not ($hasLatex -or $hasPdfLtx)) {
    Write-Host ""
    Write-Host "LaTeX not found." -ForegroundColor Red
    Write-Host "Install TeX Live for Windows: https://tug.org/texlive/windows.html"
    Write-Host "  (full install ~7 GB, or use the installer and select 'medium' scheme ~2 GB)"
    Write-Host ""
    Write-Host "Or MiKTeX: https://miktex.org/download"
    Write-Host "  (downloads packages on demand, smaller initial install)"
    Write-Host ""
    exit 1
}

if (-not $hasDvisvgm -and -not $hasPdf2svg) {
    Write-Host "WARNING: dvisvgm not found." -ForegroundColor Yellow
    Write-Host "  dvisvgm comes with TeX Live. If it's missing, add TeX Live bin/ to PATH."
    Write-Host ""
}

# ── Build args ────────────────────────────────────────────────────────────────
$args_list = @("tools\render_tikz.py")
if ($Check) { $args_list += "--check" }
if ($Force) { $args_list += "--force" }
if ($File)  { $args_list += "--file"; $args_list += $File }

# ── Run ───────────────────────────────────────────────────────────────────────
Write-Host ""
Write-Host "Running TikZ pre-renderer…" -ForegroundColor Cyan
Write-Host ""

& $python @args_list
$exit_code = $LASTEXITCODE

Write-Host ""
if ($exit_code -eq 0 -and -not $Check) {
    Write-Host "Done! SVGs saved to tikz-cache/" -ForegroundColor Green
    Write-Host ""
    Write-Host "To deploy, run:" -ForegroundColor Cyan
    Write-Host "  git add tikz-cache/"
    Write-Host "  git commit -m 'Add pre-rendered TikZ SVGs'"
    Write-Host "  git push"
}

exit $exit_code
