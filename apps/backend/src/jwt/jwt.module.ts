import { Module } from "@nestjs/common";
import { JwtService } from "./jwt.service";

@Module({
    providers: [JwtService],
})
export class JwtModule {}
