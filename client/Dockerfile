FROM node:16.20.0-alpine

#RUN apk add --no-cache python2 g++ make

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]
