# BUSIT Application

This repository contains the BUSIT community farming platform and a Docker-based environment for running the PHP/Apache frontend with SQL Server.

## Project structure

- `Dockerfile` — builds a PHP 8.3 Apache image with Microsoft SQL Server drivers installed
- `docker-compose.yml` — starts the `app` service and a SQL Server container
- `.env.example` — environment variables template for Docker and application configuration
- `.dockerignore` — files excluded from the Docker build context
- `Final version/BUSIT Application/` — actual web application source files served by Apache
- `Final version/BUSIT Application/config.php` — loads database configuration from environment variables

### Key source locations

```text
Final version/
  BUSIT Application/
    index.html
    BUSITHome Page.html
    BUSITRequest.html
    BUSITFoodBank.html
    submit_request.php
    config.php
    BUSIT.js
    BUSIT.css
    signUp.html
    login.php
```

> Important: run Docker commands from the repository root: `c:\Users\shaun\OneDrive\Belgium campus\BUSIT\Final version`

## Setup

1. Copy `.env.example` to `.env`:

   ```powershell
   copy .env.example .env
   ```

2. Update `.env` with your own values:

   - `DB_SERVER=sqlserver,1433`
   - `DB_NAME=seed_tracking_new`
   - `DB_USER=farming_user`
   - `DB_PASSWORD=your_secure_password_here`
   - `SA_PASSWORD=YourStrong!Passw0rd`

3. Start the application:

   ```powershell
   docker compose up --build
   ```

4. Open the app in your browser:

   ```text
   http://localhost:8080
   ```

## Running in the background

To run the stack detached:

```powershell
docker compose up --build -d
```

Stop the stack with:

```powershell
docker compose down
```

## Notes

- The `app` service is exposed on port `8080`
- SQL Server is exposed on port `1433`
- `DB_SERVER` must be set to `sqlserver,1433` because Docker Compose uses the service name `sqlserver`
- `.env` is ignored by Git, so secrets do not get committed
- The application currently includes a placeholder `login.php` endpoint and a client-side sign-up flow that uses browser storage

## Troubleshooting

- If the site does not load at `http://localhost:8080`, verify the containers are running:

  ```powershell
  docker compose ps
  ```

- Check the logs for errors:

  ```powershell
  docker compose logs --no-color --tail=80
  ```

- If SQL Server is not ready yet, wait a few minutes while the container initializes

## File changes after Docker setup

- `Dockerfile` now copies the real application source from `Final version/BUSIT Application/` into `/var/www/html`
- `docker-compose.yml` uses an `.env` file for both the app and SQL Server
- `.dockerignore` prevents build context files like `.env`, `.git`, and logs from being sent to Docker
- `.gitignore` ignores `config.php` and environment secret files
