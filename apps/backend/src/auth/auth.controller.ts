import {
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { ZodValidationPipe } from "nestjs-zod";
import { LoginDTO } from "./dtos/sign-in.dto";
import { VerifyEmailDTO } from "./dtos/verify-email.dto";
import { GetEmailForResetPasswordDTO } from "./dtos/get-email-for-reset-password.dto";

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    @UsePipes(new ZodValidationPipe(LoginDTO))
    async login(@Body() body: LoginDTO) {
        return this.authService.signIn(body);
    }

    @Post("verify-email")
    @HttpCode(200)
    @UsePipes(new ZodValidationPipe(VerifyEmailDTO))
    async verifyEmail(@Body() body: VerifyEmailDTO) {
        return this.authService.verifyEmail(body.token);
    }
    @Post("resend-account-verification-email")
    @UsePipes(new ValidationPipe({ transform: true }))
    async resendVeificationEmail(@Body() body: GetEmailForResetPasswordDTO) {
        return this.authService.resendVeificationEmail(body);
    }

    @Get("get-email-for-reset-password")
    @UsePipes(new ValidationPipe({ transform: true }))
    async getemailresetpass(@Body() body: GetEmailForResetPasswordDTO) {
        return this.authService.getUserEmail(body);
    }
}
