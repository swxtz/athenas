import { Injectable } from "@nestjs/common";
import { UtilsService } from "src/utils/utils.service";

@Injectable()
export class EventsService {
    constructor(private utils: UtilsService) {}

    async getLastPaymentStatus() {
        return {
            status: "PENDING",
            amount: 100,
        };
    }

    async createPaymentStatus() {}
}
