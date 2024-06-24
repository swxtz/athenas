import { HttpException, Injectable, Logger } from "@nestjs/common";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { ArgonService } from "src/argon/argon.service";
import { UserEntity } from "./entity/user.entity";
import { JwtService } from "@nestjs/jwt";
//import { ResendService } from "src/resend/resend.service";

export interface CreateUserPromise {
    message: string;
    data: UserEntity;
}

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private argon: ArgonService,
        private jwt: JwtService,
        //private resendService: ResendService,
    ) {}

    private logger = new Logger(UsersService.name);

    async createUser(user: CreateUserDTO): Promise<CreateUserPromise> {
        const { email, name, password } = user;

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

            const payload = {
                id: user.id,
                email: user.email,
            };

            const token = await this.jwt.signAsync(payload, {
                expiresIn: 60 * 10,
            });

            // await this.resendService.sendVerifyEmailToken(
            //     token,
            //     "dev.gustavomendonca@protonmail.com"
            // );
            this.logger.debug(`Confirm email JWT: ${token}`);

            return { message: "Usuario criado com sucesso", data: { ...user } };
        } catch (err) {
            console.log(err);
            throw new HttpException(err, 500);
        }
    }

    async getAllUsers() {
        const users = await this.prisma.user.findMany();

        return { data: { ...users } };
    }
}
