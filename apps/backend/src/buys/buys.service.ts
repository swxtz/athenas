import { HttpException, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";
import { CreateBuyOrderDTO } from "./dtos/create-buy-order.dto";

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
export class BuysService {
    constructor(
        private prisma: PrismaService,
        private utils: UtilsService,
        private jwt: JwtService,
    ) {}

    private logger = new Logger();

    async createBuyOrder(rawtoken: string, productId: CreateBuyOrderDTO) {
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
                },
            });

            if (!user) {
                this.logger.warn(`User not find with: ${user.id}`);
                throw new HttpException(
                    {
                        message: "Usuário não existe",
                    },
                    401,
                );
            }

            const products = await this.prisma.product.findMany({
                where: { id: { in: productId.products } },
            });

            if (products.length !== productId.products.length) {
                this.logger.warn(
                    `product not found with: ${productId.products}`,
                );

                throw new HttpException(
                    {
                        message: "Produto não encontrado",
                    },
                    404,
                );
            }
        } catch (err) {
            if (err instanceof HttpException) {
                throw err;
            } else {
                this.logger.error(err);
                throw new HttpException(
                    {
                        message: "Erro ao criar produto",
                        error: err,
                    },
                    500,
                );
            }
        }
    }
}
