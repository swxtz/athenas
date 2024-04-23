import { z } from "zod";

export const authUserSchema = z.object({
    email: z.string().email("O email deve ser válido"),
    password: z.string().min(8, "A senha deve conter no minimo 8 caracteres").max(255, "A senha só pode conter 255")
});