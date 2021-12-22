# builder instance
FROM node:lts-alpine AS builder
WORKDIR /app

# install all dependencies
COPY package*.json ./
RUN npm install

# copy source and build
COPY . .
RUN npm run build


# final instance
FROM node:lts-alpine
WORKDIR /app

# install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# copy build from builder
COPY --from=builder /app/dist ./dist

# define default port and expose it
ENV PORT 80
EXPOSE 80

# set opencontainer labels
LABEL org.opencontainers.image.title="pgpql"
LABEL org.opencontainers.image.url="https://github.com/SimonPrinz/pgpql"
LABEL org.opencontainers.image.source="https://github.com/SimonPrinz/pgpql"

# run start script
CMD ["npm", "run", "start"]
