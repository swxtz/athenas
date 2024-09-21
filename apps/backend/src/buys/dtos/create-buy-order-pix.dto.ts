import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    ArrayMinSize,
    IsArray,
    IsNumber,
    IsPositive,
    IsUUID,
    Min,
    ValidateNested,
} from "class-validator";

export class CreateBuyOrderPixDTO {
    @ApiProperty()
    @IsArray()
    @ArrayMinSize(1, { message: "Deve ter pelo menos um produto" })
    @ValidateNested({ each: true })
    @Type(() => ProductDTO)
    products: ProductDTO[];
}

export class ProductDTO {
    @ApiProperty()
    @IsUUID(4, { message: "Cada valor em produtos deve ser um UUID" })
    id: string;

    @ApiProperty()
    @IsNumber({ allowNaN: false }, { message: "O valor deve ser um número" })
    @IsPositive({ message: "O valor deve ser positivo" })
    @Min(1, { message: "O valor mínimo é 1" })
    @Type(() => Number)
    amount: number;
}
