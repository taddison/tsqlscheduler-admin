FROM node:alpine

WORKDIR /app

COPY package.json /app/package.json

COPY sample-tasks /tasks

RUN yarn install

CMD ["yarn", "dev"]