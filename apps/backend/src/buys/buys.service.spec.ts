import { Test, TestingModule } from "@nestjs/testing";
import { BuysService } from "./buys.service";

describe("BuysService", () => {
    let service: BuysService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BuysService],
        }).compile();

        service = module.get<BuysService>(BuysService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
