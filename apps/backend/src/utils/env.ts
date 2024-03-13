import { z } from "zod";

const schema = z.object({
    port: z.coerce.number()
});

export const env = schema.parse(process.env);