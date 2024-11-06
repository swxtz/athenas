import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class PayPixOrderDTO {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    orderBuyId: string;
}
