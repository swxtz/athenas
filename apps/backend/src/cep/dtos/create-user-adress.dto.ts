import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserAdressDTO {
    @ApiProperty()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    street: string;

    @ApiProperty()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    houseNumber: number;

    @ApiProperty()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    neighborhood: string;

    @ApiProperty()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    city: string;

    @ApiProperty()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    state: string;

    @ApiProperty()
    @IsOptional()
    complement: string;

    @ApiProperty()
    @IsOptional()
    apartment: number;

    @ApiProperty()
    @IsOptional()
    apBlock: number;
}
