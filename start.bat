@echo off
title MEGA EDU - Sayt
cd /d "%~dp0"
echo ============================================
echo   MEGA EDU sayti ishga tushirilmoqda...
echo ============================================
echo.
if not exist node_modules (
  echo node_modules topilmadi. Ornatilmoqda (birinchi marta)...
  echo.
  call npm install
)
echo Brauzer avtomatik ochiladi. Tugatilgach bu oynani yoping.
echo.
call npm run dev
echo.
pause