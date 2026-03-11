#!/bin/sh
set -e

# If an SSL config template is mounted (production), copy it into the
# active config directory.  Deploy scripts mount the host's nginx-ssl.conf
# at /etc/nginx/templates/ as read-only, so we copy it to the writable
# /etc/nginx/conf.d/ location that nginx actually reads.
if [ -f /etc/nginx/templates/default.conf.template ]; then
  cp /etc/nginx/templates/default.conf.template /etc/nginx/conf.d/default.conf
fi

exec "$@"
