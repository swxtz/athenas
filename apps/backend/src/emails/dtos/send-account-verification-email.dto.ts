import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class sendAccountVerificationEmailDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    to: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsOptional()
    from: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    link: string;
}
