import { Test, TestingModule } from "@nestjs/testing";
import { PurchasedProductsService } from "./purchased-products.service";

describe("PurchasedProductsService", () => {
    let service: PurchasedProductsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PurchasedProductsService],
        }).compile();

        service = module.get<PurchasedProductsService>(
            PurchasedProductsService,
        );
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
