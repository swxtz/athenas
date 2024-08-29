import { Test, TestingModule } from "@nestjs/testing";
import { PurchasedProductsController } from "./purchased-products.controller";
import { PurchasedProductsService } from "./purchased-products.service";

describe("PurchasedProductsController", () => {
    let controller: PurchasedProductsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PurchasedProductsController],
            providers: [PurchasedProductsService],
        }).compile();

        controller = module.get<PurchasedProductsController>(
            PurchasedProductsController,
        );
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
