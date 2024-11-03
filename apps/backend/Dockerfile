FROM node:20.14.0-alpine

RUN mkdir -p /home/node/app 

WORKDIR /home/node/app

COPY . . 

#ENV NODE_ENV=production

ENV DATABASE_URL="postgresql://neondb_owner:2SNu5FhqiIQR@ep-shrill-tooth-a8oykgf7-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
ENV JWT_SECRET="secret"
ENV RESEND_EMAIL_API_KEY="api_key"

#AWS
ENV AWS_REGION="us-east-1"
ENV AWS_ACCESS_KEY="access_key"
ENV AWS_SECRET_ACCESS_KEY="secret_access_key"

#AWS S3
ENV AWS_BUCKET_NAME="bucket_name"

#ENDPOINTS
ENV WEB_URL="http://localhost:3000"

#ASAAS 
ENV ASAAS_API_URL="https://sandbox.asaas.com/api"
ENV ASAAS_API_KEY="api_key"

#SMTP
ENV SMTP_HOST="smtp.resend.com"
ENV SMTP_PORT=465
ENV SMTP_USERNAME="resend"
ENV SMTP_PASSWORD="api_key"

RUN npm i -g @nestjs/cli

RUN rm -rf node_modules

RUN npm i 

RUN npm run build

EXPOSE 3001

CMD [ "npm", "run", "start:prod" ]

