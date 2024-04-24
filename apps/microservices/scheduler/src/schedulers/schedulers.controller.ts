import { Controller } from "@nestjs/common";
import { SchedulersService } from "./schedulers.service";

@Controller("schedulers")
export class SchedulersController {
  constructor(private readonly schedulersService: SchedulersService) {}
}
