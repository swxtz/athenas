import { Injectable, MessageEvent } from "@nestjs/common";
import { interval, map, Observable } from "rxjs";
import { UtilsService } from "src/utils/utils.service";

@Injectable()
export class EventsService {
    constructor(private utils: UtilsService) {}

    async getLastPaymentStatus(): Promise<Observable<MessageEvent>> {
        return interval(100).pipe(
            map(() => ({
                //id: this.utils.createCUID(),
                data: { message: `${this.utils.createCUID()} + buceta` },
            })),
        );
    }
}
