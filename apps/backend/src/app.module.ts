import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { ArgonModule } from "./argon/argon.module";
import { JwtModule } from "./jwt/jwt.module";
import { AuthModule } from "./auth/auth.module";
import { ResendModule } from "./resend/resend.module";
import { UtilsModule } from "./utils/utils.module";
import { ProductsModule } from "./products/products.module";

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
        ResendModule,
        UtilsModule,
        ProductsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
