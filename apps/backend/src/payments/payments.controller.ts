import {
    Body,
    Controller,
    Headers,
    HttpCode,
    Post,
    UseGuards,
    ValidationPipe,
} from "@nestjs/common";
import { PaymentsService } from "./payments.service";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/auth.guard";
import { CreateBuyOrderPixDTO } from "./dtos/create-buy-order-pix.dto";
import { PayPixOrderDTO } from "./dtos/pay-pix-order.dto";
import { GetOrderInfosDTO } from "./dtos/get-order-infos.dto";

@Controller("payments")
@ApiTags("Payments")
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @Post("/orders/get-order-info")
    async getOrderInfos(@Body(new ValidationPipe()) body: GetOrderInfosDTO) {
        return this.paymentsService.getOrderInfos(body);
    }

    @Post("create/buy-order/pix")
    @UseGuards(AuthGuard)
    async createBuyOrderPix(
        @Body(new ValidationPipe()) body: CreateBuyOrderPixDTO,
        @Headers("authorization") token: string,
    ) {
        return this.paymentsService.createBuyOrderPix(token, body);
    }

    @Post("pay/order/pix")
    @UseGuards(AuthGuard)
    @HttpCode(200)
    async payOrderPix(
        @Body(new ValidationPipe()) body: PayPixOrderDTO,
        @Headers("authorization") token: string,
    ) {
        console.log("buceta");
        return this.paymentsService.payOrderPix(body, token);
    }
}
