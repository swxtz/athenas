import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class GetOrderInfosDTO {
    @IsString()
    @IsUUID()
    @ApiProperty()
    orderId: string;
}
