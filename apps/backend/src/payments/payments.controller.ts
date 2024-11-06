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

@Controller("payments")
@ApiTags("Payments")
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

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
