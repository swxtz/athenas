import {
    Body,
    Controller,
    Headers,
    Post,
    UseGuards,
    ValidationPipe,
} from "@nestjs/common";
import { BuysService } from "./buys.service";
import { CreateBuyOrderPixDTO } from "./dtos/create-buy-order-pix.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { ApiTags } from "@nestjs/swagger";

@Controller("buys")
@ApiTags("Buys")
export class BuysController {
    constructor(private readonly buysService: BuysService) {}

    @Post("create-buy-order/pix")
    @UseGuards(AuthGuard)
    async createBuyOrder(
        @Body(new ValidationPipe()) body: CreateBuyOrderPixDTO,
        @Headers("authorization") token: string,
    ) {
        return this.buysService.createBuyOrderPix(token, body);
    }
}
