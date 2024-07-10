import { Controller, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get("get-all")
    async getAllProducts() {
        return this.productsService.getAllProducts();
    }
}
