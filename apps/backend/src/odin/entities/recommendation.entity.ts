import { ProductEntity } from "src/products/entity/product.entity";

export class RecommendationEntity {
    id: string;
    productId: string;
    product: ProductEntity;
    score: number;

    weeklyRecommendation: number;
    dailyRecommendation: number;

    views: number;
    dailyViews: number;
    weeklyViews: number;

    sales: number;
    dailySales: number;
    weeklySales: number;

    likes: number;
    dailyLikes: number;
    weeklyLikes: number;

    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<RecommendationEntity>) {
        Object.assign(this, partial);
    }
}
