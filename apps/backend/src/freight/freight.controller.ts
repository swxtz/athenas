import { Controller, Headers, Post } from "@nestjs/common";
import { FreightService } from "./freight.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("freight")
@Controller("freight")
export class FreightController {
    constructor(private readonly freightService: FreightService) {}

    @Post("calculate-freight")
    async calculateFreight(@Headers("authorization") token: string) {
        return this.freightService.calculateFreight(token);
    }
}
