import { $Enums } from "@prisma/client";
export class ProductEntity {
    id?: string;

    name: string;
    description: string;
    barcode: string;
    images: string[];
    coverImage: string;
    isAvailable: boolean;
    rating: string;
    productType: $Enums.ProductType;
    state: string;
    localPickup: boolean;
    numberOfSales: number;
    numberOfViews: number;
    numberOfViewsInLastWeek: number;
    buyPrice: number;
    price: number;
    stock: number;

    createdAt?: Date;
    updatedAt?: Date;

    constructor(partial: Partial<ProductEntity>) {
        Object.assign(this, partial);
    }
}
