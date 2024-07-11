import { Body, Controller, Get, Post, UsePipes } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ZodValidationPipe } from "nestjs-zod";
import { CreateProductDTO } from "./dtos/create-product.dto";
import { ApiTags } from "@nestjs/swagger";

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
}
