FROM node:21 AS backend-builder

WORKDIR /app

COPY . .

RUN npm install 

RUN npm test


FROM node:21-slim

# Install curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=backend-builder /app .

EXPOSE 5001

# App
CMD ["node", "server.js"]