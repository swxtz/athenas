import { ProductEntity } from "src/products/entity/product.entity";

export class RecommendationEntity {
    id: string;
    productId: string;
    product: ProductEntity;
    score: number;
    weekRecommendation: number;
    views: number;
    weekViews: number;
    sales: number;
    weekSales: number;

    constructor(partial: Partial<RecommendationEntity>) {
        Object.assign(this, partial);
    }
}
