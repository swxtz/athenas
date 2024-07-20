import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { ConfigService } from "@nestjs/config";
import { DayjsService } from "src/dayjs/dayjs.service";
import { createId as CUID } from "@paralleldrive/cuid2";
@Injectable()
export class ProductsService {
    constructor(
        private prisma: PrismaService,
        private readonly configService: ConfigService,
        private dayjsService: DayjsService,
    ) {}

    private readonly s3Client = new S3Client({
        region: this.configService.getOrThrow("AWS_REGION"),
    });

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

    async uploadCoverImage(id: string, file: Express.Multer.File) {
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

        const product = verifyIfProductExists;

        const coverImageKey = this.createCoverImageKey(product.name, file);

        await this.s3Client.send(
            new PutObjectCommand({
                Bucket: this.configService.getOrThrow("AWS_BUCKET_NAME"),
                Key: coverImageKey,
                Body: file.buffer,
                ContentType: file.mimetype,
            }),
        );

        const coverImageUrl = `https://${this.configService.getOrThrow("AWS_BUCKET_NAME")}.s3.${this.configService.getOrThrow("AWS_REGION")}.amazonaws.com/${coverImageKey}`;

        const updatedProduct = await this.prisma.product.update({
            where: { id },
            data: {
                coverImage: coverImageUrl
            },
            select: {
                name: true,
                description: true,
                price: true,
                coverImage: true,
                images: true,
            }
        });

        return updatedProduct;
    }

    private createCoverImageKey(
        productName: string,
        file: Express.Multer.File,
    ) {
        const formatedProductName = productName.replace(/\s/g, "-");
        const formattedDate = this.dayjsService.getFormmatedISODay();

        const coverImageKey = `${CUID()}-${formatedProductName}-${formattedDate}-cover-image.${file.mimetype.split("/")[1]}`;
        return coverImageKey;
    }
}
