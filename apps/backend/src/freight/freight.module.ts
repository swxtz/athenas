import { Module } from "@nestjs/common";
import { FreightService } from "./freight.service";
import { FreightController } from "./freight.controller";

@Module({
    controllers: [FreightController],
    providers: [FreightService],
})
export class FreightModule {}
