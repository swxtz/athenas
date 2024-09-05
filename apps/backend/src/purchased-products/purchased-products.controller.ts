import { Controller, Get, Headers, UseGuards } from "@nestjs/common";
import { PurchasedProductsService } from "./purchased-products.service";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("purchased-products")
@ApiTags("Purchased products")
export class PurchasedProductsController {
    constructor(
        private readonly purchasedProductsService: PurchasedProductsService,
    ) {}

    @Get("get-all")
    @UseGuards(AuthGuard)
    async getAllPurchasedProducts(@Headers("authorization") token: string) {
        return await this.purchasedProductsService.getAllPurchasedProducts(
            token,
        );
    }
}
