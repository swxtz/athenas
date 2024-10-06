import { HttpException, Injectable, Logger } from "@nestjs/common";
import { GetSearchParams } from "./params/get-search-params";
import { GetSearchDTO } from "./dtos/get-search.dto";
import { UtilsService } from "src/utils/utils.service";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SearchService {
    constructor(
        private prisma: PrismaService,
        private utils: UtilsService,
    ) {}
    private logger = new Logger();
    async getSearch(params: GetSearchParams, product: GetSearchDTO) {
        const productExists = await this.prisma.product.findFirst({
            where: { id: product.id },
            select: {
                id: true,
                name: true,
                price: true,
                isAvailable: true,
                isDeleted: true,
                stock: true,
            },
        });

        if (!productExists) {
            this.logger.warn(`Product not find with: ${product.id}`);
            throw new HttpException(
                {
                    message: `Produto não encontrado com o id: ${product.id}`,
                },
                404,
            );
        }

        if (productExists.isDeleted) {
            this.logger.warn(`Product deleted with: ${product.id}`);
            throw new HttpException(
                {
                    message: `Produto deletado com o id: ${product.id}`,
                },
                404,
            );
        }

        if (!productExists.isAvailable) {
            this.logger.warn(`Product not available with: ${product.id}`);
            throw new HttpException(
                {
                    message: `Produto não disponível com o id: ${product.id}`,
                },
                404,
            );
        }
    }
}
