import { Injectable } from "@nestjs/common";
import { CreateFreightCompanyDTO } from "./dtos/create-freight-company.dto";
import { S3Client } from "@aws-sdk/client-s3";
import { ConfigService } from "@nestjs/config";
import sharp from "sharp";

@Injectable()
export class FreightCompaniesService {
    // private readonly s3Client = new S3Client({
    //     region: this.configService.getOrThrow("AWS_S3_REGION"),
    // });

    constructor(private readonly configService: ConfigService) {}

    async createFreightCompany(body: CreateFreightCompanyDTO) {}

    async uploadSharpImage(file: Buffer, fileName: string) {
        const image = await sharp(file).resize().toBuffer();
        return image;
    }
}
