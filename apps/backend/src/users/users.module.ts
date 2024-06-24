import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { ResendService } from "src/resend/resend.service";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
