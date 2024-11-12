import { HttpException, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";

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

    async calculateFreight(rawtoken: string) {
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

            try {
                // Recuperando o carrinho de compras e os produtos
                const shoppingcartuser =
                    await this.prisma.shoppingCart.findFirst({
                        where: { userId: user.id },
                        select: { id: true },
                    });

                if (!shoppingcartuser) {
                    throw new Error(
                        "Carrinho de compras não encontrado para esse usuário.",
                    );
                }

                const products = await this.prisma.shoppingCartProduct.findMany(
                    {
                        where: { shoppingCartId: shoppingcartuser.id },
                    },
                );

                if (products.length === 0) {
                    throw new Error(
                        "Nenhum produto encontrado no carrinho de compras.",
                    );
                }

                // Variável para armazenar as promessas de criação de dimensões
                const dimensionsPromises = [];

                // Loop para criar dimensões para cada produto dentro do carrinho
                for (const product of products) {
                    const dimensionData = {
                        productId: product.productId, // Relacionando as dimensões com o produto
                        height: 1, // Valor fixo para altura (pode ser ajustado conforme necessário)
                        width: 1, // Valor fixo para largura
                        length: 1, // Valor fixo para comprimento
                        weight: 1, // Valor fixo para peso
                    };

                    // Criando as dimensões para o produto e armazenando a promessa
                    const createDimensionPromise =
                        this.prisma.productDimensions.create({
                            data: dimensionData,
                        });

                    // Adicionando a promessa à lista
                    dimensionsPromises.push(createDimensionPromise);
                }

                // Aguardando a criação de todas as dimensões
                const createdDimensions = await Promise.all(dimensionsPromises);

                // Exibindo as dimensões criadas (apenas para teste)
                console.log(
                    "Dimensões criadas para os produtos:",
                    createdDimensions,
                );

                // Agora você pode continuar com o cálculo de frete, por exemplo:
                let totalWeight = 0;
                let totalHeight = 0;
                let totalWidth = 0;
                let totalLength = 0;

                const productsForApi = [];

                // Usando as dimensões criadas para calcular o frete
                for (let i = 0; i < createdDimensions.length; i++) {
                    const dim = createdDimensions[i];
                    const product = products[i];

                    // Acumulando o peso e as dimensões
                    totalWeight += dim.weight;
                    totalHeight += dim.height;
                    totalWidth += dim.width;
                    totalLength += dim.length;

                    // Adicionando o produto à lista para a API de frete
                    productsForApi.push({
                        quantity: 1,
                        height: dim.height,
                        width: dim.width,
                        length: dim.length,
                        weight: dim.weight,
                    });
                }

                // Preparando os dados para enviar na requisição
                const options = {
                    method: "POST",
                    headers: {
                        accept: "application/json",
                        "User-Agent":
                            "Nome e versão da aplicação (email para contato técnico)",
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        from: { postal_code: "08060140" }, // CEP de origem
                        to: { postal_code: "20020050" }, // CEP de destino
                        services: "1,2,17", // Serviços disponíveis (ajuste conforme necessário)
                        options: {
                            own_hand: false,
                            receipt: false,
                            insurance_value: 0,
                            use_insurance_value: false,
                        },
                        package: {
                            height: totalHeight, // Soma das alturas
                            width: totalWidth, // Soma das larguras
                            length: totalLength, // Soma dos comprimentos
                            weight: totalWeight, // Peso total de todos os produtos
                        },
                        products: productsForApi, // Lista de todos os produtos com suas dimensões
                    }),
                };

                // Enviando a requisição para a API de frete
                const response = await fetch(
                    "https://sandbox.superfrete.com/api/v0/calculator",
                    options,
                );
                const result = await response.json();

                // Exibindo o resultado da API de frete
                console.log(result);
            } catch (err) {
                console.error("Erro durante o processamento:", err);
            }
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
