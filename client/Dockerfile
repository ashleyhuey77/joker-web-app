FROM node:16.20.0-alpine

RUN apk update
RUN apk upgrade
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY . .
RUN yarn install
EXPOSE 3000
#RUN yarn start
CMD yarn test
