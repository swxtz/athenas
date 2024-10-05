import { Test, TestingModule } from "@nestjs/testing";
import { EventsController } from "./events.controller";
import { EventsService } from "./events.service";
import { UtilsService } from "src/utils/utils.service";
import { PrismaService } from "src/prisma/prisma.service";

describe("EventsController", () => {
    let controller: EventsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EventsController],
            providers: [EventsService, UtilsService, PrismaService],
        }).compile();

        controller = module.get<EventsController>(EventsController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
