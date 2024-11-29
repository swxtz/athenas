import { Controller } from "@nestjs/common";
import { HealthcheckService } from "./healthcheck.service";

@Controller("healthcheck")
export class HealthcheckController {
    constructor(private readonly healthcheckService: HealthcheckService) {}
}
