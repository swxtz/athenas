import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString, IsUUID } from "class-validator";

export class calculateFreightUserDTO {
    @ApiProperty()
    @IsString()
    cep: string;

    @ApiProperty()
    @IsArray()
    @IsUUID(4, { each: true })
    products: string[];
}
