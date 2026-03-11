FROM node:20-alpine

WORKDIR /app

# Run as non-root for security (principle of least privilege)
RUN addgroup -g 1000 appgroup && \
    adduser -u 1000 -G appgroup -s /bin/sh -D appuser

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN mkdir -p public/images && chown -R appuser:appgroup /app

USER appuser

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://localhost:5000/health || exit 1

CMD ["node", "index.js"]
