import {
    Body,
    Controller,
    Delete,
    Get,
    Headers,
    HttpCode,
    Param,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { CepService } from "./cep.service";
import { ApiTags } from "@nestjs/swagger";
import { ValidateCepDTO } from "./dtos/validate-cep.dto";
import { CreateUserAdressDTO } from "./dtos/create-user-adress.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { DeleteUserAdressParam } from "./params/delete-user-adress.params";

@Controller("cep")
@ApiTags("cep")
export class CepController {
    constructor(private readonly cepService: CepService) {}

    @Get("validate/:cep")
    async validateCEP(@Param() param: ValidateCepDTO) {
        return this.cepService.validateCEP(param);
    }

    @Post("create-user-adress")
    @UseGuards(AuthGuard)
    async createUserAdress(
        @Body(new ValidationPipe()) body: CreateUserAdressDTO,
        @Headers("authorization") token: string,
    ) {
        return this.cepService.createUserAdress(body, token);
    }

    @Get("get-user-adress")
    @UseGuards(AuthGuard)
    async getUserAdress(@Headers("authorization") token: string) {
        return this.cepService.getUserAdress(token);
    }

    @Delete("/delete-product/:id")
    @HttpCode(200)
    @UsePipes(new ValidationPipe({ transform: true }))
    @UseGuards(AuthGuard)
    async deleteUserAdress(
        @Param(new ValidationPipe({ transform: true }))
        params: DeleteUserAdressParam,
        @Headers("authorization") token: string,
    ) {
        return this.cepService.deleteUserAdress(token, params);
    }

    @Delete("delete-all-user-adress")
    @HttpCode(200)
    @UseGuards(AuthGuard)
    async deleteManyProductInShoppingCart(
        @Headers("authorization") token: string,
    ) {
        return this.cepService.deleteAllUserAdress(token);
    }
}
