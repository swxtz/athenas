import { Controller } from "@nestjs/common";
import { PurchasedProductsService } from "./purchased-products.service";

@Controller("purchased-products")
export class PurchasedProductsController {
    constructor(
        private readonly purchasedProductsService: PurchasedProductsService,
    ) {}
}
