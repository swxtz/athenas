import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class DeleteProductInShoppingCartParam {
    @ApiProperty()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    @IsString({ message: "O valor deve ser uma string" })
    @IsUUID(4, { message: "O valor deve ser um UUID" })
    id: string;
}
