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
import { RecommentationValuesModule } from "./recommentation-values/recommentation-values.module";

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
        RecommentationValuesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
