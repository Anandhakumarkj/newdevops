FROM nginx:latest
# Copy the built files from the previous stage
FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

COPY public/ /usr/share/nginx/html
# Expose port 80 (the default HTTP port)
EXPOSE 80
# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
