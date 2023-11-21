FROM node:18.14.0-alpine

WORKDIR /works

COPY ./.yarnrc.yml ./package.json ./yarn.lock ./

RUN cat package.json
RUN corepack enable
RUN yarn install

COPY . ./

EXPOSE 3000

CMD ["yarn", "dev"]
