FROM node:21 AS backend-builder

WORKDIR /app

COPY . .

RUN npm install 

RUN npm test


FROM node:21-slim

WORKDIR /app

COPY --from=backend-builder /app .

EXPOSE 5001

# App
CMD ["node", "server.js"]