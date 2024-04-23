import { z } from "zod";

export const postEventSchema = z.object({
    name: z.string().min(2, "O nome deve ter no mínimo 2 caracteres").max(255, "O nome deve ter no máximo 255 caracteres"),
    price: z.number().min(0, "O valor deve ser positivo"),
    mainAttraction: z.string().min(2, "A atração deve ter no mínimo 2 caracteres").max(500, "A atração deve ter no máximo 500 caracteres"),
    imageUrl: z.string().url("A imagem tem que ser uma URL"),
    location: z.string(),
    date: z.string().datetime({ message: "A data precisa ser DateTime" }),

});