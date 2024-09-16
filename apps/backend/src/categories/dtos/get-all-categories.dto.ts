
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsNumber, IsOptional, IsPositive } from "class-validator";

export class GetAllCategoriesDTO {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    @IsPositive()
    @IsInt()
    @Type(() => Number)
    limit: number;
}
