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
import { EventsModule } from "./events/events.module";
import { SearchModule } from "./search/search.module";
import { EmailsModule } from "./emails/emails.module";
import { PaymentsModule } from "./payments/payments.module";
import { FreightCompaniesModule } from "./freight-companies/freight-companies.module";
import { FreightModule } from "./freight/freight.module";
import { EnvService } from "./env/env.service";
import { EnvModule } from "./env/env.module";
import { envSchema } from "./env/env";
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
    imports: [
        PrismaModule,
        ConfigModule.forRoot({
            validate: (env) => envSchema.parse(env),
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
        EventsModule,
        SearchModule,
        EmailsModule,
        PaymentsModule,
        FreightCompaniesModule,
        FreightModule,
        EnvModule,
        HealthcheckModule,
    ],
    controllers: [],
    providers: [EnvService],
})
export class AppModule {}
