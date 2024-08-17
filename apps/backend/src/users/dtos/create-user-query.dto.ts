import { ApiProperty } from "@nestjs/swagger";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    d: z.boolean({ message: "deve ser um booleano" }).optional(),
});

export class CreateUserQueryDto extends createZodDto(schema) {
    @ApiProperty()
    d: boolean;
}

export type UserQueryDto = z.infer<typeof schema>;
