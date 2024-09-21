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

describe("BuysController", () => {
    let controller: BuysController
    let app: INestApplication;

    beforeAll(async () => {
        app = await createNestAppInstance();
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BuysController],
            providers: [BuysService, UtilsService, JwtService, PrismaService],
        }).compile();

        controller = module.get<BuysController>(BuysController);
    });

    describe("create buy order pix", () => {
        it("should not be possible to create a purchase order without an authorization token", async () => {
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

        it("should not be possible to create a purchase order with an invalid token", async () => {
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
    });
});
