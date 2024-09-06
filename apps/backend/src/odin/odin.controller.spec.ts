import { Test, TestingModule } from "@nestjs/testing";
import { OdinController } from "./odin.controller";

describe("OdinController", () => {
    let controller: OdinController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [OdinController],
        }).compile();

        controller = module.get<OdinController>(OdinController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
