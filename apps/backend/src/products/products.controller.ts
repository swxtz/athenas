import { Body, Controller, Get, HttpCode, Param, Post, UsePipes } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { UseZodGuard, ZodValidationPipe } from "nestjs-zod";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { ApiTags } from "@nestjs/swagger";
import { UploadCoverImageParams } from "./dtos/upload-cover-image.dto";

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
    async uploadCoverImage(@Param() param: UploadCoverImageParams) {
        return this.productsService.uploadCoverImage(param.id);
    }
}
