import {
    Body,
    Controller,
    FileTypeValidator,
    Get,
    HttpCode,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    Post,
    UploadedFile,
    UploadedFiles,
    UseInterceptors,
    UsePipes,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { UseZodGuard, ZodValidationPipe } from "nestjs-zod";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { ApiTags } from "@nestjs/swagger";
import { UploadCoverImageParams } from "./dtos/upload-cover-image.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get("get-all")
    async getAllProducts() {
        return this.productsService.getAllProducts();
    }

    @Post("create-product")
    @UsePipes(new ZodValidationPipe(CreateProductDTO))
    async createProduct(@Body() body: CreateProductDTO) {
        return this.productsService.createProduct(body);
    }

    @Post("upload-cover-image/:id")
    @UseInterceptors(FileInterceptor("coverImage"))
    async uploadCoverImage(
        @Param() param: UploadCoverImageParams,
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({
                        maxSize: 2 * 1024 * 1024,
                        message: "O arquivo pode ser no maximo 2MB",
                    }),
                    new FileTypeValidator({ fileType: ".(png|jpeg|jpg|webm)" }),
                ],
            }),
        )
        file: Express.Multer.File,
    ) {
        return this.productsService.uploadCoverImage(param.id, file);
    }
}
