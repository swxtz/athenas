import { Module } from "@nestjs/common";
import { BuysNotificationsService } from "./buys-notifications.service";
import { BuysNotificationsGateway } from "./buys-notifications.gateway";

@Module({
    providers: [BuysNotificationsGateway, BuysNotificationsService],
})
export class BuysNotificationsModule {}
