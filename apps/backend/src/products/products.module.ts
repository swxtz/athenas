import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";

@Module({
    imports: [
        ThrottlerModule.forRoot([
            {
                limit: 3,
                ttl: 60,
            },
        ]),
    ],
    controllers: [ProductsController],
    providers: [
        ProductsService,
        { provide: APP_GUARD, useClass: ThrottlerGuard },
    ],
})
export class ProductsModule {}
