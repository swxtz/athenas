export class ProductEntity {
    id?: string;

    name: string;
    description: string;
    barcode: string;
    image: string;

    buyPrice: number;
    price: number;

    stock: number;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(partial: Partial<ProductEntity>) {
        Object.assign(this, partial);
    }
}
