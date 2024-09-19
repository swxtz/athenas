import { Controller } from "@nestjs/common";
import { BuysService } from "./buys.service";

@Controller("buys")
export class BuysController {
    constructor(private readonly buysService: BuysService) {}
}
