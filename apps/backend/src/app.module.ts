import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { ArgonModule } from "./argon/argon.module";
import { JwtModule } from "./jwt/jwt.module";
import { AuthModule } from "./auth/auth.module";
import { ResendModule } from "./resend/resend.module";

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
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
