import { ApiProperty } from "@nestjs/swagger";
import { IsJWT, IsNotEmpty, IsString } from "class-validator";

export class ResetPasswordDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsJWT()
    token: string;
}
