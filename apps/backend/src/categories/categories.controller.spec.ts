import { Test, TestingModule } from "@nestjs/testing";
import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UtilsService } from "src/utils/utils.service";
import { JwtService } from "@nestjs/jwt";

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
            ],
        }).compile();

        controller = module.get<CategoriesController>(CategoriesController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
