import { Injectable } from "@nestjs/common";
import { CreateFreightCompanyDTO } from "./dtos/create-freight-company.dto";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class FreightCompaniesService {
    private readonly s3Client = new S3Client({
        region: this.configService.getOrThrow("AWS_S3_REGION"),
    });

    constructor(private readonly configService: ConfigService) {}

    async createFreightCompany(
        body: CreateFreightCompanyDTO,
        file: Buffer,
        fileName: string,
    ) {
        await this.s3Client.send(
            new PutObjectCommand({
                Bucket: "athenas-dev",
                Key: fileName,
                Body: file,
            }),
        );
    }
}
