import { Body, Controller, Headers, Post, UseGuards } from "@nestjs/common";
import { FreightService } from "./freight.service";
import { ApiTags } from "@nestjs/swagger";
import { calculateFreightUserDTO } from "./dtos/calculate-freight-dto";
import { AuthGuard } from "src/auth/auth.guard";

@ApiTags("freight")
@Controller("freight")
export class FreightController {
    constructor(private readonly freightService: FreightService) {}

    @Post("calculate-freight")
    @UseGuards(AuthGuard)
    async calculateFreight(
        @Body() body: calculateFreightUserDTO,
        @Headers("authorization") token: string,
    ) {
        return this.freightService.calculateFreight(body, token);
    }
}
