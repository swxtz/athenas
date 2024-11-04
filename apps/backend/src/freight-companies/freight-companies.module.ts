import { Module } from "@nestjs/common";
import { FreightCompaniesService } from "./freight-companies.service";
import { FreightCompaniesController } from "./freight-companies.controller";

@Module({
    controllers: [FreightCompaniesController],
    providers: [FreightCompaniesService],
})
export class FreightCompaniesModule {}
