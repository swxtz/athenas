import { Test, TestingModule } from "@nestjs/testing";
import { PurchasedProductsController } from "./purchased-products.controller";
import { PurchasedProductsService } from "./purchased-products.service";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import request from "supertest";
import { createNestAppInstance } from "test/test.helpers";
import { PrismaMocks } from "src/prisma/mocks";

describe("PurchasedProductsController", () => {
    let controller: PurchasedProductsController;
    let service: PurchasedProductsService;
    let app;

    beforeAll(async () => {
        app = await createNestAppInstance();
        ("");
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PurchasedProductsController],
            providers: [
                {
                    provide: PurchasedProductsService,
                    useValue: {
                        getAllPurchasedProducts: jest.fn(),
                    },
                },
                JwtService,
                PrismaService,
            ],
        }).compile();

        controller = module.get<PurchasedProductsController>(
            PurchasedProductsController,
        );
        service = module.get<PurchasedProductsService>(
            PurchasedProductsService,
        );
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
        expect(service).toBeDefined();
    });

    describe("getAllPurchasedProducts", () => {
        it("should return the products purchased by the user", async () => {
            const users = new PrismaMocks().users();

            const userLogin = await request(app.getHttpServer())
                .post("/auth/login")
                .send({ email: users[0].email, password: users[0].password });

            const token = userLogin.body.data.token;

            const purchasedproducts = await request(app.getHttpServer())
                .get("/purchased-products/get-all")
                .set("Authorization", `Bearer ${token}`);

            console.log(purchasedproducts.body);

            const produtos = purchasedproducts.body;
            const camposEsperados = [
                "id",
                "productId",
                "userId",
                "productSlug",
                "productValue",
                "productName",
                "createdAt",
                "updatedAt",
            ];

            produtos.forEach((produto) => {
                camposEsperados.forEach((campo) => {
                    expect(produto).toHaveProperty(campo);
                });
            });
        });
    });
});
