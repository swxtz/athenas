import { Test, TestingModule } from "@nestjs/testing";
import { BuysController } from "./buys.controller";
import { BuysService } from "./buys.service";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { UtilsService } from "src/utils/utils.service";
import { createNestAppInstance } from "test/test.helpers";
import { CreateBuyOrderPixDTO } from "./dtos/create-buy-order-pix.dto";
import request from "supertest";
import { INestApplication } from "@nestjs/common";
import { PrismaMocks } from "src/prisma/mocks";
import { v4 as uuidv4 } from "uuid";
import { EventsService } from "src/events/events.service";
import { ConfigService } from "@nestjs/config";

describe("BuysController", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let controller: BuysController;
    let app: INestApplication;
    const users = new PrismaMocks().users();

    beforeAll(async () => {
        app = await createNestAppInstance();
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BuysController],
            providers: [
                BuysService,
                ConfigService,
                UtilsService,
                JwtService,
                PrismaService,
                EventsService,
            ],
        }).compile();

        controller = module.get<BuysController>(BuysController);
    });

    describe("create buy order pix", () => {
        describe("auth", () => {
            it("should not be possible to create a buy order without an authorization token", async () => {
                const products: CreateBuyOrderPixDTO = {
                    products: [
                        {
                            id: "1",
                            amount: 1,
                        },
                    ],
                };

                const req = await request(app.getHttpServer())
                    .post("/buys/create-buy-order/pix")
                    .send(products);

                expect(req.statusCode).toBe(401);
                expect(req.body.message).toBe(
                    "Token inválido, por favor faça login",
                );
                expect(req.body.statusCode).toBe(401);
            });

            it("should not be possible to create a buy order with an invalid token", async () => {
                const products: CreateBuyOrderPixDTO = {
                    products: [
                        {
                            id: "1",
                            amount: 1,
                        },
                    ],
                };

                const req = await request(app.getHttpServer())
                    .post("/buys/create-buy-order/pix")
                    .set("Authorization", "Bearer token")
                    .send(products);

                expect(req.statusCode).toBe(401);
                expect(req.body.message).toBe(
                    "Token inválido, por favor faça login",
                );
                expect(req.body.statusCode).toBe(401);
            });

            it("should not be possible to create a buy order with a token that does not exist", async () => {
                const products: CreateBuyOrderPixDTO = {
                    products: [
                        {
                            id: "1",
                            amount: 1,
                        },
                    ],
                };

                const token =
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

                const req = await request(app.getHttpServer())
                    .post("/buys/create-buy-order/pix")
                    .set("Authorization", `Bearer ${token}`)
                    .send(products);

                expect(req.statusCode).toBe(401);
                expect(req.body.message).toBe(
                    "Token inválido, por favor faça login",
                );
                expect(req.body.statusCode).toBe(401);
            });
        });

        describe("validation", () => {
            it("should not be possible to create a buy order with an empty array", async () => {
                const products: CreateBuyOrderPixDTO = {
                    products: [],
                };

                const loginRequest = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[1].email,
                        password: users[1].password,
                    });

                const token = loginRequest.body.data.token;

                const req = await request(app.getHttpServer())
                    .post("/buys/create-buy-order/pix")
                    .set("Authorization", `Bearer ${token}`)
                    .send(products);

                expect(req.statusCode).toBe(400);
                expect(req.body.message[0]).toBe(
                    "Nenhum produto foi informado. Deve ter pelo menos um produto",
                );
                expect(req.body.statusCode).toBe(400);
            });

            it("should not be possible to create a buy order with a product that does not exist", async () => {
                const products: CreateBuyOrderPixDTO = {
                    products: [
                        {
                            id: uuidv4(),
                            amount: 1,
                        },
                    ],
                };

                const loginRequest = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[1].email,
                        password: users[1].password,
                    });

                const token = loginRequest.body.data.token;

                const req = await request(app.getHttpServer())
                    .post("/buys/create-buy-order/pix")
                    .set("Authorization", `Bearer ${token}`)
                    .send(products);

                expect(req.statusCode).toBe(404);
                expect(req.body.message).toBe(
                    "Produto não encontrado com o id: " +
                        products.products[0].id,
                );
            });

            it("should not be possible to create a buy order with a product that has an amount less than 1", async () => {
                const products: CreateBuyOrderPixDTO = {
                    products: [
                        {
                            id: uuidv4(),
                            amount: 0,
                        },
                    ],
                };

                const loginRequest = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[1].email,
                        password: users[1].password,
                    });

                const token = loginRequest.body.data.token;

                const req = await request(app.getHttpServer())
                    .post("/buys/create-buy-order/pix")
                    .set("Authorization", `Bearer ${token}`)
                    .send(products);

                expect(req.statusCode).toBe(400);
                expect(req.body.message[0]).toBe(
                    "products.0.O valor mínimo é 1",
                );
                expect(req.body.statusCode).toBe(400);
            });
        });

        describe("product availability", () => {
            it("should not be possible to create a buy order with a product that is not available", async () => {
                const getProductsNotAvailable = await request(
                    app.getHttpServer(),
                ).get("/products/get-products-not-available?limit=1");

                const products: CreateBuyOrderPixDTO = {
                    products: [
                        {
                            id: getProductsNotAvailable.body.data[0].id,
                            amount: 1,
                        },
                    ],
                };

                const loginRequest = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[1].email,
                        password: users[1].password,
                    });

                const token = loginRequest.body.data.token;

                const req = await request(app.getHttpServer())
                    .post("/buys/create-buy-order/pix")
                    .set("Authorization", `Bearer ${token}`)
                    .send(products);

                expect(req.statusCode).toBe(404);
                expect(req.body.message).toBe(
                    `Produto não disponível com o id: ${getProductsNotAvailable.body.data[0].id}`,
                );
            });

            it("should not be possible to create a purchase order with a deleted product", async () => {
                const getProductsDeleted = await request(
                    app.getHttpServer(),
                ).get("/products/get-products-deleted?limit=1");

                const products: CreateBuyOrderPixDTO = {
                    products: [
                        {
                            id: getProductsDeleted.body.data[0].id,
                            amount: 1,
                        },
                    ],
                };

                const loginRequest = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[1].email,
                        password: users[1].password,
                    });

                const token = loginRequest.body.data.token;

                const req = await request(app.getHttpServer())
                    .post("/buys/create-buy-order/pix")
                    .set("Authorization", `Bearer ${token}`)
                    .send(products);

                expect(req.statusCode).toBe(404);
            });

            it("should not be possible to create a buy order where the quantity is greater than the stock", async () => {
                const getProducts = await request(app.getHttpServer()).get(
                    "/products/get-best-sellers?limit=1",
                );

                const products: CreateBuyOrderPixDTO = {
                    products: [
                        {
                            id: getProducts.body.data[0].id,
                            amount: getProducts.body.data[0].stock + 1,
                        },
                    ],
                };

                const loginRequest = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[1].email,
                        password: users[1].password,
                    });

                const token = loginRequest.body.data.token;

                const req = await request(app.getHttpServer())
                    .post("/buys/create-buy-order/pix")
                    .set("Authorization", `Bearer ${token}`)
                    .send(products);

                expect(req.statusCode).toBe(400);
                expect(req.body.message).toBe(
                    `Produto sem estoque: ${getProducts.body.data[0].name}`,
                );
            });
        });

        describe("create buy order with sucess", () => {
            it("should be possible to create a purchase order with a product", async () => {
                const getProducts = await request(app.getHttpServer()).get(
                    "/products/get-best-sellers?limit=1",
                );

                const products: CreateBuyOrderPixDTO = {
                    products: [
                        {
                            id: getProducts.body.data[0].id,
                            amount: 1,
                        },
                    ],
                };

                const loginRequest = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[1].email,
                        password: users[1].password,
                    });

                const token = loginRequest.body.data.token;

                const req = await request(app.getHttpServer())
                    .post("/buys/create-buy-order/pix")
                    .set("Authorization", `Bearer ${token}`)
                    .send(products);

                expect(req.statusCode).toBe(201);
                expect(req.body.data.buyOrder).toHaveProperty("id");
                expect(req.body.data.buyOrder).toHaveProperty("userId");
                expect(req.body.data.buyOrder).toHaveProperty("paymentMethod");
                expect(req.body.data.buyOrder).toHaveProperty("paymentStatus");

                expect(req.body.data.products).toHaveLength(1);
            });

            it("should be possible to create a purchase order with multiple products", async () => {
                const getProducts = await request(app.getHttpServer()).get(
                    "/products/get-best-sellers?limit=2",
                );

                const products: CreateBuyOrderPixDTO = {
                    products: [
                        {
                            id: getProducts.body.data[0].id,
                            amount: 1,
                        },
                        {
                            id: getProducts.body.data[1].id,
                            amount: 1,
                        },
                    ],
                };

                const loginRequest = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[1].email,
                        password: users[1].password,
                    });

                const token = loginRequest.body.data.token;

                const req = await request(app.getHttpServer())
                    .post("/buys/create-buy-order/pix")
                    .set("Authorization", `Bearer ${token}`)
                    .send(products);

                expect(req.statusCode).toBe(201);
                expect(req.body.data.buyOrder).toHaveProperty("id");
                expect(req.body.data.buyOrder).toHaveProperty("userId");
                expect(req.body.data.buyOrder).toHaveProperty("paymentMethod");
                expect(req.body.data.buyOrder).toHaveProperty("paymentStatus");

                expect(req.body.data.products).toHaveLength(2);
            });
        });
    });
});
