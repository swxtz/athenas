import { HttpException, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { EventsService } from "src/events/events.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";
import { CreateBuyOrderPixDTO } from "./dtos/create-buy-order-pix.dto";
import { JWTBearerTokenPayLoad } from "src/types/jwt-bearer-token-payload.interface";
import { Prisma } from "@prisma/client";

@Injectable()
export class PaymentsService {
    constructor(
        private prisma: PrismaService,
        private utils: UtilsService,
        private jwt: JwtService,
        private eventsService: EventsService,
    ) {}

    private logger = new Logger();

    async createBuyOrderPix(rawToken: string, products: CreateBuyOrderPixDTO) {
        const token = this.utils.removeBearer(rawToken);

        try {
            const jwtPayload: JWTBearerTokenPayLoad =
                await this.jwt.verifyAsync(token);

            if (!jwtPayload) {
                throw new HttpException(
                    {
                        message: "Token inválido",
                    },
                    401,
                );
            }

            const user = await this.prisma.user.findFirstOrThrow({
                where: { id: jwtPayload.id },
                select: {
                    id: true,
                    email: true,
                },
            });

            const orderProducts = [];

            // Verifica se o produto existe, se está disponível e se não foi deletado
            for (const product of products.products) {
                const productExists = await this.prisma.product.findFirst({
                    where: { id: product.id },
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        isAvailable: true,
                        isDeleted: true,
                        stock: true,
                    },
                });

                if (!productExists) {
                    this.logger.warn(`Product not find with: ${product.id}`);
                    throw new HttpException(
                        {
                            message: `Produto não encontrado com o id: ${product.id}`,
                        },
                        404,
                    );
                }

                if (productExists.isDeleted) {
                    this.logger.warn(`Product deleted with: ${product.id}`);
                    throw new HttpException(
                        {
                            message: `Produto deletado com o id: ${product.id}`,
                        },
                        404,
                    );
                }

                if (!productExists.isAvailable) {
                    this.logger.warn(
                        `Product not available with: ${product.id}`,
                    );
                    throw new HttpException(
                        {
                            message: `Produto não disponível com o id: ${product.id}`,
                        },
                        404,
                    );
                }

                if (product.amount > productExists.stock) {
                    this.logger.warn(
                        `Product out of stock with: ${product.id}`,
                    );
                    throw new HttpException(
                        {
                            message: `Produto sem estoque: ${productExists.name}`,
                        },
                        400,
                    );
                }

                orderProducts.push(productExists);
            }

            const buyOrder = await this.prisma.buyOrder.create({
                data: {
                    userId: user.id,
                    paymentMethod: "pix",
                    paymentStatus: "pending",
                    BuyOrderProducts: {
                        create: products.products.map((product) => ({
                            productId: product.id,
                        })),
                    },
                },
            });

            await this.eventsService.createPaymentStatus(user.id, buyOrder.id);

            this.logger.debug(`Buy order created with: ${buyOrder.id}`);

            return {
                message: "Ordem de compra criada com sucesso",
                data: {
                    buyOrderId: buyOrder.id,
                    buyOrder: buyOrder,
                    products: orderProducts,
                },
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
}
