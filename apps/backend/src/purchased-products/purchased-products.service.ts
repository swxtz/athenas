import { HttpException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { DayjsService } from "src/dayjs/dayjs.service";
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
export class PurchasedProductsService {
    constructor(
        private prisma: PrismaService,
        private utils: UtilsService,
        private jwt: JwtService,
    ) {}

    async getAllPurchasedProducts(rawtoken: string) {
        const token = this.utils.removeBearer(rawtoken);

        try {
            const jwtpayload: JWTBearerTokenPayLoad =
                await this.jwt.verifyAsync(rawtoken);

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
                    name: true,
                    userType: true,
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
        } catch (err) {
            console.log(err);
            throw new HttpException(err, 404);
        }
    }
}
