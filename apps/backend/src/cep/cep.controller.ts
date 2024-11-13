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
import { CreateUserAddressDTO } from "./dtos/create-user-adress.dto";
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

    @Post("create-user-address")
    @UseGuards(AuthGuard)
    async createUserAdress(
        @Body(new ValidationPipe()) body: CreateUserAddressDTO,
        @Headers("authorization") token: string,
    ) {
        return this.cepService.createUserAddress(body, token);
    }

    @Get("get-user-address")
    @UseGuards(AuthGuard)
    async getUserAdress(@Headers("authorization") token: string) {
        return this.cepService.getUserAddress(token);
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
        return this.cepService.deleteUserAddress(token, params);
    }

    @Delete("delete-all-user-address")
    @HttpCode(200)
    @UseGuards(AuthGuard)
    async deleteManyProductInShoppingCart(
        @Headers("authorization") token: string,
    ) {
        return this.cepService.deleteAllUserAddress(token);
    }
}
