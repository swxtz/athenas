import { ApiProperty } from "@nestjs/swagger";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    productId: z.string(),
});

export class CreateBuyOrderDTO extends createZodDto(schema) {
    @ApiProperty()
    productId: string;
}
