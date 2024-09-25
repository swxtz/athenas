import { Test, TestingModule } from "@nestjs/testing";
import { ShoppingCartController } from "./shopping-cart.controller";
import { ShoppingCartService } from "./shopping-cart.service";
import { UtilsService } from "src/utils/utils.service";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";

describe("ShoppingCartController", () => {
    let controller: ShoppingCartController;

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
});
