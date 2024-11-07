import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class sendAccountVerificationEmailDTO {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    to: string;

    @IsString()
    @IsEmail()
    @IsOptional()
    from: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    link: string;
}
