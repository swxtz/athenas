import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class sendAccountVerificationEmailDTO {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    to: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    from: string;

    @IsNotEmpty()
    @IsString()
    subject: string;
}
