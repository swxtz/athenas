export class ShoppingCartEntity {
    id: string;
    productId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<ShoppingCartEntity>) {
        Object.assign(this, partial);
    }
}
