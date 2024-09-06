import { Test, TestingModule } from "@nestjs/testing";
import { PurchasedProductsController } from "./purchased-products.controller";
import { PurchasedProductsService } from "./purchased-products.service";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client";
import { CreateUserDTO } from "src/users/dtos/create-user.dto";
import request from "supertest";
import { createNestAppInstance } from "test/test.helpers";

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
            const userBody: CreateUserDTO = {
                email: "returnproductspurchasedbytheuser@purchasedproducts.com",
                name: "Jose",
                password: "123456789",
            };

            const createUser = await request(app.getHttpServer())
                .post("/users/dev")
                .send(userBody);

            //const verifyEmail = await request(app.getHttpServer())
            // .post("/auth/verify-email")
            // .send(createUser.token);
        });
    });
});
