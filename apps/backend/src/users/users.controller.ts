import {
    Body,
    Controller,
    Get,
    Headers,
    Post,
    UseGuards,
    UsePipes,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiTags } from "@nestjs/swagger";
import { ZodValidationPipe } from "nestjs-zod";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("users")
@ApiTags("Users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @UsePipes(new ZodValidationPipe(CreateUserDTO))
    async createUser(@Body() createUserDTO: CreateUserDTO) {
        return this.usersService.createUser(createUserDTO);
    }

    @Get("/all")
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get("/me")
    @UseGuards(AuthGuard)
    async getPersonalInfo(@Headers("authorization") token: string) {
        return this.usersService.getPersonalInfo(token);
    }
}
