import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import dayjs from "dayjs";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class HealthcheckService {
    constructor(private prisma: PrismaService) {}

    private readonly logger = new Logger(HealthcheckService.name);
    @Cron("0 */1 * * * *")
    async healthCheckDB() {
        const date = new Date();

        const formattedDate = dayjs(date).format("DD-MM-YYYY HH:mm:ss");

        const message = `Database last checked at: ${formattedDate}`;
        const randomProducts = await this.prisma.$queryRaw`
            SELECT 
            p.id,
            p.name 
            FROM products p
            ORDER BY RANDOM()
            LIMIT 1;
            `;

        this.logger.log(message);
    }
}
