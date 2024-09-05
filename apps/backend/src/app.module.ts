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
import { CartsModule } from "./carts/carts.module";

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
        CartsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
