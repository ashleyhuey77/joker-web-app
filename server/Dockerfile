FROM node:16.20.0-alpine

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY . .
RUN yarn install
EXPOSE 4000
CMD ["yarn", "start"]
