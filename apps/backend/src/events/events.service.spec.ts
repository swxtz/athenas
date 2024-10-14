import { Test, TestingModule } from "@nestjs/testing";
import { EventsService } from "./events.service";
import { UtilsService } from "src/utils/utils.service";
import { PrismaService } from "src/prisma/prisma.service";

describe("EventsService", () => {
    let service: EventsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EventsService, UtilsService, PrismaService],
        }).compile();

        service = module.get<EventsService>(EventsService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
