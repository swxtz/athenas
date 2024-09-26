import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsPositive, IsUUID, Min } from "class-validator";

export class AddProductInUserShoppingCartDTO {
    @ApiProperty()
    @IsUUID(4, { message: "O valor deve ser um UUID" })
    @ApiProperty()
    id: string;

    @ApiProperty()
    @IsNumber({ allowNaN: false }, { message: "O valor deve ser um número" })
    @IsPositive({ message: "O valor deve ser positivo" })
    @Min(1, { message: "O valor mínimo é 1" })
    @Type(() => Number)
    amount: number;

    @ApiProperty()
    name: string;
}
