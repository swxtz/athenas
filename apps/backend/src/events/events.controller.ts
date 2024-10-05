import { Controller, Header, Req, Res, Sse, UseGuards } from "@nestjs/common";
import { EventsService } from "./events.service";
import { Request, Response } from "express";
import { AuthGuard } from "src/auth/auth.guard";
import { defer, map, repeat, tap } from "rxjs";
import { UtilsService } from "src/utils/utils.service";

@Controller("events")
export class EventsController {
    constructor(
        private readonly eventsService: EventsService,
        private utilsService: UtilsService,
    ) {}

    @Sse("get-last-payment-status")
    @Header("Cache-Control", "no-cache")
    @Header("Connection", "keep-alive")
    //@UseGuards(AuthGuard)
    async getLastPaymentStatus(@Req() req: Request, @Res() res: Response) {
        req.setTimeout(80000);
        return defer(() => this.eventsService.getLastPaymentStatus()).pipe(
            repeat({
                delay: 5000,
            }),
            tap((payment) => {
                if (payment.status === "DONE" || payment.status === "FAILED") {
                    setTimeout(() => {
                        res.end();
                    }, 1000);
                }
            }),
            map((payment) => ({
                id: this.utilsService.createCUID(),
                type: "payment-status",
                data: payment,
            })),
        );
    }
}
