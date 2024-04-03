import { z } from "zod";

const schema = z.object({
    PORT: z.coerce.number(),
    DATABASE_URL: z.string(),
    DEV_ENV: z.coerce.boolean(),
});

const { DATABASE_URL, PORT, DEV_ENV } = schema.parse(process.env);

export const env = {
    port: PORT,
    databaseUrl: DATABASE_URL,
    dev: DEV_ENV
};