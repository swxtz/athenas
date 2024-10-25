import { Injectable } from "@nestjs/common";
import axios from "axios";
import { ValidateCepDTO } from "./dtos/validate-cep.dto";

@Injectable()
export class CepService {
    constructor() {}

    async validateCEP(param: ValidateCepDTO) {
        const viacepResponse = await axios.get(
            `https://viacep.com.br/ws/${param.cep}/json/`,
        );

        if (viacepResponse.data.erro) {
            return {
                message: "CEP inválido",
            };
        }

        return viacepResponse.data;
    }

    async createUserAdress(body, token) {}
}
