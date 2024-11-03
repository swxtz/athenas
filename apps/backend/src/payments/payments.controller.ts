import {
    Body,
    Controller,
    Headers,
    Post,
    UseGuards,
    ValidationPipe,
} from "@nestjs/common";
import { PaymentsService } from "./payments.service";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/auth.guard";
import { CreateBuyOrderPixDTO } from "./dtos/create-buy-order-pix.dto";

@Controller("payments")
@ApiTags("Payments")
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @Post("create-buy-order/pix")
    @UseGuards(AuthGuard)
    async createBuyOrderPix(
        @Body(new ValidationPipe()) body: CreateBuyOrderPixDTO,
        @Headers("authorization") token: string,
    ) {
        return this.paymentsService.createBuyOrderPix(token, body);
    }
}
