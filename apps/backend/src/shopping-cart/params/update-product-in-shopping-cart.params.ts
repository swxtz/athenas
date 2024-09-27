import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class UpdateProductInShoppingCartParams {
    @ApiProperty()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    @IsString({ message: "O valor deve ser uma string" })
    @IsUUID(4, { message: "O valor deve ser um UUID" })
    id: string;

    @ApiProperty()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    @IsString({ message: "O valor deve ser uma string" })
    name: string;
}
