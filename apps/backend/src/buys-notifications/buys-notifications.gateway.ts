import { WebSocketGateway } from "@nestjs/websockets";
import { BuysNotificationsService } from "./buys-notifications.service";

@WebSocketGateway()
export class BuysNotificationsGateway {
    constructor(
        private readonly buysNotificationsService: BuysNotificationsService,
    ) {}
}
