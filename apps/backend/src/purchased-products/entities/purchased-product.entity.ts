export class PurchasedProductEntity {
    id: string;
    productId: string;
    userId: string;
    productSlug: string;
    productValue: string;
    productName: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<PurchasedProductEntity>) {
        Object.assign(this, partial);
    }
}
