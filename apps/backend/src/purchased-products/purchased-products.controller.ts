import { Controller, Get, Headers } from "@nestjs/common";
import { PurchasedProductsService } from "./purchased-products.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("purchased-products")
@ApiTags("Purchased products")
export class PurchasedProductsController {
    constructor(
        private readonly purchasedProductsService: PurchasedProductsService,
    ) {}

    @Get("get-all")
    async getAllPurchasedProducts(@Headers("authorization") token: string) {
        return await this.purchasedProductsService.getAllPurchasedProducts(
            token,
        );
    }
}
