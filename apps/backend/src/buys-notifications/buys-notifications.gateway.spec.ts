import { Test, TestingModule } from "@nestjs/testing";
import { BuysNotificationsGateway } from "./buys-notifications.gateway";
import { BuysNotificationsService } from "./buys-notifications.service";

describe("BuysNotificationsGateway", () => {
    let gateway: BuysNotificationsGateway;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BuysNotificationsGateway, BuysNotificationsService],
        }).compile();

        gateway = module.get<BuysNotificationsGateway>(
            BuysNotificationsGateway,
        );
    });

    it("should be defined", () => {
        expect(gateway).toBeDefined();
    });
});
