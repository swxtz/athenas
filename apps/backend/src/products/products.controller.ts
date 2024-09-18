import {
    Body,
    Controller,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    Post,
    Query,
    UploadedFile,
    UseInterceptors,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ZodValidationPipe } from "nestjs-zod";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { ApiTags } from "@nestjs/swagger";
import { UploadCoverImageParams } from "./dtos/upload-cover-image.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { GetBestSellersDTO } from "./dtos/get-bests-sellers.dto";
import { SkipThrottle } from "@nestjs/throttler";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    //@SkipThrottle()
    @Get("get-all")
    async getAllProducts() {
        return this.productsService.getAllProducts();
    }

    @SkipThrottle()
    @Get("get-product-by-id/:id")
    async getProductById(@Param("id") id: string) {
        return this.productsService.getProductById(id);
    }

    @Post("create-product")
    //@UseGuards(AuthGuard)
    @UsePipes(new ZodValidationPipe(CreateProductDTO))
    async createProduct(
        @Body() body: CreateProductDTO,
        //@Headers("authorization") token: string,
    ) {
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

    @Get("get-best-sellers")
    async getBestSellersProducts(
        @Query(new ValidationPipe({ transform: true }))
        query?: GetBestSellersDTO,
    ) {
        return this.productsService.getBestSellersProducts(query);
    }

    @Get("get-product-by-slug/:slug")
    async getProductBySlug(@Param("slug") slug: string) {
        return this.productsService.getProductBySlug(slug);
    }
}
