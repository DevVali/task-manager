# Starts server with mix watch

Write-Host "Dev server started at http://localhost:8000" -ForegroundColor yellow
php -S localhost:8000 -t public &
yarn run mix watch &
