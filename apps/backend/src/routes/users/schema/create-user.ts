import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(3, "Nome precisa ter 3 caracteres"),
    email: z.string().email("Campo precisa ter um email valido").min(5,"Minimo de 5 caracteres")
});