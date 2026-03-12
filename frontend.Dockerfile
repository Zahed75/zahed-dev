FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Expose dev port
EXPOSE 4200

# Start dev server with host check disabled for reverse proxy support
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
