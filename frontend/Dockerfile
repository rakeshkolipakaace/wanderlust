FROM node:21 AS frontend-builder
ARG VITE_API_PATH
ENV VITE_API_PATH=$VITE_API_PATH
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ------------------- Stage 2: Final Stage ------------------------------
FROM nginx:alpine
COPY --from=frontend-builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]