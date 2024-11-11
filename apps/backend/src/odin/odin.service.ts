import { HttpException, Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { PrismaService } from "src/prisma/prisma.service";
import { RecommendationValuesService } from "src/recommendation-values/recommendation-values.service";
import { GetRecommendedProductsQuery } from "./queries/get-recommended-products.query";

@Injectable()
export class OdinService {
    constructor(private prisma: PrismaService) {}

    private logger = new Logger(OdinService.name);
    private recommedationValues = RecommendationValuesService;

    async getScoreById(productId: string) {
        const product = await this.prisma.recommendation.findUnique({
            where: { productId },
            select: { score: true, likes: true, views: true, sales: true },
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
            data: {
                likes: {
                    increment: this.recommedationValues.likeValue,
                },

                dailyLikes: {
                    increment: this.recommedationValues.likeValue,
                },
            },
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

    async getRecommendedProducts(query: GetRecommendedProductsQuery) {
        const limit = BigInt(query.limit || 30);

        const randomProducts = await this.prisma.$queryRaw`
            SELECT 
            p.id, 
            p.name, 
            p.description,
            p.slug, 
            p.buy_price, 
            p.price, 
            p.stock, 
            p.barcode, 
            p.sku, 
            p.is_available, 
            p.rating, 
            p.is_deleted, 
            p.deleted_at, 
            p.cover_image, 
            p.images, 
            p.product_type, 
            p.state, 
            p.local_pickup, 
            p.number_of_sales, 
            p.number_of_views, 
            p.number_of_views_in_last_week, 
            p.created_at, 
            p.updated_at
            FROM products p
            ORDER BY RANDOM()
            LIMIT ${limit};
            `;

        const formattedProducts = randomProducts.map((product) => ({
            id: product.id,
            name: product.name,
            description: product.description,
            slug: product.slug,
            buyPrice: product.buy_price,
            price: product.price,
            stock: product.stock,
            barcode: product.barcode,
            sku: product.sku,
            isAvailable: product.is_available,
            rating: product.rating,
            isDeleted: product.is_deleted,
            deletedAt: product.deleted_at,
            coverImage: product.cover_image,
            images: product.images || [],
            productType: product.product_type,
            state: product.state,
            localPickup: product.local_pickup,
            numberOfSales: product.number_of_sales,
            numberOfViews: product.number_of_views,
            numberOfViewsInLastWeek: product.number_of_views_in_last_week,
            createdAt: product.created_at,
            updatedAt: product.updated_at,
            recommendationId: product.recommendationId,
        }));

        return formattedProducts;
    }
}
