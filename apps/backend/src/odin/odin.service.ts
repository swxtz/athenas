import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class OdinService {
    constructor(private prisma: PrismaService) {}

    async incrementLikeValue(productId: string) {}
}
