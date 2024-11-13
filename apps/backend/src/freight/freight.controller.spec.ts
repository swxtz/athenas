import { Test, TestingModule } from "@nestjs/testing";
import { FreightController } from "./freight.controller";
import { FreightService } from "./freight.service";

describe("FreightController", () => {
    let controller: FreightController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FreightController],
            providers: [FreightService],
        }).compile();

        controller = module.get<FreightController>(FreightController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
