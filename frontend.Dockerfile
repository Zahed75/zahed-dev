# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npx ng build --configuration production

# Stage 2: Serve
FROM nginx:stable-alpine

# Copy custom nginx configuration
COPY nginx/frontend.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from stage 1
# Note: @angular/build:application puts files in dist/zahed-dev/browser
COPY --from=build /app/dist/zahed-dev/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
