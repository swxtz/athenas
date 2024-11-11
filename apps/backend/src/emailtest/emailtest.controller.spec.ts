import { Test, TestingModule } from "@nestjs/testing";
import { EmailtestController } from "./emailtest.controller";
import { EmailtestService } from "./emailtest.service";

describe("EmailtestController", () => {
    let controller: EmailtestController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EmailtestController],
            providers: [EmailtestService],
        }).compile();

        controller = module.get<EmailtestController>(EmailtestController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
