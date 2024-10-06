import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class GetSearchParams {
    @ApiProperty()
    @IsNotEmpty({ message: "O valor não pode ser vazio" })
    @IsString({ message: "O valor deve ser uma string" })
    search: string;
}
