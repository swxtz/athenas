import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class getProductsDeletedQuery {
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    limit?: number;
}
