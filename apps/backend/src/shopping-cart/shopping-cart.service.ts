import { HttpException, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
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
export class ShoppingCartService {
    constructor(
        private prisma: PrismaService,
        private utils: UtilsService,
        private jwt: JwtService,
    ) {}

    private logger = new Logger();

    async addProductInUserShoppingCart(rawtoken: string, productsId: any) {
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

            const user = await this.prisma.user.findFirstOrThrow({
                where: { id: jwtpayload.id },
                select: {
                    id: true,
                    email: true,
                },
            });

            const products = [];

            for (const product of productId.products) {
                const productExists = await this.prisma.product.findFirst({
                    where: { id: product },
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        isAvailable: true,
                        isDeleted: true,
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

                products.push(productExists);
            }
        } catch {}
    }
}
