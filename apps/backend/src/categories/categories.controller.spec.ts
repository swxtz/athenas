import { Test, TestingModule } from "@nestjs/testing";
import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

describe("CategoriesController", () => {
    let controller: CategoriesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CategoriesController],
            providers: [
                CategoriesService,
                PrismaService,
                UtilsService,
                JwtService,
                ConfigService,
            ],
        }).compile();

        controller = module.get<CategoriesController>(CategoriesController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
