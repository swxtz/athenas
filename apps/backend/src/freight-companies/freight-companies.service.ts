import { Injectable } from "@nestjs/common";
import { CreateFreightCompanyDTO } from "./dtos/create-freight-company.dto";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { ConfigService } from "@nestjs/config";
import sharp from "sharp";
import { PrismaService } from "src/prisma/prisma.service";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

@Injectable()
export class FreightCompaniesService {
    private readonly s3Client = new S3Client({
        region: this.configService.getOrThrow("AWS_REGION"),
    });

    constructor(
        private readonly configService: ConfigService,
        private prisma: PrismaService,
    ) {}

    async createFreightCompany(body: CreateFreightCompanyDTO) {
        const freightcompany = await this.prisma.freightCompanies.create({
            data: {
                name: body.name,
                kmPrice: body.kmprice,
                companyPictureUrl: null,
            },
        });

        return {
            message: "Empresa criada com sucesso",
            freightcompany,
        };
    }

    async uploadSharpImage(file: Buffer, fileName: string, mimetype: string) {
        const image = await sharp(file).resize(720, 720).toBuffer();
        const S3 = new S3Client({
            endpoint:
                "https://44d47e816465b84f10c7cd07b3059fc8.r2.cloudflarestorage.com/athenas-dev",
            credentials: {
                accessKeyId: "6408a65431828f3a514f8fa95f032f2e",
                secretAccessKey:
                    "de5a3c659ec93b382a431394d3be30f761f31d0d1a999c83df48a3e44112efb9",
            },
            region: "us-east-1",
        });
        const url = await getSignedUrl(
            S3,
            new PutObjectCommand({
                Bucket: "athenas-dev",
                Key: "teste",
                ContentType: mimetype,
                Body: file,
            }),
            {
                expiresIn: 60 * 60 * 24 * 7, // 7d
            },
        );
        console.log(url);
    }
}
