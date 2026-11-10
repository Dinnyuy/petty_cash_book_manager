@echo off
title Create Petty Cash Desktop Shortcut
cd /d "%~dp0"

echo Creating Petty Cash Book Manager shortcut on your Desktop...

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ws = New-Object -ComObject WScript.Shell; ^
   $desktop = [System.Environment]::GetFolderPath('Desktop'); ^
   $shortcutPath = Join-Path -Path $desktop -ChildPath 'Petty Cash Book Manager.lnk'; ^
   $shortcut = $ws.CreateShortcut($shortcutPath); ^
   $shortcut.TargetPath = Join-Path -Path '%~dp0' -ChildPath 'Run_Petty_Cash_Manager.bat'; ^
   $shortcut.WorkingDirectory = '%~dp0'; ^
   $shortcut.Description = 'Petty Cash Book Manager - Offline Desktop Spreadsheet'; ^
   $shortcut.Save(); ^
   Write-Host 'Shortcut created successfully at:' $shortcutPath"

echo.
pause

