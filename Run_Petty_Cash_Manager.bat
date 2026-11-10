@echo off
title Petty Cash Book Manager - Desktop
cd /d "%~dp0"

echo ==========================================================
echo        STARTING PETTY CASH BOOK MANAGER (OFFLINE)
echo ==========================================================
echo.

where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [1/2] Launching local desktop service via Python...
    python serve.py
    goto end
)

where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [1/2] Launching local desktop service via Node.js...
    node server.js
    goto end
)

echo [1/2] Opening standalone offline file in your default browser...
start "" "petty_cash_book_manager.html"

:end

