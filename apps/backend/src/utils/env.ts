import dotenv from "dotenv";
dotenv.config();

import { z } from "zod";

const schema = z.object({
    PORT: z.coerce.number(),
    DATABASE_URL: z.string(),
    DEV_ENV: z.coerce.boolean(),
    JWT_SECRET: z.string(),
    RABBITMQ_URL: z.string()
});

const { DATABASE_URL, PORT, DEV_ENV, JWT_SECRET, RABBITMQ_URL } = schema.parse(process.env);

export const env = {
    port: PORT,
    databaseUrl: DATABASE_URL,
    dev: DEV_ENV,
    jwtSecret: JWT_SECRET,
    rabbitmqUrl: RABBITMQ_URL,
};