FROM node:7.9.0

COPY . /app
COPY package.json /app/package.json
COPY .env /app/.env

WORKDIR /app

RUN npm install
