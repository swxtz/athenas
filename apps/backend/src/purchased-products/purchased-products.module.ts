import { Module } from "@nestjs/common";
import { PurchasedProductsService } from "./purchased-products.service";
import { PurchasedProductsController } from "./purchased-products.controller";

@Module({
    controllers: [PurchasedProductsController],
    providers: [PurchasedProductsService],
})
export class PurchasedProductsModule {}
