import { Test, TestingModule } from "@nestjs/testing";
import { RecommendationValuesService } from "./recommendation-values.service";

describe("RecommendationValuesService", () => {
    let service: RecommendationValuesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RecommendationValuesService],
        }).compile();

        service = module.get<RecommendationValuesService>(
            RecommendationValuesService,
        );
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("recommendation values", () => {
        it("should return view value", () => {
            expect(RecommendationValuesService.view).toBe(0.03);
        });

        it("should return sale value", () => {
            expect(RecommendationValuesService.sale).toBe(0.5);
        });

        it("should return reBuy value", () => {
            expect(RecommendationValuesService.reBuyValue).toBe(0.6);
        });

        it("should return like value", () => {
            expect(RecommendationValuesService.likeValue).toBe(0.3);
        });

        it("should return self search value", () => {
            expect(RecommendationValuesService.selfSearchValue).toBe(0.75);
        });
    });
});
