import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class GetEmailForResetPasswordDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;
}
