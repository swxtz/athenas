FROM node:20.14.0 as build

RUN mkdir -p /home/node/app 

WORKDIR /home/node/app

COPY . . 

#ENV NODE_ENV=production

RUN npm i -g corepack @nestjs/cli

RUN rm -rf node_modules

RUN pnpm i 

RUN pnpm run build



FROM node:20.14.0-alpine

WORKDIR /home/node/app

COPY . .

RUN npm i -g corepack

RUN pnpm i --prod

COPY --from=build /home/node/app/dist ./dist 

EXPOSE 3001

CMD [ "pnpm", "run", "start:prod" ]

