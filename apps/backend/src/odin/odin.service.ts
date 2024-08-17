import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { RecommendationValuesService } from "src/recommendation-values/recommendation-values.service";

@Injectable()
export class OdinService {
    constructor(private prisma: PrismaService) {}

    private logger = new Logger(OdinService.name);
    private recommedationValues = RecommendationValuesService;

    async getScoreById(productId: string) {
        const product = await this.prisma.recommendation.findUnique({
            where: { productId },
            select: { score: true },
        });

        if (!product) {
            this.logger.error(`Product with id ${productId} not found`);
        }

        return product;
    }

    async incrementLikeValue(productId: string) {
        const product = await this.prisma.recommendation.findUnique({
            where: { productId },
        });

        if (!product) {
            this.logger.error(`Product with id ${productId} not found`);
        }

        await this.prisma.recommendation.update({
            where: { productId },
            data: { likes: product.likes + this.recommedationValues.likeValue },
        });
    }

    async decreaseLikeValue(productId: string) {
        const product = await this.prisma.recommendation.findUnique({
            where: { productId },
        });

        if (!product) {
            this.logger.error(`Product with id ${productId} not found`);
        }

        await this.prisma.recommendation.update({
            where: { productId },
            data: { likes: product.likes - this.recommedationValues.likeValue },
        });
    }

    async incrementViewValue(productId: string) {
        const product = await this.prisma.recommendation.findUnique({
            where: { productId },
        });

        if (!product) {
            this.logger.error(`Product with id ${productId} not found`);
        }

        await this.prisma.recommendation.update({
            where: { productId },
            data: { views: product.views + this.recommedationValues.view },
        });
    }

    async decreaseViewValue(productId: string) {
        const product = await this.prisma.recommendation.findUnique({
            where: { productId },
        });

        if (!product) {
            this.logger.error(`Product with id ${productId} not found`);
        }

        await this.prisma.recommendation.update({
            where: { productId },
            data: { views: product.views - this.recommedationValues.view },
        });
    }

    async incrementSaleValue(productId: string) {
        const product = await this.prisma.recommendation.findUnique({
            where: { productId },
        });

        if (!product) {
            this.logger.error(`Product with id ${productId} not found`);
        }

        await this.prisma.recommendation.update({
            where: { productId },
            data: { sales: product.sales + this.recommedationValues.sale },
        });
    }

    async decreaseSaleValue(productId: string) {
        const product = await this.prisma.recommendation.findUnique({
            where: { productId },
        });

        if (!product) {
            this.logger.error(`Product with id ${productId} not found`);
        }

        await this.prisma.recommendation.update({
            where: { productId },
            data: { sales: product.sales - this.recommedationValues.sale },
        });
    }
}
