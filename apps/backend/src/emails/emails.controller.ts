import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { sendAccountVerificationEmailDTO } from "./dtos/send-account-verification-email.dto";
import { EmailsService } from "./emails.service";

@ApiTags("emails")
@Controller("emails")
export class EmailsController {
    constructor(private readonly EmailsService: EmailsService) {}
    @Post("send-authentication-email")
    async sendAuthenticationEmail(
        @Body() body: sendAccountVerificationEmailDTO,
    ) {
        return this.EmailsService.sendAccountVerificationEmail(body);
    }

    @Post("resend-authentication-email")
    async resendAuthenticationEmail(
        @Body() body: sendAccountVerificationEmailDTO,
    ) {
        return this.EmailsService.resendAccountVerificationEmail(body);
    }
}
