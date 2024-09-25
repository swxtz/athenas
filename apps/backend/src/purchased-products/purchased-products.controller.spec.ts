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

            const products = purchasedproducts.body;
            const expectedfields = [
                "id",
                "productId",
                "userId",
                "productSlug",
                "productValue",
                "productName",
                "createdAt",
                "updatedAt",
            ];

            expect(Array.isArray(products)).toBe(true);
            expect(products.length).toBeGreaterThan(0);

            products.forEach((product) => {
                // Verifica se cada produto possui as propriedades esperadas
                expectedfields.forEach((field) => {
                    expect(product).toHaveProperty(field);
                    expect(product[field]).toBeDefined();
                    expect(product[field]).not.toBeNull();

                    // Verifica o comprimento apenas para strings
                    if (typeof product[field] === "string") {
                        expect(product[field].length).toBeGreaterThan(0); // Verifica se a string não está vazia
                    }
                    // Se `productValue` for um número, verifique se é um valor válido
                    else if (field === "productValue") {
                        expect(product[field]).toBeGreaterThan(0); // Verifica se o valor é positivo
                    }
                });
            });
        });

        it("should be not possible add products without login", async () => {
            const purchasedproducts = await request(app.getHttpServer()).get(
                "/purchased-products/get-all",
            );

            expect(purchasedproducts.statusCode).toBe(401);
        });

        it("should be not possible return the purchased products with a invalid token ", async () => {
            const token =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

            const purchasedproducts = await request(app.getHttpServer())
                .get("/purchased-products/get-all")
                .set("Authorization", `Bearer ${token}`);
            expect(purchasedproducts.statusCode).toBe(401);
        });
    });
});
