import { HttpException, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";
import { AddProductInUserShoppingCartDTO } from "./dtos/add-product-in-user-shopping-cart.dto";

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
export class ShoppingCartService {
    constructor(
        private prisma: PrismaService,
        private utils: UtilsService,
        private jwt: JwtService,
    ) {}

    private logger = new Logger();

    async addProductInUserShoppingCart(
        rawtoken: string,
        products: AddProductInUserShoppingCartDTO,
    ) {
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
                    this.logger.warn(`Product not find with: ${product}`);
                    throw new HttpException(
                        {
                            message: `Produto não encontrado com o id: ${product}`,
                        },
                        404,
                    );
                }

                if (productExists.isDeleted) {
                    this.logger.warn(`Product deleted with: ${product}`);
                    throw new HttpException(
                        {
                            message: `Produto deletado com o id: ${product}`,
                        },
                        404,
                    );
                }

                if (!productExists.isAvailable) {
                    this.logger.warn(`Product not available with: ${product}`);
                    throw new HttpException(
                        {
                            message: `Produto não disponível com o id: ${product}`,
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

                return product;
            }
        } catch {}
    }
}
