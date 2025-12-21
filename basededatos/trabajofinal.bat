@echo off set PGPASSWORD=123456

REM Elimina la base de datos 
dropdb.exe -h localhost -p 5432 -U postgres backenddb

REM Crea la base de datos 
createdb.exe -h localhost -p 5432 -U postgres backenddb

REM Ejecuta tablas.sql
psql.exe -h localhost -p 5432 -U postgres -d backenddb -f tablas.sql

REM Ejecuta datos.sql
psql.exe -h localhost -p 5432 -U postgres -d backenddb -f datos.sql

echo. echo Restauración finalizada. 
pause