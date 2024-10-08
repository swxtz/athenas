import { HttpException, Injectable, Logger } from "@nestjs/common";
import { GetSearchQuery } from "./querys/get-search-params";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class SearchService {
    constructor(private prisma: PrismaService) {}
    private logger = new Logger();
    async getSearch(query: GetSearchQuery) {
        try {
            const searchResult = await this.prisma.product.findMany({
                where: {
                    isDeleted: false,
                    name: {
                        contains: query.search,
                        mode: "insensitive",
                    },
                },
                take: 10,
                orderBy: {
                    numberOfSales: "desc",
                },
            });
            if (searchResult.length <= 0) {
                return {
                    message: `Produto não encontrado com o nome: ${query.search}`,
                };
            }

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
