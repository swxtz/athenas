import { Test, TestingModule } from "@nestjs/testing";
import { PurchasedProductsService } from "./purchased-products.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";
import { JwtService } from "@nestjs/jwt";

describe("PurchasedProductsService", () => {
    let service: PurchasedProductsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PurchasedProductsService,
                PrismaService,
                UtilsService,
                JwtService,
            ],
        }).compile();

        service = module.get<PurchasedProductsService>(
            PurchasedProductsService,
        );
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
