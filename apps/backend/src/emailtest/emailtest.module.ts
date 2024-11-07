import { Module } from "@nestjs/common";
import { EmailTestService } from "./emailtest.service";
import { EmailTestController } from "./emailtest.controller";

@Module({
    controllers: [EmailTestController],
    providers: [EmailTestService],
})
export class EmailtestModule {}
