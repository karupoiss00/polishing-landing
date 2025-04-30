FROM nginx:alpine

# Устанавливаем envsubst для подстановки переменных
RUN apk add --no-cache gettext

# Копируем шаблоны
COPY templates /etc/nginx/templates

# Заменяем переменные при старте
CMD ["/bin/sh", "-c", "envsubst '$$DOMAIN' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]