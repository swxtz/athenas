import { Test, TestingModule } from "@nestjs/testing";
import { FreightCompaniesService } from "./freight-companies.service";

describe("FreightCompaniesService", () => {
    let service: FreightCompaniesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FreightCompaniesService],
        }).compile();

        service = module.get<FreightCompaniesService>(FreightCompaniesService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
