import { Injectable } from "@nestjs/common";
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

    async getLastPaymentStatus() {
        const paymentStatus = await this.prisma.paymentNotification.findFirst({
            orderBy: {
                createdAt: "desc",
            },
        });

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
