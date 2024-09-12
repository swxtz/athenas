import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsNumber, IsPositive } from "class-validator";

export class GetAllCategoriesDTO {
    @ApiProperty()
    @IsNumber()
    @IsPositive()
    @IsInt()
    @Type(() => Number)
    limit: number;
}
