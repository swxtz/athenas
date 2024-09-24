import { HttpException, Injectable, Logger } from "@nestjs/common";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { ArgonService } from "src/argon/argon.service";
import { UserEntity } from "./entity/user.entity";
import { JwtService } from "@nestjs/jwt";
import { UtilsService } from "src/utils/utils.service";
import { ConfigService } from "@nestjs/config";

//import { ResendService } from "src/resend/resend.service";

export interface CreateUserPromise {
    message: string;
    data: UserEntity;
}

interface JWTBearerTokenPayload {
    id: string;
    name: string;
    email: string;
    creatredAt: Date;
    updatedAt: Date;
    iat: number;
    exp: number;
}

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private argon: ArgonService,
        private jwt: JwtService,
        //private resendService: ResendService,
        private utils: UtilsService,
        private readonly configService: ConfigService,
    ) {}

    private logger = new Logger(UsersService.name);

    async createUser(user: CreateUserDTO, isDevEnv?: boolean) {
        const { email, name, password } = user;
        const webUrl = this.configService.getOrThrow("WEB_URL");

        const verifyUser = await this.prisma.user.findFirst({
            where: { email },
        });

        if (verifyUser) {
            throw new HttpException("Esse email já está cadastrado.", 400);
        }

        try {
            const user = await this.prisma.user.create({
                data: {
                    email,
                    name,
                    password: await this.argon.hash(password),
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    emailVerified: true,
                    emailVerificatedAt: true,
                    createdAt: true,
                    updatedAt: true,
                    userType: true,
                },
            });

            await this.prisma.shoppingCart.create({
                data: {
                    userId: user.id,
                },
            });

            const payload = {
                id: user.id,
                email: user.email,
            };

            const token = await this.jwt.signAsync(payload, {
                expiresIn: 60 * 10,
            });

            const url = `${webUrl}/auth/verificar-email?token=${token}`;

            // await this.resendService.sendVerifyEmailToken(
            //     token,
            //     "dev.gustavomendonca@protonmail.com"
            // );
            this.logger.debug(`Confirm email JWT: ${url}`);

            if (isDevEnv) {
                return {
                    message: "Usuario criado com sucesso",
                    data: { ...user },
                    token,
                };
            }
            return {
                message: "Usuario criado com sucesso",
                data: { ...user },
            };
        } catch (err) {
            console.log(err);
            throw new HttpException(err, 500);
        }
    }

    async getAllUsers() {
        const users = await this.prisma.user.findMany();

        return { data: { ...users } };
    }

    async getPersonalInfo(rawToken: string) {
        const token = this.utils.removeBearer(rawToken);

        try {
            const payload: JWTBearerTokenPayload =
                await this.jwt.verifyAsync(token);

            const user = await this.prisma.user.findFirst({
                where: { id: payload.id },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    emailVerified: true,
                    emailVerificatedAt: true,
                    createdAt: true,
                    updatedAt: true,
                    userType: true,
                },
            });

            return { data: { ...user } };
        } catch (err) {
            if (err.message === "invalid signature") {
                throw new HttpException("Token expirado", 401);
            }

            this.logger.error(err.message);
        }

        return { message: "Em desenvolvimento", token };
    }
}
