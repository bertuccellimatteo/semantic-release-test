FROM node:19-alpine

WORKDIR /app

COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

CMD [ "node", "src/index.js" ]
