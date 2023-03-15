FROM node:19-alpine

WORKDIR /app

COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml

RUN yarn install

