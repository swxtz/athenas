import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserAdressDTO {
    @ApiProperty()
    cep: number;

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
