import { z } from "zod";

const schema = z.object({
    teste: z.string()
});

export const env = schema.parse(process.env);