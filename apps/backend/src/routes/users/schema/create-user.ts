import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(3, "Nome precisa ter 3 caracteres"),
    email: z.string().email("Campo precisa ter um email valido").min(5, "Minimo de 5 caracteres"),
    password: z.string().min(8, "A senha deve conter no minimo 8 caracteres").max(255, "A senha só pode conter 255"),
    birthdate: z.string().datetime({ message: "A idade tem que ser datetime" }),
    document: z.string().min(11, "O documento deve conter minimo de 11 caracteres").max(12, "O documento deve conter apenas 12 caracteres ")
});