import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsNumber } from "class-validator";

export class ValidateCepDTO {
    @IsNumber()
    @IsInt()
    @Type(() => Number)
    @ApiProperty()
    cep: string;
}
