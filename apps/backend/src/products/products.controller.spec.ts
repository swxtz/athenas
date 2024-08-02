import { Test, TestingModule } from "@nestjs/testing";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

describe("ProductsController", () => {
    let controller: ProductsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [ProductsService],
        }).compile();

        controller = module.get<ProductsController>(ProductsController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
        expect(ProductsService).toBeDefined();
    });

    describe('get-all', () => {
        it('should return a product entity sucessfully', async () =>{
            const result = await ProductsController.getAllProducts();
            expect(result).toEqual([]);
        }); 
    });
});
