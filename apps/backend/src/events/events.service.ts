import { HttpException, Injectable } from "@nestjs/common";
import { $Enums } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";

export const PaymentStatus = $Enums.PaymentNotificationStatus;
@Injectable()
export class EventsService {
    constructor(
        private utils: UtilsService,
        private prisma: PrismaService,
    ) {}

    async getLastPaymentStatus(rawToken: string) {
        const token = this.utils.removeBearer(rawToken);
        const user = await this.utils.jwtIsValid(token);

        if (!user) {
            throw new HttpException(
                {
                    message: "Usuário não existe, tente relogar na aplicação",
                },
                401,
            );
        }

        const paymentStatus = await this.prisma.paymentNotification.findFirst({
            where: {
                userId: user.id,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        if (!paymentStatus) {
            throw new HttpException(
                {
                    message: "Nenhum pagamento encontrado",
                },
                404,
            );
        }

        return paymentStatus;
    }
    async createPaymentStatus(userId: string, buyOrderId: string) {
        const paymentStatus = await this.prisma.paymentNotification.create({
            data: {
                userId,
                buyOrderId,
                status: PaymentStatus.Pending,
                message:
                    "O Pagamento está pendente. Avisaremos quando for concluído.",
            },
        });

        return paymentStatus;
    }
}
