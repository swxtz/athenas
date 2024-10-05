import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";

export enum PaymentStatus {
    Done = "Done",
    Failed = "Failed",
    Pending = "Pending",
    Refunded = "Refunded",
    Processing = "Processing",
}
@Injectable()
export class EventsService {
    constructor(
        private utils: UtilsService,
        private prisma: PrismaService,
    ) {}

    async getLastPaymentStatus() {}
    async createPaymentStatus(userId: string) {
        const paymentStatus = await this.prisma.paymentNotification.create({
            data: {
                userId,
                status: PaymentStatus.Pending,
                message:
                    "O Pagamento está pendente. Avisaremos quando for concluído.",
            },
        });

        return paymentStatus;
    }
}
