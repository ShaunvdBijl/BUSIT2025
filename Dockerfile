FROM php:8.3-apache

# Install prerequisites and Microsoft SQL Server PHP drivers
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        unixodbc-dev \
        gnupg \
        dirmngr \
        apt-transport-https \
        curl \
    && curl -sSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /usr/share/keyrings/msprod.gpg \
    && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/msprod.gpg] https://packages.microsoft.com/debian/12/prod bookworm main" > /etc/apt/sources.list.d/mssql-release.list \
    && apt-get update \
    && ACCEPT_EULA=Y apt-get install -y --no-install-recommends msodbcsql18 \
    && pecl install sqlsrv pdo_sqlsrv \
    && docker-php-ext-enable sqlsrv pdo_sqlsrv \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html

# Copy application files into the Apache web root
COPY ["Final version/BUSIT Application/", "/var/www/html/"]

EXPOSE 80

CMD ["apache2-foreground"]
