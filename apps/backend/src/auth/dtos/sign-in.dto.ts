import { ApiProperty } from "@nestjs/swagger";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    email: z
        .string({ message: "deve ser um texto" })
        .email("deve ser um email valido")
        .min(3, "deve ter no minimo 3 letras"),
    password: z
        .string({ message: "deve ser um texto" })
        .min(6, "deve ter no minimo 6 caracteres"),
});

export class SignInDTO extends createZodDto(schema) {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}

export type LoginDTO = z.infer<typeof schema>;
