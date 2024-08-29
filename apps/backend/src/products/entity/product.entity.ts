import { $Enums } from "@prisma/client";
export class ProductEntity {
    id?: string;

    name: string;
    description: string;
    slug?: string;
    barcode?: string;
    images?: string[];
    coverImage?: string;
    isAvailable: boolean;
    rating?: string;
    productType: $Enums.ProductType;
    state: $Enums.ProductState;
    localPickup: boolean;
    numberOfSales: number;
    numberOfViews: number;
    numberOfViewsInLastWeek: number;
    buyPrice: number;
    price: number;
    stock: number;
    sku?: string;

    createdAt?: Date;
    updatedAt?: Date;

    constructor(partial: Partial<ProductEntity>) {
        Object.assign(this, partial);
    }
}
