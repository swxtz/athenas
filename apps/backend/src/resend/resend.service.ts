import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Resend } from "resend";

@Injectable()
export class ResendService {
    constructor(private configService: ConfigService) {}

    private logger = new Logger(ResendService.name);

    private resend = new Resend(
        this.configService.getOrThrow("RESEND_EMAIL_API_KEY"),
    );

    async sendVerifyEmailToken(token: string, to: string) {
        const from = "onboarding@resend.dev";
        const { error } = await this.resend.emails.send({
            from,
            to: [to],
            subject: "RN Distribuidora | Verificação de email",
            html: `<a href="http://localhost:3000/verify-email?token=${token}">Clique aqui para verificar seu email</a>`,
        });

        if (error) {
            this.logger.error(error);
        }
    }
}
