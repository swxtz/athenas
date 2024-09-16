FROM node:20.14.0

RUN mkdir -p /home/node/app 

WORKDIR /home/node/app

COPY . . 

#ENV NODE_ENV=production

RUN npm i -g corepack @nestjs/cli

RUN pnpm i 

RUN pnpm run build

RUN pnpm prisma generate

EXPOSE 3001

CMD [ "pnpm", "run", "start:prod" ]

