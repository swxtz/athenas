import { HttpException, Injectable, Logger } from "@nestjs/common";
import { Category } from "./types/category.type";
import { PrismaService } from "src/prisma/prisma.service";
import { GetProductsByCategoriesQuery } from "./querys/get-products-by-categorie.query";
import { Prisma } from "@prisma/client";

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) {}

    private logger = new Logger();

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

    async getProductsByCategory(query: GetProductsByCategoriesQuery) {
        try {
            const searchResult = await this.prisma.product.findMany({
                where: {
                    isDeleted: false,
                    Category: {
                        some: {
                            type: {
                                contains: query.category,
                            },
                        },
                    },
                },
                orderBy: {
                    numberOfSales: "desc",
                },
            });
            if (searchResult.length <= 0) {
                return {
                    message: `Produto não encontrado com a categoria: ${query.category}`,
                };
            }

            return {
                message: "Produtos encontrados com essa categoria::",
                data: searchResult,
            };
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                console.log(err.name);
                if (
                    err.name === "NotFoundError" &&
                    err.message === "No product find"
                ) {
                    this.logger.warn(`Product not find`);
                    throw new HttpException(
                        {
                            message: "Produto procurado não existe",
                        },
                        401,
                    );
                }
            }

            if (err instanceof HttpException) {
                throw err;
            }

            this.logger.error(err);
            console.error(err);
            throw new HttpException(
                {
                    message: "Ocorreu um erro interno",
                },
                500,
            );
        }
    }
}
