import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { ProductEntity } from "./entity/product.entity";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { createId } from "@paralleldrive/cuid2";

import { createNestAppInstance } from "test/test.helpers";

const productMockId = createId();

const returnedBestSellersProduct: ProductEntity[] = [
    {
        name: "Pão para hamburguer",
        description: "Pão para hamburguer",
        barcode: "123456789",
        price: 1425,
        stock: 100,
        coverImage:
            "https://megag.com.br/v21/wp-content/uploads/2024/01/15060-PAO-DE-HAMBURGUER-TRADICIONAL-PITA-BREAD-48X80G.png",
        buyPrice: 1000,
        isAvailable: true,
        localPickup: true,
        numberOfSales: 1001,
        numberOfViews: 1000,
        numberOfViewsInLastWeek: 1000,
        productType: "others",
        state: "available",
    },
];

const returnedProduct: ProductEntity[] = [
    new ProductEntity({
        id: productMockId,
        name: "batata",
        description: "batata gostosa",
        barcode: "123456789",
        images: ["www.google.com"],
        coverImage: "www.google.com",
        isAvailable: true,
        rating: "5",
        productType: "others",
        state: "available",
        localPickup: true,
        numberOfSales: 2,
        numberOfViews: 10,
        numberOfViewsInLastWeek: 10,
        buyPrice: 5,
        price: 2,
        stock: 10000,

        createdAt: new Date("2024-08-07T22:58:31.874Z"),
        updatedAt: new Date("2024-08-07T22:58:31.874Z"),
    }),
];

describe("ProductsController", () => {
    let controller: ProductsController;
    let service: ProductsService;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let app;

    beforeAll(async () => {
        app = await createNestAppInstance();
        ("");
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [
                {
                    provide: ProductsService,
                    useValue: {
                        getAllProducts: jest
                            .fn()
                            .mockResolvedValue(returnedProduct),
                        createProduct: jest
                            .fn()
                            .mockResolvedValue(returnedProduct),
                        uploadCoverImage: jest.fn(),

                        getBestSellersProducts: jest
                            .fn()
                            .mockResolvedValue(returnedBestSellersProduct),
                    },
                },

                JwtService,
            ],
        }).compile();

        controller = module.get<ProductsController>(ProductsController);
        service = module.get<ProductsService>(ProductsService);
    });

    const product: ProductEntity[] = [
        {
            id: productMockId,
            name: "batata",
            description: "batata gostosa",
            barcode: "123456789",
            images: ["www.google.com"],
            coverImage: "www.google.com",
            isAvailable: true,
            rating: "5",
            productType: "others",
            state: "available",
            localPickup: true,
            numberOfSales: 2,
            numberOfViews: 10,
            numberOfViewsInLastWeek: 10,
            buyPrice: 5,
            price: 2,
            stock: 10000,

            createdAt: new Date("2024-08-07T22:58:31.874Z"),
            updatedAt: new Date("2024-08-07T22:58:31.874Z"),
        },
    ];

    it("should be defined", () => {
        expect(controller).toBeDefined();
        expect(service).toBeDefined();
    });

    describe("getAllProducts", () => {
        it("should return a product entity successfully", async () => {
            const result = await controller.getAllProducts();
            expect(result).toEqual(product);
            expect(service.getAllProducts).toHaveBeenCalledTimes(1);
        });
    });

    /*describe("create-product", () => {
        it("should create a new product successfully", async () => {
            const productBody: CreateProductDTO = {
                name: "batata",
                buyPrice: 5,
                coverImage: "www.google.com",
                description: "batata gostosa",
                isAvailable: true,
                price: 2,
                productType: "others",
                stockQuantity: 1000,
                barcode: "123456789",
            };

            const userBody: CreateUserDTO = {
                email: "google@gmail.com",
                name: "Jose",
                password: "123456789",
            };
            const createUser = await request(app.getHttpServer())
                .post("/users")
                .send(userBody);

            // const result = await controller.createProduct(body);
            // expect(result).toEqual(returnedProduct);
        });
    });*/

    describe("get-best-sellers", () => {
        it("should return all best sellers products successfully", async () => {
            const result = await controller.getBestSellersProducts();

            expect(result).toEqual(returnedBestSellersProduct);
            expect(service.getBestSellersProducts);
        });
        it("", async () => {
            const query = {
                limit: 10,
            };

            const result = await controller.getBestSellersProducts(query);

            expect(result).toBeLessThan(9);
        });
    });

    describe("get-random-products", () => {});
});
