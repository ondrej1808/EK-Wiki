# Serve the repo as plain static files (Windows) — simulates GitHub Pages
# No FastAPI/uvicorn, no /upload_image endpoint: just like the live Pages site.
# Run from repo root: .\serve_static.ps1 [-Port 8080]

param(
    [int]$Port = 8080
)

Set-Location $PSScriptRoot

$python = $null
foreach ($cmd in @("python", "python3", "py")) {
    if (Get-Command $cmd -ErrorAction SilentlyContinue) {
        $python = $cmd; break
    }
}
if (-not $python) {
    Write-Host "Python not found — install Python or use 'npx serve' instead." -ForegroundColor Red
    exit 1
}

Write-Host "Serving static files (GitHub Pages style) at http://localhost:$Port"
& $python -m http.server $Port
