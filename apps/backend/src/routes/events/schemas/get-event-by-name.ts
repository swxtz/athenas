import { z } from "zod";

export const getEventByNameSchema = z.object({
    name: z.string().min(2, "O nome deve ter no mínimo 2 caracteres").max(255, "O nome deve ter no máximo 255 caracteres")
});

export type GetEventByNameSchema = z.infer<typeof getEventByNameSchema>;