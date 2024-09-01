import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { DayjsService } from "src/dayjs/dayjs.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";

@Injectable()
export class PurchasedProductsService {
    constructor(
        private prisma: PrismaService,
        private readonly configService: ConfigService,
        private dayjsService: DayjsService,
        private utils: UtilsService,
        private jwt: JwtService,
    ) {}

    async getAllPurchasedProducts() {
        return await this.prisma.userPurchases.findMany({
            where: {  }
        })
    } 
}
