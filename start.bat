@echo off
taskkill /f /im node.exe >nul 2>&1
cd /d "%~dp0backend"
echo Installing packages...
call npm install
echo.
echo ================================
echo  Open: http://localhost:5001
echo ================================
echo.
node server.js
pause
