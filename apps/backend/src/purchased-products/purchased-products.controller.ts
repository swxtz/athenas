import { Controller } from "@nestjs/common";
import { PurchasedProductsService } from "./purchased-products.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("purchased-products")
@ApiTags("Purchased products")
export class PurchasedProductsController {
    constructor(
        private readonly purchasedProductsService: PurchasedProductsService,
    ) {}
}
