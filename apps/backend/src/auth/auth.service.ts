import { HttpException, Injectable } from "@nestjs/common";
import { LoginDTO } from "./dtos/sign-in.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { ArgonService } from "src/argon/argon.service";
import { JwtService } from "@nestjs/jwt";

interface signinReturn {
    data: {
        token: string;
    };
}

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private argon: ArgonService,
        private jwtService: JwtService,
    ) {}
    async signIn(login: LoginDTO): Promise<signinReturn> {
        const user = await this.prisma.user.findFirst({
            where: { email: login.email },
            select: {
                password: true,
            },
        });

        if (!user) {
            throw new HttpException("Email ou senha incorreto", 401);
        }

        const hashIsValid = await this.argon.verify(
            login.password,
            user.password,
        );

        if (!hashIsValid) {
            throw new HttpException("Email ou senha incorreto", 401);
        }

        const dataToPayload = await this.prisma.user.findFirst({
            where: { email: login.email },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        const token = await this.jwtService.signAsync(dataToPayload);

        return { data: { token } };
    }
}
