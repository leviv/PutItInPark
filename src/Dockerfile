FROM node:11 as react-build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

COPY . ./

RUN yarn install

RUN yarn upgrade

RUN yarn

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "start"]
