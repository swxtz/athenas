import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class GetProductsByCategoriesQuery {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    category: string;
}
