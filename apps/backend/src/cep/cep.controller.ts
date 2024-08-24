import { Controller, Get, Param } from "@nestjs/common";
import { CepService } from "./cep.service";
import { ApiTags } from "@nestjs/swagger";
import { ValidateCepDTO } from "./dtos/validate-cep.dto";

@Controller("cep")
@ApiTags("cep")
export class CepController {
    constructor(private readonly cepService: CepService) {}

    @Get("validate/:cep")
    async validateCEP(@Param() param: ValidateCepDTO) {
        return this.cepService.validateCEP(param);
    }
}
