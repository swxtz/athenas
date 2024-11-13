import { HttpException, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";
import { calculateFreightUserDTO } from "./dtos/calculate-freight-dto";
import axios from "axios";

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
export class FreightService {
    constructor(
        private prisma: PrismaService,
        private utils: UtilsService,
        private jwt: JwtService,
    ) {}

    private logger = new Logger();

    async calculateFreight(
        productsDTO: calculateFreightUserDTO,
        rawtoken: string,
    ) {
        const token = this.utils.removeBearer(rawtoken);

        try {
            const jwtpayload: JWTBearerTokenPayLoad =
                await this.jwt.verifyAsync(token);

            if (!jwtpayload) {
                throw new HttpException({ message: "Token inválido" }, 401);
            }

            const user = await this.prisma.user.findFirst({
                where: { id: jwtpayload.id },
                select: { id: true, email: true },
            });

            if (!user) {
                throw new HttpException({ message: "JWT Inválido" }, 401);
            }

            try {
                const productDimensions =
                    await this.prisma.productDimensions.findMany({
                        where: {
                            productId: {
                                in: productsDTO.products,
                            },
                        },
                    });

                if (productDimensions.length !== productsDTO.products.length) {
                    const missingIds = productsDTO.products.filter(
                        (id) =>
                            !productDimensions.some(
                                (dim) => dim.productId === id,
                            ),
                    );

                    throw new Error(
                        `Dimensões não encontradas para os produtos: ${missingIds.join(", ")}`,
                    );
                }

                let totalWeight = 0;
                let totalHeight = 0;
                let totalWidth = 0;
                let totalLength = 0;

                const productsForApi = [];

                for (let i = 0; i < productsDTO.products.length; i++) {
                    const productDTO = productsDTO.products[i];
                    const dimension = productDimensions.find(
                        (dim) => dim.productId === productDTO,
                    );

                    if (!dimension) {
                        throw new Error(
                            `Dimensões não encontradas para o produto ${productDTO}`,
                        );
                    }

                    totalWeight += dimension.weight;
                    totalHeight += dimension.height;
                    totalWidth += dimension.width;
                    totalLength += dimension.length;

                    productsForApi.push({
                        quantity: 1,
                        height: dimension.height,
                        width: dimension.width,
                        length: dimension.length,
                        weight: dimension.weight,
                    });
                }

                const response = await axios.request({
                    method: "POST",
                    url: "https://sandbox.superfrete.com/api/v0/calculator",
                    headers: {
                        accept: "application/json",
                        "User-Agent":
                            "Nome e versão da aplicação (email para contato técnico)",
                        "content-type": "application/json",
                    },
                    data: {
                        from: { postal_code: "01153000" },
                        to: { postal_code: productsDTO.cep },
                        services: "1,2,17",
                        options: {
                            own_hand: false,
                            receipt: false,
                            insurance_value: 0,
                            use_insurance_value: false,
                        },
                        package: {
                            height: totalHeight,
                            width: totalWidth,
                            length: totalLength,
                            weight: totalWeight,
                        },
                        products: productsForApi,
                    },
                });
                console.log(response.data);
                return response.data;
            } catch (err) {
                console.error("Erro durante o processamento:", err.message);
                throw new HttpException({ message: err.message }, 500);
            }
        } catch (err) {
            console.error("Erro no token ou na autenticação:", err.message);
            throw new HttpException({ message: err.message }, 401);
        }
    }
    catch(err) {
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
