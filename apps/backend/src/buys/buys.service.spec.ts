import { Test, TestingModule } from "@nestjs/testing";
import { BuysService } from "./buys.service";
import { UtilsService } from "src/utils/utils.service";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { EventsService } from "src/events/events.service";

describe("BuysService", () => {
    let service: BuysService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BuysService,
                UtilsService,
                JwtService,
                PrismaService,
                EventsService,
            ],
        }).compile();

        service = module.get<BuysService>(BuysService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
