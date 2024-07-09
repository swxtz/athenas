import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    async getAllProducts() {
        return await this.prisma.product.findMany();
    }
}
