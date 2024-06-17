import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: {
                expiresIn: "30 days",
            },
        }),
        ConfigModule,
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
