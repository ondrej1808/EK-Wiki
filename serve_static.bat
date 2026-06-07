@echo off
REM Serve the repo as plain static files — simulates GitHub Pages
REM No FastAPI/uvicorn, no /upload_image endpoint: just like the live Pages site.
cd /d "%~dp0"

set PORT=8080
if not "%~1"=="" set PORT=%~1

set PYTHON=
where python >nul 2>nul && set PYTHON=python
if not defined PYTHON (where python3 >nul 2>nul && set PYTHON=python3)
if not defined PYTHON (where py >nul 2>nul && set PYTHON=py)

if not defined PYTHON (
    echo Python not found — install Python or use "npx serve" instead.
    exit /b 1
)

echo Serving static files (GitHub Pages style) at http://localhost:%PORT%
%PYTHON% -m http.server %PORT%
