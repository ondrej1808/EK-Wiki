# Start dev server on Windows (port 8000, auto-reload)
Set-Location $PSScriptRoot

if (-not (Test-Path ".venv")) {
    Write-Host "Creating virtual environment..."
    python -m venv .venv
}

.\.venv\Scripts\Activate.ps1
pip install -q -r requirements.txt

Write-Host "Starting Cards dev server at http://localhost:8000"
uvicorn server:app --host 0.0.0.0 --port 8000 --reload
