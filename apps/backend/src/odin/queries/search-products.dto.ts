import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class SearchProductsQuery {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    search: string;
}
