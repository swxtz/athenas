import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class incrementLikeDTO {
    @IsString({
        message: "deve ser uma string",
    })
    @IsUUID(4, {
        message: "deve ser um UUID",
    })
    @ApiProperty()
    id: string;
}