FROM node:20.14.0-alpine

RUN mkdir -p /home/node/app 

WORKDIR /home/node/app

COPY . . 

#ENV NODE_ENV=production

RUN npm i -g corepack @nestjs/cli

RUN rm -rf node_modules

RUN pnpm i 

RUN pnpm run build

EXPOSE 3001

CMD [ "pnpm", "run", "start:prod" ]

