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
export class BuysService {
    constructor(
        private prisma: PrismaService,
        private utils: UtilsService,
        private jwt: JwtService,
    ) {}

    private logger = new Logger();

    async createBuyOrder(rawtoken: string, productId) {
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
        } catch {}
    }
}
