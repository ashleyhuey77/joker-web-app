FROM node:latest

#RUN apk add --no-cache python2 g++ make

WORKDIR /app
COPY package.json yarn.lock ./
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]
