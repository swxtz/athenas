import {
    Body,
    Controller,
    Get,
    Headers,
    Param,
    Post,
    UseGuards,
    ValidationPipe,
} from "@nestjs/common";
import { CepService } from "./cep.service";
import { ApiTags } from "@nestjs/swagger";
import { ValidateCepDTO } from "./dtos/validate-cep.dto";
import { CreateUserAdressDTO } from "./dtos/create-user-adress.dto";
import { AuthGuard } from "src/auth/auth.guard";

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
        console.log(body.cep);
        return this.cepService.createUserAdress(body, token);
    }
}
