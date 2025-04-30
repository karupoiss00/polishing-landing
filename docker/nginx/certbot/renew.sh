#!/bin/sh

docker-compose run --rm certbot certonly \
  --webroot \
  --webroot-path /var/www/certbot \
  --email $EMAIL \
  --agree-tos \
  --no-eff-email \
  -d $DOMAIN \
  --force-renewal

docker-compose restart nginx