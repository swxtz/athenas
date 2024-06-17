import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { ZodValidationPipe } from "nestjs-zod";
import { SignInDTO } from "./dtos/sign-in.dto";
import { UserDTO } from "src/users/dtos/create-user.dto";

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("signin")
    @UsePipes(new ZodValidationPipe(SignInDTO))
    async singup(@Body() singInDTO: UserDTO) {
        return this.authService.signIn(singInDTO);
    }
}
