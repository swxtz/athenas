import { Test, TestingModule } from "@nestjs/testing";
import { BuysController } from "./buys.controller";
import { BuysService } from "./buys.service";

describe("BuysController", () => {
    let controller: BuysController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BuysController],
            providers: [BuysService],
        }).compile();

        controller = module.get<BuysController>(BuysController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
