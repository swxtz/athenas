import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class AddProductInUserShoppingCartDTO {
    @ApiProperty()
    @IsUUID(4, { message: "O valor deve ser um UUID" })
    productId: string;
}
