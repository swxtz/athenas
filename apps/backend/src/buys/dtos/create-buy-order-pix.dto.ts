import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsUUID } from "class-validator";

export class CreateBuyOrderPixDTO {
    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @IsUUID(4, { each: true })
    products: string[];
}
