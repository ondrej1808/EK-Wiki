@echo off
REM Start dev server on Windows (port 8000, auto-reload, image upload enabled)
cd /d "%~dp0"

if not exist ".venv" (
    echo Creating virtual environment...
    python -m venv .venv
)

call ".venv\Scripts\activate.bat"
pip install -q -r requirements.txt

echo Starting Cards dev server at http://localhost:8000
uvicorn server:app --host 0.0.0.0 --port 8000 --reload
