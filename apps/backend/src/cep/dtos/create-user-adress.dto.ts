import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional, IsInt, IsNumber } from "class-validator";

export class CreateUserAdressDTO {
    @ApiProperty()
    cep: string;

    @ApiProperty()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    houseNumber: number;

    @ApiProperty()
    @IsOptional()
    complement: string;

    @ApiProperty()
    @IsOptional()
    apartment: boolean;

    @ApiProperty()
    @IsOptional()
    apBlock: string;
}
