import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsNumber, IsOptional, IsPositive } from "class-validator";

export class GetBestSellersDTO {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @IsInt()
    @Type(() => Number)
    @ApiProperty()
    limit?: number;
}
