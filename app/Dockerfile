FROM node:18.14.0-alpine

WORKDIR /works

COPY . /works

RUN yarn config set enableGlobalCache false
RUN yarn install

CMD ["yarn", "dev"]
