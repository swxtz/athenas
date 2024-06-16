FROM node:20.14.0-alpine

RUN mkdir -p /home/node/app 

COPY . . 

WORKDIR /home/node/app

RUN npm i 

RUN npm run build

CMD [ "npm", "run" "start:prod" ]


# FROM base AS install

# RUN mkdir -p /temp/prod
# COPY package.json bun.lockb /temp/prod/
# RUN cd /temp/prod && bun install --frozen-lockfile --production