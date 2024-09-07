import { HttpException, Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
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
            throw new HttpException(
                {
                    message: "Produto não encontrado",
                },
                404,
            );
        }

        return product;
    }

    async getScoreBySlug(productSlug: string) {
        try {
            const product = await this.prisma.product.findUniqueOrThrow({
                where: { slug: productSlug },
                select: { id: true },
            });

            const score = await this.prisma.recommendation.findUniqueOrThrow({
                where: { productId: product.id },
                select: { score: true },
            });

            if (!score) {
                this.logger.error(`Product with slug ${productSlug} not found`);
                throw new HttpException(
                    {
                        message: "Produto não encontrado",
                    },
                    404,
                );
            }

            return score;
        } catch (err) {
            this.logger.error(err);
            
            throw new HttpException(
                {
                    message: "Produto não encontrado",
                },
                404,
            );
        }
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

    @Cron("0 0 0 * * *")
    async ResetDailyValues() {
        this.logger.log("Resetting daily values");

        await this.prisma.recommendation.updateMany({
            data: {
                dailyLikes: 0,
                dailySales: 0,
                dailyViews: 0,
                dailyRecomendation: 500,
            },
        });
    }

    @Cron("0 0 0 * * 1")
    async ResetWeeklyValues() {
        this.logger.log("Resetting weekly values");

        await this.prisma.recommendation.updateMany({
            data: {
                weeklyLikes: 0,
                weeklySales: 0,
                weeklyViews: 0,
                weeklyRecomendation: 500,
            },
        });
    }
}
