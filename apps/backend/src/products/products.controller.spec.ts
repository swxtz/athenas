import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { ProductEntity } from "./entity/product.entity";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { createId } from "@paralleldrive/cuid2";
import { CreateProductDTO } from "./dtos/create-product.dto";
import * as request from "supertest";
import { createNestAppInstance } from "test/test.helpers";
import { CreateUserDTO } from "src/users/dtos/create-user.dto";

const productMockId = createId();

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

    
});

