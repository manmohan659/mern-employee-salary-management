#!/bin/sh
set -e

# If an SSL config template is mounted (production), copy it to the active config dir.
# Deploy scripts mount nginx-ssl.conf to /etc/nginx/templates/ as read-only,
# so we copy it to the writable /etc/nginx/conf.d/ before modifying.
if [ -f /etc/nginx/templates/default.conf.template ]; then
  cp /etc/nginx/templates/default.conf.template /etc/nginx/conf.d/default.conf
fi

# If SSL certs are mounted (production), copy them so the nginx user can read them.
# Let's Encrypt dirs are root:root 0700, which the non-root nginx user cannot access.
if [ -d /etc/nginx/ssl/live ]; then
  mkdir -p /tmp/ssl-certs
  cp -rL /etc/nginx/ssl/live/* /tmp/ssl-certs/
  chown -R nginx:nginx /tmp/ssl-certs
  find /tmp/ssl-certs -type d -exec chmod 755 {} \;
  find /tmp/ssl-certs -type f -exec chmod 644 {} \;
  # Rewrite cert paths in the (now writable) config
  sed -i 's|/etc/nginx/ssl/live|/tmp/ssl-certs|g' /etc/nginx/conf.d/default.conf
fi

# Drop privileges to nginx and exec the CMD
exec su-exec nginx "$@"
