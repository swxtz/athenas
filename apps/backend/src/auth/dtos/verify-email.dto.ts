import { ApiProperty } from "@nestjs/swagger";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    token: z.string(),
});

export class VerifyEmailDTO extends createZodDto(schema) {
    @ApiProperty()
    token: string;
}

export type EmailTokenDTO = z.infer<typeof schema>;
