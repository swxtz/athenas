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

    describe("recommendation values", () => {
        it("should return view value", () => {
            expect(RecommentationValuesService.view).toBe(0.03);
        });

        it("should return sale value", () => {
            expect(RecommentationValuesService.sale).toBe(0.5);
        });

        it("should return reBuy value", () => {
            expect(RecommentationValuesService.reBuyValue).toBe(0.6);
        });

        it("should return like value", () => {
            expect(RecommentationValuesService.likeValue).toBe(0.3);
        });

        it("should return self search value", () => {
            expect(RecommentationValuesService.selfSearchValue).toBe(0.75);
        });
    });
});
