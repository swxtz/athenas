import { Injectable } from "@nestjs/common";
import { CreateFreightCompanyDTO } from "./dtos/create-freight-company.dto";
import { S3Client } from "@aws-sdk/client-s3";
import { ConfigService } from "@nestjs/config";
import sharp from "sharp";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FreightCompaniesService {
    // private readonly s3Client = new S3Client({
    //     region: this.configService.getOrThrow("AWS_S3_REGION"),
    // });

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

    async uploadSharpImage(file: Buffer, fileName: string) {
        const image = await sharp(file).resize().toBuffer();
        return image;
    }
}
