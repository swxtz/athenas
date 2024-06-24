import { Test, TestingModule } from "@nestjs/testing";
import { ResendService } from "./resend.service";

describe("ResendService", () => {
    let service: ResendService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ResendService],
        }).compile();

        service = module.get<ResendService>(ResendService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
