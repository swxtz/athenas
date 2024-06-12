import { HttpException, Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { ArgonService } from "src/argon/argon.service";

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private argon: ArgonService,
    ) {}

    async createUser(user: CreateUserDTO) {
        const { email, name, password } = user;

        const verifyUser = await this.prisma.user.findFirst({
            where: { email },
        });

        if (verifyUser) {
            throw new HttpException("Esse email ja esta cadastrado.", 400);
        }

        try {
            const user = await this.prisma.user.create({
                data: {
                    email,
                    name,
                    password: await this.argon.hash(password),
                },
            });

            return { message: "usuario criado com sucesso", data: { ...user } };
        } catch (err) {
            console.log(err);
            throw new HttpException(err, 500);
        }
    }
}
