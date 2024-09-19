import { Body, Controller, Headers, Post } from "@nestjs/common";
import { BuysService } from "./buys.service";
import { CreateBuyOrderDTO } from "./dtos/create-buy-order.dto";

@Controller("buys")
export class BuysController {
    constructor(private readonly buysService: BuysService) {}

    @Post("create-buy-order")
    async createBuyOrder(
        @Body() body: CreateBuyOrderDTO,
        @Headers("authorization") token: string,
    ) {
        return this.buysService.createBuyOrder(token, body);
    }
}
