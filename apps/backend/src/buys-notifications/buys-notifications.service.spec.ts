import { Test, TestingModule } from "@nestjs/testing";
import { BuysNotificationsService } from "./buys-notifications.service";

describe("BuysNotificationsService", () => {
    let service: BuysNotificationsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BuysNotificationsService],
        }).compile();

        service = module.get<BuysNotificationsService>(
            BuysNotificationsService,
        );
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
