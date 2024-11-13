import { Test, TestingModule } from "@nestjs/testing";
import { FreightService } from "./freight.service";

describe("FreightService", () => {
    let service: FreightService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FreightService],
        }).compile();

        service = module.get<FreightService>(FreightService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
