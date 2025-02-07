import {
    Body,
    Controller,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseInterceptors,
} from "@nestjs/common";
import { FreightCompaniesService } from "./freight-companies.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateFreightCompanyDTO } from "./dtos/create-freight-company.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("freight-companies")
@Controller("freight-companies")
export class FreightCompaniesController {
    constructor(
        private readonly freightCompaniesService: FreightCompaniesService,
    ) {}

    @Post("create-freight-company")
    @UseInterceptors(FileInterceptor("file"))
    async createFreightCompany(@Body() body: CreateFreightCompanyDTO) {
        return this.freightCompaniesService.createFreightCompany(body);
    }

    @Post("create-freight-company/upload-sharp-image")
    @UseInterceptors(FileInterceptor("file"))
    async uploadSharpImage(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    // new MaxFileSizeValidator({ maxSize: 1000 }),
                    // new FileTypeValidator({ fileType: "image/jpeg" }),
                ],
            }),
        )
        file: Express.Multer.File,
    ) {
        return this.freightCompaniesService.uploadSharpImage(
            file.buffer,
            file.originalname,
        );
    }
}
