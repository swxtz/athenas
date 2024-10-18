import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createTransport, Transporter } from "nodemailer";
import { sendAccountVerificationEmailDTO } from "./dtos/send-account-verification-email.dto";
import { render } from "@react-email/render";
import { validate } from "class-validator";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class EmailsService {
    constructor(
        private config: ConfigService,
        private mailer: MailerService,
    ) {
        this.transporter = createTransport({
            host: this.config.getOrThrow("SMTP_HOST"),
            port: this.config.getOrThrow("SMTP_PORT"),
            secure: true,
            auth: {
                user: this.config.getOrThrow("SMTP_USERNAME"),
                pass: this.config.getOrThrow("SMTP_PASSWORD"),
            },
        });
    }

    private transporter: Transporter;

    private generateEmail = (template) => {
        return render(template);
    };

    async sendAccountVerificationEmail(
        emailDTO: sendAccountVerificationEmailDTO,
    ) {
        const errors = await validate(emailDTO);

        if (errors.length > 0) {
            throw new Error(`Validation failed! ${errors}`);
        }

        await this.mailer.sendMail({
            to: emailDTO.to,
            from: emailDTO.from,
            subject: emailDTO.subject,
            template: "verify-email",
            context: {
                //colors
                primaryColor: "#e4e4e7",
                actionColor: "#d97706",

                // texts
                previewText:
                    "Verifique sua conta para começar a fazer compras!",
                name: "John Doe",
                ecommerceName: "RN Distribuidora",
                linkCTA: "Verificar Conta",
                link: "http://localhost:3000/",
                supportEmail: "suport@rndistrubidora.com",
            },
        });
    }
}
