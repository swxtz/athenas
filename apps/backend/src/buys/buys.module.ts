import { Module } from "@nestjs/common";
import { BuysService } from "./buys.service";
import { BuysController } from "./buys.controller";

@Module({
    controllers: [BuysController],
    providers: [BuysService],
})
export class BuysModule {}
