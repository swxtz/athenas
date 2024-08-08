import { Test, TestingModule } from "@nestjs/testing";
import { RecommentationValuesService } from "./recommentation-values.service";

describe("RecommentationValuesService", () => {
    let service: RecommentationValuesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RecommentationValuesService],
        }).compile();

        service = module.get<RecommentationValuesService>(
            RecommentationValuesService,
        );
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
