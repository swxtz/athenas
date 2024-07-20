import { Test, TestingModule } from "@nestjs/testing";
import { DayjsService } from "./dayjs.service";

describe("DayjsService", () => {
    let service: DayjsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DayjsService],
        }).compile();

        service = module.get<DayjsService>(DayjsService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
