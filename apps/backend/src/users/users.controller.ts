import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiTags } from "@nestjs/swagger";
import { ZodValidationPipe } from "nestjs-zod";
import { CreateUserDTO } from "./dtos/create-user.dto";

@Controller("users")
@ApiTags("Users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @UsePipes(new ZodValidationPipe(CreateUserDTO))
    async createUser(@Body() createUserDTO: CreateUserDTO) {
        return this.usersService.createUser(createUserDTO);
    }
}
