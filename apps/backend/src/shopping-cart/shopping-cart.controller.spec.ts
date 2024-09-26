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

    describe("create product in shopping cart", () => {
        describe("auth", () => {
            it("shouldn't create a product in the cart without being authenticated", async () => {
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

                // const products: CreateBuyOrderPixDTO = {
                //     products: [
                //         {
                //             id: "1",
                //             amount: 1,
                //         },
                //     ],
                // };

                // const req = await request(app.getHttpServer())
                //     .post("/buys/create-buy-order/pix")
                //     .send(products);

                // expect(req.statusCode).toBe(401);
                // expect(req.body.message).toBe(
                //     "Token inválido, por favor faça login",
                // );
                // expect(req.body.statusCode).toBe(401);
            });
        });
    });
});
