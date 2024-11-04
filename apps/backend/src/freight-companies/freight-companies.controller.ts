import { Controller } from "@nestjs/common";
import { FreightCompaniesService } from "./freight-companies.service";

@Controller("freight-companies")
export class FreightCompaniesController {
    constructor(
        private readonly freightCompaniesService: FreightCompaniesService,
    ) {}
}
