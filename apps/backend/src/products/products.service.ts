import { HttpException, Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { S3Client } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { ConfigService } from "@nestjs/config";
import { DayjsService } from "src/dayjs/dayjs.service";
import { createId as CUID } from "@paralleldrive/cuid2";
import { UtilsService } from "src/utils/utils.service";
import { JwtService } from "@nestjs/jwt";
import { ConvertedImage } from "./interfaces/converted-image.interface";
import { GetBestSellersDTO } from "./dtos/get-bests-sellers.dto";

interface JWTBearerTokenPayload {
    id: string;
    name: string;
    email: string;
    creatredAt: Date;
    updatedAt: Date;
    iat: number;
    exp: number;
}

@Injectable()
export class ProductsService {
    constructor(
        private prisma: PrismaService,
        private readonly configService: ConfigService,
        private dayjsService: DayjsService,
        private utils: UtilsService,
        private jwt: JwtService,
    ) {}

    private readonly s3Client = new S3Client({
        region: this.configService.getOrThrow("AWS_REGION"),
    });

    private logger = new Logger();

    async getAllProducts() {
        return await this.prisma.product.findMany({
            where: { isAvailable: true },
        });
    }

    async createProduct(data: CreateProductDTO, rawToken: string) {
        const token = this.utils.removeBearer(rawToken);

        try {
            const jwtPayload: JWTBearerTokenPayload =
                await this.jwt.verifyAsync(token);

            if (!jwtPayload) {
                throw new HttpException(
                    {
                        message: "Token inválido",
                    },
                    401,
                );
            }

            const user = await this.prisma.user.findFirst({
                where: { id: jwtPayload.id },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    userType: true,
                },
            });

            if (user.userType != "consumer") {
                throw new HttpException(
                    {
                        message: "Usuário não autorizado",
                    },
                    401,
                );
            }

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
            throw new HttpException(err, 404);
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

        const key480 = this.createCoverImageKey(
            product.name,
            file,
            true,
            480,
            480,
        );
        const key720 = this.createCoverImageKey(
            product.name,
            file,
            true,
            720,
            720,
        );

        const image480x480 = await this.convertImageSize(480, 480, file);
        const image720x720 = await this.convertImageSize(720, 720, file);

        const images: ConvertedImage[] = [];

        images.push({
            name: key480,
            buffer: image480x480,
        });

        images.push({
            name: key720,
            buffer: image720x720,
        });

        console.log(images[0].name);
        console.log(images[1].name);
        console.log(images[0].buffer);
        console.log(images[1].buffer);

        // <!-- descomentear na produção -->

        // for (const image of images) {
        //     await this.s3Client.send(
        //         new PutObjectCommand({
        //             Bucket: this.configService.getOrThrow("AWS_BUCKET_NAME"),
        //             Key: image.name,
        //             Body: file.buffer,
        //             ContentType: file.mimetype,
        //         }),
        //     );
        // }

        const coverImageKey = this.createCoverImageKey(
            product.name,
            file,
            false,
        );

        const coverImageUrl = `https://${this.configService.getOrThrow("AWS_BUCKET_NAME")}.s3.${this.configService.getOrThrow("AWS_REGION")}.amazonaws.com/${coverImageKey}`;

        this.logger.log(`Cover image uploaded to ${coverImageUrl}`);

        // const updatedProduct = await this.prisma.product.update({
        //     where: { id },
        //     data: {
        //         coverImage: coverImageUrl,
        //     },
        //     select: {
        //         name: true,
        //         description: true,
        //         price: true,
        //         coverImage: true,
        //         images: true,
        //     },
        // });

        // return updatedProduct;
    }

    private createCoverImageKey(
        productName: string,
        file: Express.Multer.File,
        isResized: boolean,
        width?: number,
        height?: number,
    ) {
        const formatedProductName = productName.replace(/\s/g, "-");
        const formattedDate = this.dayjsService.getFormmatedISODay();

        if (isResized) {
            const coverImageKey = `images/${CUID()}-${formatedProductName}-${formattedDate}-cover-image-${width}x${height}.${file.mimetype.split("/")[1]}`;
            return coverImageKey;
        }

        const coverImageKey = `images/${CUID()}-${formatedProductName}-${formattedDate}-cover-image.${file.mimetype.split("/")[1]}`;

        return coverImageKey;
    }

    private async convertImageSize(
        width: number,
        height: number,
        rawImage: Express.Multer.File,
    ) {
        const image = await sharp(rawImage.buffer)
            .resize(width, height)
            .toBuffer();
        return image;
    }

    async getBestSellersProducts(query: GetBestSellersDTO) {
        const bestSellerProduct = await this.prisma.product.findMany({
            take: query.limit || 10,
            orderBy: {
                numberOfSales: "desc",
            },
        });
        return {
            message: "Produtos retornados com sucesso",
            data: { ...bestSellerProduct },
        };
    }
}
