import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDTO } from "./dtos/create-product.dto";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    async getAllProducts() {
        return await this.prisma.product.findMany({
            where: { isAvailable: true },
        });
    }

    async createProduct(data: CreateProductDTO) {
        try {
            const verifyIfProductExists = await this.prisma.product.findFirst({
                where: { name: data.name },
                select: {
                    id: true,
                    name: true,
                    description: true,
                    price: true,
                },
            });

            if (verifyIfProductExists) {
                throw new HttpException(
                    {
                        message: "Produto já cadrastrado",
                        data: verifyIfProductExists,
                    },
                    400,
                );
            }

            const product = await this.prisma.product.create({
                data: {
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    buyPrice: data.buyPrice,
                    stock: data.stockQuantity,
                    barcode: data.barcode,
                    isAvailable: false,
                    productType: data.productType,
                },
            });

            return product;
        } catch (err) {
            console.log(err);
            throw new HttpException(err, 500);
        }
    }

    async uploadCoverImage(id: string) {
        const verifyIfProductExists = await this.prisma.product.findFirst({
            where: { id },
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
            },
        });

        if (!verifyIfProductExists) {
            throw new HttpException(
                {
                    message: "Produto não encontrado",
                },
                404,
            );
        }

        return verifyIfProductExists;
    }
}
