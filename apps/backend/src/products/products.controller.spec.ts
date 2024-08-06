import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { ProductEntity } from "./entity/product.entity";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { createId } from "@paralleldrive/cuid2";
import { date } from "zod";

describe("ProductsController", () => {
    let controller: ProductsController;
    let service: ProductsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [
                {
                    provide: ProductsService,
                    useValue: {
                        getAllProducts: jest
                            .fn()
                            .mockResolvedValue(ProductEntity),
                        createProduct: jest.fn(),
                        uploadCoverImage: jest.fn(),
                    },
                },

                JwtService,
            ],
        }).compile();

        controller = module.get<ProductsController>(ProductsController);
        service = module.get<ProductsService>(ProductsService);
    });

    const product: ProductEntity[] = [
        new ProductEntity({
            id: createId(),
            name: "batata",
            description: "batata gostosa",
            barcode: "123456789",
            images: ["www.google.com"],
            coverImage: "www.google.com",
            isAvailable: true,
            rating: "5",
            productType: "others",
            state: "",
            localPickup: true,
            numberOfSales: 2,
            numberOfViews: 10,
            numberOfViewsInLastWeek: 10,
            buyPrice: 5,
            price: 2,
            stock: 10000,

            createdAt: new Date(),
            updatedAt: new Date(),
        }),
    ];

    it("should be defined", () => {
        expect(controller).toBeDefined();
        expect(service).toBeDefined();
    });

    describe("getAllProducts", () => {
        it("should return a product entity successfully", async () => {
            const result = await controller.getAllProducts();
            expect(result).toEqual([]);
        });
    });
});
