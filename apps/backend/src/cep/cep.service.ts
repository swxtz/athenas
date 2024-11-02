"use strict";
import { HttpException, Injectable, Logger } from "@nestjs/common";
import axios from "axios";
import { ValidateCepDTO } from "./dtos/validate-cep.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";
import { JwtService } from "@nestjs/jwt";
import { Prisma } from "@prisma/client";
import { CreateUserAdressDTO } from "./dtos/create-user-adress.dto";
import { DeleteUserAdressParam } from "./params/delete-user-adress.params";

interface JWTBearerTokenPayLoad {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updateAt: Date;
    iat: number;
    exp: number;
}

@Injectable()
export class CepService {
    constructor(
        private prisma: PrismaService,
        private utils: UtilsService,
        private jwt: JwtService,
    ) {}

    private logger = new Logger();

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

    async createUserAdress(body: CreateUserAdressDTO, rawtoken) {
        const token = this.utils.removeBearer(rawtoken);
        console.log(body.cep);

        try {
            const jwtpayload: JWTBearerTokenPayLoad =
                await this.jwt.verifyAsync(token);

            if (!jwtpayload) {
                throw new HttpException(
                    {
                        message: "Token inválido",
                    },
                    401,
                );
            }

            const user = await this.prisma.user.findFirst({
                where: { id: jwtpayload.id },
                select: {
                    id: true,
                    email: true,
                },
            });

            if (!user) {
                throw new HttpException(
                    {
                        message: "JWT Inválido",
                    },
                    401,
                );
            }
            const viacepResponse = await axios.get(
                `https://viacep.com.br/ws/${body.cep}/json/`,
            );

            if (viacepResponse.data.erro) {
                return {
                    message: "CEP inválido",
                };
            }
            const useradressdata = {
                userId: jwtpayload.id,
                city: viacepResponse.data.localidade,
                street: viacepResponse.data.logradouro,
                state: viacepResponse.data.estado,
                neighborhood: viacepResponse.data.bairro,
                houseNumber: body.houseNumber,
                complement: body.complement,
                apartment: body.apartment,
                apBlock: null,
            };
            if (body.apartment) {
                useradressdata.apBlock = body.apBlock;
            }
            const userAddress = await this.prisma.userAdress.create({
                data: { cep: body.cep, ...useradressdata },
            });

            return {
                userAddress,
                message: "Endereço registrado com sucesso",
            };
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                console.log(err.name);
                if (
                    err.name === "NotFoundError" &&
                    err.message === "No User found"
                ) {
                    this.logger.warn(`User not find`);
                    throw new HttpException(
                        {
                            message:
                                "Usuário não existe, tente relogar na aplicação",
                        },
                        401,
                    );
                }
            }

            if (err instanceof HttpException) {
                throw err;
            }

            this.logger.error(err);
            console.error(err);
            throw new HttpException(
                {
                    message: "Ocorreu um erro interno",
                },
                500,
            );
        }
    }

    async getUserAdress(rawtoken) {
        const token = this.utils.removeBearer(rawtoken);

        try {
            const jwtpayload: JWTBearerTokenPayLoad =
                await this.jwt.verifyAsync(token);

            if (!jwtpayload) {
                throw new HttpException(
                    {
                        message: "Token inválido",
                    },
                    401,
                );
            }

            const user = await this.prisma.user.findFirst({
                where: { id: jwtpayload.id },
                select: {
                    id: true,
                    email: true,
                },
            });

            if (!user) {
                throw new HttpException(
                    {
                        message: "JWT Inválido",
                    },
                    401,
                );
            }

            const userAdress = await this.prisma.userAdress.findMany({
                where: { userId: jwtpayload.id },
            });

            return userAdress;
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                console.log(err.name);
                if (
                    err.name === "NotFoundError" &&
                    err.message === "No User found"
                ) {
                    this.logger.warn(`User not find`);
                    throw new HttpException(
                        {
                            message:
                                "Usuário não existe, tente relogar na aplicação",
                        },
                        401,
                    );
                }
            }

            if (err instanceof HttpException) {
                throw err;
            }

            this.logger.error(err);
            console.error(err);
            throw new HttpException(
                {
                    message: "Ocorreu um erro interno",
                },
                500,
            );
        }
    }

    async deleteUserAdress(rawtoken, params: DeleteUserAdressParam) {
        const token = this.utils.removeBearer(rawtoken);

        try {
            const jwtpayload: JWTBearerTokenPayLoad =
                await this.jwt.verifyAsync(token);

            if (!jwtpayload) {
                throw new HttpException(
                    {
                        message: "Token inválido",
                    },
                    401,
                );
            }

            const user = await this.prisma.user.findFirst({
                where: { id: jwtpayload.id },
                select: {
                    id: true,
                    email: true,
                },
            });

            if (!user) {
                throw new HttpException(
                    {
                        message: "JWT Inválido",
                    },
                    401,
                );
            }

            await this.prisma.userAdress.delete({
                where: { id: params.id },
            });
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                console.log(err.name);
                if (
                    err.name === "NotFoundError" &&
                    err.message === "No User found"
                ) {
                    this.logger.warn(`User not find`);
                    throw new HttpException(
                        {
                            message:
                                "Usuário não existe, tente relogar na aplicação",
                        },
                        401,
                    );
                }
            }

            if (err instanceof HttpException) {
                throw err;
            }

            this.logger.error(err);
            console.error(err);
            throw new HttpException(
                {
                    message: "Ocorreu um erro interno",
                },
                500,
            );
        }
    }
    async deleteAllUserAdress(rawtoken) {
        const token = this.utils.removeBearer(rawtoken);

        try {
            const jwtpayload: JWTBearerTokenPayLoad =
                await this.jwt.verifyAsync(token);

            if (!jwtpayload) {
                throw new HttpException(
                    {
                        message: "Token inválido",
                    },
                    401,
                );
            }

            const user = await this.prisma.user.findFirst({
                where: { id: jwtpayload.id },
                select: {
                    id: true,
                    email: true,
                },
            });

            if (!user) {
                throw new HttpException(
                    {
                        message: "JWT Inválido",
                    },
                    401,
                );
            }

            await this.prisma.userAdress.deleteMany({
                where: {
                    userId: jwtpayload.id,
                },
            });
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                console.log(err.name);
                if (
                    err.name === "NotFoundError" &&
                    err.message === "No User found"
                ) {
                    this.logger.warn(`User not find`);
                    throw new HttpException(
                        {
                            message:
                                "Usuário não existe, tente relogar na aplicação",
                        },
                        401,
                    );
                }
            }

            if (err instanceof HttpException) {
                throw err;
            }

            this.logger.error(err);
            console.error(err);
            throw new HttpException(
                {
                    message: "Ocorreu um erro interno",
                },
                500,
            );
        }
    }
}
