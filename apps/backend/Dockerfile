FROM node:20.14.0-alpine

RUN mkdir -p /home/node/app 

WORKDIR /home/node/app

COPY . . 

#ENV NODE_ENV=production

RUN npm i -g corepack @nestjs/cli

RUN pnpm i 

RUN pnpm run build

RUN pnpm prisma generate

EXPOSE 3000

CMD [ "pnpm", "run", "start:prod" ]

# FROM base AS install

# RUN mkdir -p /temp/prod
# COPY package.json bun.lockb /temp/prod/
# RUN cd /temp/prod && bun install --frozen-lockfile --production