import { Body, Controller, HttpCode, Post, UsePipes } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { ZodValidationPipe } from "nestjs-zod";
import { SignInDTO } from "./dtos/sign-in.dto";
import { UserDTO } from "src/users/dtos/create-user.dto";
import { EmailTokenDTO, VerifyEmailDTO } from "./dtos/verify-email.dto";

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    @UsePipes(new ZodValidationPipe(SignInDTO))
    async login(@Body() singInDTO: UserDTO) {
        return this.authService.signIn(singInDTO);
    }

    @Post("verify-email")
    @HttpCode(200)
    @UsePipes(new ZodValidationPipe(VerifyEmailDTO))
    async verifyEmail(@Body() body: EmailTokenDTO) {
        return this.authService.verifyEmail(body.token);
    }
}
