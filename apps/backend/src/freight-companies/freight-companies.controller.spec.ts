import { Test, TestingModule } from "@nestjs/testing";
import { FreightCompaniesController } from "./freight-companies.controller";
import { FreightCompaniesService } from "./freight-companies.service";

describe("FreightCompaniesController", () => {
    let controller: FreightCompaniesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FreightCompaniesController],
            providers: [FreightCompaniesService],
        }).compile();

        controller = module.get<FreightCompaniesController>(
            FreightCompaniesController,
        );
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
