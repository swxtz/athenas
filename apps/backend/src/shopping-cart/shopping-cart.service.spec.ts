import { Test, TestingModule } from "@nestjs/testing";
import { ShoppingCartService } from "./shopping-cart.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";
import { JwtService } from "@nestjs/jwt";

describe("ShoppingCartService", () => {
    let service: ShoppingCartService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ShoppingCartService,
                PrismaService,
                UtilsService,
                JwtService,
            ],
        }).compile();

        service = module.get<ShoppingCartService>(ShoppingCartService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
