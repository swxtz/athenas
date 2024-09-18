import { Injectable } from "@nestjs/common";
import { Category } from "./types/category.type";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) {}

    private categories: Category[] = [
        {
            type: "Pães",
        },
        {
            type: "Molhos",
        },
        {
            type: "Hambugueres",
        },
        {
            type: "Queijos",
        },
        {
            type: "Batatas",
        },
    ];

    async getCategories(limit: number) {
        // Quero que ele retorne 5 produtos de cada categoria

        const products = [];

        for (const category of this.categories) {
            const categoryProducts = await this.prisma.category.findMany({
                take: limit || 5,
                where: {
                    type: category.type,
                },
            });

            products.push({ type: category.type, products: categoryProducts });
        }
        return products;
    }
}
