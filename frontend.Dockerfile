FROM node:20-alpine

WORKDIR /app

# Use npm ci for cleaner/faster builds if package-lock.json exists
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Expose the dev server port
EXPOSE 4200

# Start dev server - host 0.0.0.0 and disable host check for reverse proxy access
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
