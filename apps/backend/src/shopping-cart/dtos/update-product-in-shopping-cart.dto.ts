import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
    Min,
} from "class-validator";

export class UpdateProductInShoppingCartDTO {
    @ApiProperty()
    @IsNumber({ allowNaN: false }, { message: "O valor deve ser um número" })
    @IsPositive({ message: "O valor deve ser positivo" })
    @Min(1, { message: "O valor mínimo é 1" })
    @Type(() => Number)
    amount: number;

    @ApiProperty()
    @IsEnum(["increment", "decrease"])
    order: "increment" | "decrease";

    @ApiProperty()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    @IsString({ message: "O valor deve ser uma string" })
    name: string;
}
