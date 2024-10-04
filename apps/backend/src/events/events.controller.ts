import { Controller, Header, Req, Sse, UseGuards } from "@nestjs/common";
import { EventsService } from "./events.service";
import { Request } from "express";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("events")
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Sse("get-last-payment-status")
    @Header("Cache-Control", "no-cache")
    @Header("Connection", "keep-alive")
    //@UseGuards(AuthGuard)
    async getLastPaymentStatus(@Req() req: Request) {
        req.setTimeout(80000);
        return this.eventsService.getLastPaymentStatus();
    }
}
