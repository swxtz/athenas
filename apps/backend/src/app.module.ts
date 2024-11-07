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
import { MailerModule } from "@nestjs-modules/mailer";
import { ReactAdapter } from "@webtre/nestjs-mailer-react-adapter";
import { PaymentsModule } from "./payments/payments.module";
import { FreightCompaniesModule } from "./freight-companies/freight-companies.module";

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
        EventsModule,
        SearchModule,
        EmailsModule,
        MailerModule.forRoot({
            transport: {
                host: "smtp.resend.com",
                port: 465,
                secure: true,
                auth: {
                    user: "resend",
                    pass: "re_HTZaFmzr_L1NRF9hQd8xYQyRmV3GURYFA",
                },
            },
            template: {
                dir: __dirname + "/templates",
                adapter: new ReactAdapter(),
            },
        }),
        PaymentsModule,
        FreightCompaniesModule,
    ],
    controllers: [],
})
export class AppModule {}
