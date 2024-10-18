import { Test, TestingModule } from "@nestjs/testing";
import { ShoppingCartController } from "./shopping-cart.controller";
import { ShoppingCartService } from "./shopping-cart.service";
import { UtilsService } from "src/utils/utils.service";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { INestApplication } from "@nestjs/common";
import { createNestAppInstance } from "test/test.helpers";
import request from "supertest";
import { AddProductInUserShoppingCartDTO } from "./dtos/add-product-in-user-shopping-cart.dto";
import { v4 as uuidv4 } from "uuid";
import { PrismaMocks } from "src/prisma/mocks";
import { UpdateProductInShoppingCartDTO } from "./dtos/update-product-in-shopping-cart.dto";
import { ConfigService } from "@nestjs/config";

describe("ShoppingCartController", () => {
    let controller: ShoppingCartController;
    let app: INestApplication;

    beforeAll(async () => {
        app = await createNestAppInstance();
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ShoppingCartController],
            providers: [
                ShoppingCartService,
                ConfigService,
                PrismaService,
                UtilsService,
                JwtService,
            ],
        }).compile();

        controller = module.get<ShoppingCartController>(ShoppingCartController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });

    describe("add product in shopping cart", () => {
        describe("auth", () => {
            it("shouldn't add a product in the cart without being authenticated", async () => {
                const product: AddProductInUserShoppingCartDTO = {
                    amount: 1,
                    id: uuidv4(),
                };

                const req = await request(app.getHttpServer())
                    .post("/shopping-cart/add-product-in-user-shopping-cart")
                    .send(product);

                expect(req.statusCode).toBe(401);
                expect(req.body.message).toBe(
                    "Token inválido, por favor faça login",
                );
                expect(req.body.statusCode).toBe(401);
            });
            it("should not be possible to add a product with an invalid token", async () => {
                const product: AddProductInUserShoppingCartDTO = {
                    id: "1",
                    amount: 1,
                };

                const req = await request(app.getHttpServer())
                    .post("/shopping-cart/add-product-in-user-shopping-cart")
                    .set("Authorization", "Bearer token")
                    .send(product);

                expect(req.statusCode).toBe(401);
                expect(req.body.message).toBe(
                    "Token inválido, por favor faça login",
                );
                expect(req.body.statusCode).toBe(401);
            });

            it("should not be possible to add a product with a token that does not exist", async () => {
                const product: AddProductInUserShoppingCartDTO = {
                    id: "1",
                    amount: 1,
                };

                const token =
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

                const req = await request(app.getHttpServer())
                    .post("/shopping-cart/add-product-in-user-shopping-cart")
                    .set("Authorization", `Bearer ${token}`)
                    .send(product);

                expect(req.statusCode).toBe(401);
                expect(req.body.message).toBe(
                    "Token inválido, por favor faça login",
                );
                expect(req.body.statusCode).toBe(401);
            });
        });
        describe("validation", () => {
            it("shouldn't be possible add an out-of-stock product", async () => {
                const users = new PrismaMocks().users();
                const userToken = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[2].email,
                        password: users[2].password,
                    });

                const products = await request(app.getHttpServer()).get(
                    "/products/get-best-sellers",
                );

                const product: AddProductInUserShoppingCartDTO = {
                    amount: products.body.data[0].stock + 1,
                    id: products.body.data[0].id,
                };

                const req = await request(app.getHttpServer())
                    .post("/shopping-cart/add-product-in-user-shopping-cart")
                    .set("authorization", `Bearer ${userToken.body.data.token}`)
                    .send(product);

                expect(req.statusCode).toBe(400);
                expect(req.body.message).toBe(
                    `Produto sem estoque: ${products.body.data[0].name}`,
                );
            });
            it("shouldn't be possible to add a product that is not found", async () => {
                const users = new PrismaMocks().users();
                const userToken = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[2].email,
                        password: users[2].password,
                    });

                const products = await request(app.getHttpServer()).get(
                    "/products/get-best-sellers",
                );

                const id = uuidv4();

                const product: AddProductInUserShoppingCartDTO = {
                    amount: products.body.data[0].stock + 1,
                    id: id,
                };
                const req = await request(app.getHttpServer())
                    .post("/shopping-cart/add-product-in-user-shopping-cart")
                    .set("Authorization", `Bearer ${userToken.body.data.token}`)
                    .send(product);

                expect(req.statusCode).toBe(404);
                expect(req.body.message).toBe(
                    `Produto não encontrado com o id: ${id}`,
                );
            });
            it("shouldn't be possible to add a product that is already in the shopping cart", async () => {
                const users = new PrismaMocks().users();
                const userToken = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[2].email,
                        password: users[2].password,
                    });

                const products = await request(app.getHttpServer()).get(
                    "/products/get-best-sellers",
                );

                const product: AddProductInUserShoppingCartDTO = {
                    amount: 1,
                    id: products.body.data[0].id,
                };
                const req = await request(app.getHttpServer())
                    .post("/shopping-cart/add-product-in-user-shopping-cart")
                    .set("Authorization", `Bearer ${userToken.body.data.token}`)
                    .send(product);

                expect(req.statusCode).toBe(400);
                expect(req.body.message).toBe(
                    `Produto já está no carrinho: ${products.body.data[0].name}`,
                );
            });
            it("shouldn't be possible to add a deleted product", async () => {
                const users = new PrismaMocks().users();
                const userToken = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[2].email,
                        password: users[2].password,
                    });
                const products = await request(app.getHttpServer()).get(
                    "/products/get-products-deleted",
                );

                const id = products.body.data[0].id;
                console.log(products.body.data[0].id);

                const product: AddProductInUserShoppingCartDTO = {
                    amount: products.body.data[0].stock + 1,
                    id: id,
                };
                const req = await request(app.getHttpServer())
                    .post("/shopping-cart/add-product-in-user-shopping-cart")
                    .set("Authorization", `Bearer ${userToken.body.data.token}`)
                    .send(product);

                expect(req.statusCode).toBe(404);
                expect(req.body.message).toBe(
                    `Produto deletado com o id: ${id}`,
                );
            });
            it("shouldn't be possible add a product that isn't available", async () => {
                const users = new PrismaMocks().users();
                const userToken = await request(app.getHttpServer())
                    .post("/auth/login")
                    .send({
                        email: users[2].email,
                        password: users[2].password,
                    });

                const products = await request(app.getHttpServer()).get(
                    "/products/get-best-sellers",
                );
                const id = uuidv4();
                // console.log(userToken.body);

                const product: AddProductInUserShoppingCartDTO = {
                    amount: products.body.data[0].stock + 1,
                    id: id,
                };

                const req = await request(app.getHttpServer())
                    .post("/shopping-cart/add-product-in-user-shopping-cart")
                    .set("authorization", `Bearer ${userToken.body.data.token}`)
                    .send(product);

                expect(req.statusCode).toBe(404);
                expect(req.body.message).toBe(
                    `Produto não disponivel com o id: ${id}`,
                );
            });
        });
    });
    describe("update a new product", () => {
        describe("auth", () => {
            it("shouldn't create a product in the cart without being authenticated", async () => {
                const product: UpdateProductInShoppingCartDTO = {
                    name: "Ketchup",
                    order: "increment",
                    amount: 1,
                };

                const req = await request(app.getHttpServer())
                    .post("/shopping-cart/add-product-in-user-shopping-cart")
                    .send(product);

                expect(req.statusCode).toBe(401);
                expect(req.body.message).toBe(
                    "Token inválido, por favor faça login",
                );
                expect(req.body.statusCode).toBe(401);
            });
            it("should not be possible to create add a product with an invalid token", async () => {
                const product: UpdateProductInShoppingCartDTO = {
                    name: "Ketchup",
                    order: "increment",
                    amount: 1,
                };

                const req = await request(app.getHttpServer())
                    .post("/shopping-cart/add-product-in-user-shopping-cart")
                    .set("Authorization", "Bearer token")
                    .send(product);

                expect(req.statusCode).toBe(401);
                expect(req.body.message).toBe(
                    "Token inválido, por favor faça login",
                );
                expect(req.body.statusCode).toBe(401);
            });

            it("should not be possible to add a product with a token that does not exist", async () => {
                const product: UpdateProductInShoppingCartDTO = {
                    name: "Ketchup",
                    order: "increment",
                    amount: 1,
                };

                const token =
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

                const req = await request(app.getHttpServer())
                    .post("/shopping-cart/add-product-in-user-shopping-cart")
                    .set("Authorization", `Bearer ${token}`)
                    .send(product);

                expect(req.statusCode).toBe(401);
                expect(req.body.message).toBe(
                    "Token inválido, por favor faça login",
                );
                expect(req.body.statusCode).toBe(401);
            });
        });
        it("should not be possible to update a product without a id", async () => {
            const users = new PrismaMocks().users();
            const userToken = await request(app.getHttpServer())
                .post("/auth/login")
                .send({
                    email: users[2].email,
                    password: users[2].password,
                });

            const products = await request(app.getHttpServer()).get(
                "/products/get-best-sellers",
            );

            const product: UpdateProductInShoppingCartDTO = {
                amount: products.body.data[0].stock + 1,
                name: "",
                order: "increment",
            };

            const req = await request(app.getHttpServer())
                .put("/shopping-cart/update-product-in-shopping-cart")
                .set("authorization", `Bearer ${userToken.body.data.token}`)
                .send(product);

            expect(req.statusCode).toBe(400);
            console.log(req.body.message);
        });
    });
});
