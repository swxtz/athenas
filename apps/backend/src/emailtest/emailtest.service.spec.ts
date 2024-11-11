import { Test, TestingModule } from "@nestjs/testing";
import { EmailtestService } from "./emailtest.service";

describe("EmailtestService", () => {
    let service: EmailtestService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EmailtestService],
        }).compile();

        service = module.get<EmailtestService>(EmailtestService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
