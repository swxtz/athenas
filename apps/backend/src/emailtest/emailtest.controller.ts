// src/email/email.controller.ts
import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { EmailTestService } from "./emailtest.service";
@ApiTags("email-test")
@Controller("email")
export class EmailTestController {
    constructor(private readonly emailService: EmailTestService) {}

    @Post("send")
    async sendEmail() {
        return this.emailService.sendEmail();
    }
}
