import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { ArgonModule } from "./argon/argon.module";
import { JwtModule } from "./jwt/jwt.module";
import { AuthModule } from "./auth/auth.module";

import { UtilsModule } from "./utils/utils.module";
import { ProductsModule } from "./products/products.module";
import { DayjsModule } from "./dayjs/dayjs.module";
import { OdinModule } from "./odin/odin.module";
import { RecommendationValuesModule } from "./recommendation-values/recommendation-values.module";
import { CepModule } from "./cep/cep.module";
import { PurchasedProductsModule } from "./purchased-products/purchased-products.module";
import { ShoppingCartModule } from "./shopping-cart/shopping-cart.module";
import { ScheduleModule } from "@nestjs/schedule";
import { CategoriesModule } from "./categories/categories.module";
import { BuysModule } from "./buys/buys.module";
import { BuysNotificationsModule } from "./buys-notifications/buys-notifications.module";

@Module({
    imports: [
        PrismaModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        UsersModule,
        ArgonModule,
        JwtModule,
        AuthModule,
        UtilsModule,
        ProductsModule,
        DayjsModule,
        OdinModule,
        RecommendationValuesModule,
        CepModule,
        PurchasedProductsModule,
        ShoppingCartModule,
        ScheduleModule.forRoot(),
        CategoriesModule,
        BuysModule,
        BuysNotificationsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
