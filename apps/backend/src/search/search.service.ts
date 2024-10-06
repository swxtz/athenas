import { HttpException, Injectable, Logger } from "@nestjs/common";
import { GetSearchParams } from "./params/get-search-params";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class SearchService {
    constructor(private prisma: PrismaService) {}
    private logger = new Logger();
    async getSearch(params: GetSearchParams) {
        try {
            const productExists = await this.prisma.product.findFirst({
                where: { name: params.search },
                select: {
                    id: true,
                    name: true,
                    price: true,
                    isAvailable: true,
                    isDeleted: true,
                    stock: true,
                },
            });

            console.log(productExists);
            if (!productExists) {
                this.logger.warn(`Product not find with: ${params.search}`);
                throw new HttpException(
                    {
                        message: `Produto não encontrado com o nome: ${params.search}`,
                    },
                    404,
                );
            }

            if (productExists.isDeleted) {
                this.logger.warn(`Product deleted with: ${params.search}`);
                throw new HttpException(
                    {
                        message: `Produto deletado com o nome: ${params.search}`,
                    },
                    404,
                );
            }

            if (!productExists.isAvailable) {
                this.logger.warn(
                    `Product not available with: ${params.search}`,
                );
                throw new HttpException(
                    {
                        message: `Produto não disponível com o nome: ${params.search}`,
                    },
                    404,
                );
            }

            const searchResult = await this.prisma.product.findMany({
                orderBy: {
                    _relevance: {
                        fields: ["name"],
                        search: params.search,
                        sort: "asc",
                    },
                },
            });

            return searchResult;
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
