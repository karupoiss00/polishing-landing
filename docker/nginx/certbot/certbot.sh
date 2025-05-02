#!/bin/sh

domain="$DOMAIN"
email="$EMAIL"

# Получение сертификата (только при первом запуске)
if [ ! -d "/etc/letsencrypt/live/$domain" ]; then
    certbot certonly --webroot -w /var/www/certbot \
        --email "$email" \
        --agree-tos \
        --no-eff-email \
        -d "$domain" \
        --rsa-key-size 4096 \
        --force-renewal
fi

# Автоматическое обновление сертификатов
certbot renew