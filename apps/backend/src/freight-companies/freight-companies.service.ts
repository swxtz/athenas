import { Injectable } from "@nestjs/common";
import { CreateFreightCompanyDTO } from "./dtos/create-freight-company.dto";
import {
    GetObjectCommand,
    PutObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";
import { ConfigService } from "@nestjs/config";
import sharp from "sharp";
import { PrismaService } from "src/prisma/prisma.service";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

@Injectable()
export class FreightCompaniesService {
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
        const image = await sharp(file).webp().resize(640, 360).toBuffer();
        const S3 = new S3Client({
            endpoint:
                "https://44d47e816465b84f10c7cd07b3059fc8.r2.cloudflarestorage.com/freight-companies",
            credentials: {
                accessKeyId: this.configService.getOrThrow("R2_ACCESS_KEY_ID"),
                secretAccessKey: this.configService.getOrThrow(
                    "R2_SECRET_ACCESS_KEY",
                ),
            },
            region: "auto",
        });
        const putobjectcommand = new PutObjectCommand({
            Bucket: "athenas-dev",
            Key: fileName,
            ContentType: "image/webp",
            Body: image,
        });
        const res = await S3.send(putobjectcommand);

        const url = `https://pub-f16310d577f84110a51cd066a6670be5.r2.dev/freight-companies/${fileName}`;
        console.log(url);

        const command = new GetObjectCommand({
            Bucket: "athenas-dev",
            Key: fileName,
        });
        const urlsigned = await getSignedUrl(S3, command, {
            expiresIn: 604800,
        });
        console.log(urlsigned);
        const getobjectcommand = new GetObjectCommand({
            Bucket: "athenas-dev",
            Key: "teste",
        });
    }
}
