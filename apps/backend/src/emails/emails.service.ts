import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { sendAccountVerificationEmailDTO } from "./dtos/send-account-verification-email.dto";
import { validate } from "class-validator";
import { EmailClient, KnownEmailSendStatus } from "@azure/communication-email";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class EmailsService {
    constructor(
        private config: ConfigService,
        private prisma: PrismaService,
        private jwt: JwtService,
    ) {}

    private logger = new Logger();

    private connString = this.config.getOrThrow("AZURE_EMAIL_CONN_STRING");
    private emailClient = new EmailClient("endpoint=https://comservice-athenas-dev.unitedstates.communication.azure.com/;accesskey=7RCbcb2MOSdZFN0qMHPvHF7oMYj9jVVxWSFikSK5EAsJ9Pv6aYiHJQQJ99AKACULyCpT4xQSAAAAAZCSaKcN");

    async sendAccountVerificationEmail(
        emailDTO: sendAccountVerificationEmailDTO,
    ) {
        const errors = await validate(emailDTO);

        if (errors.length > 0) {
            throw new Error(`Validation failed! ${errors}`);
        }

        const message = {
            senderAddress:
                "<DoNotReply@9bdc846e-c9d5-4b90-a327-29924bdc6855.azurecomm.net>",
            content: {
                subject: `Por favor verifique sua conta na RN Distribuidora`,
                plainText: "Verifique seu email",
                html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><!--$-->
<html dir="ltr" lang="en">

  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Verifique sua conta para começar a fazer compras!<div> ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌</div>
  </div>

  <body style="background-color:rgb(255,255,255);margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;font-family:ui-sans-serif, system-ui, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:rgb(228,228,231);height:5rem;width:100%">
      <tbody>
        <tr>
          <td>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="width:100%;display:flex;justify-content:center;align-items:center;max-width:37.5em">
              <tbody>
                <tr style="width:100%">
                  <td><img src="https://cdn.discordapp.com/attachments/1277016444269367369/1304160438430335027/rn-logo.png?ex=672e618e&is=672d100e&hm=229ad4525976efdf55e6e89d431919b293409f17fabbc916e669a00dcf03cef1&" style="width:120px;display:block;outline:none;border:none;text-decoration:none" /></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-top:2rem;padding-left:2rem;padding-right:2rem">
              <tbody>
                <tr>
                  <td>
                    <p style="font-size:1.25rem;line-height:1.75rem;color:rgb(17,24,39);margin-top:1rem;margin:16px 0">Olá, <!-- -->${emailDTO.name}</p>
                    <p style="color:rgb(31,41,55);margin-top:0.5rem;font-size:14px;line-height:24px;margin:16px 0">Bem-vindo(a) à <!-- -->RN Distribuidora<!-- -->! Estamos felizes em tê-lo(a) conosco.</p>
                    <p style="color:rgb(31,41,55);margin-top:0.5rem;font-size:14px;line-height:24px;margin:16px 0">Para concluir seu cadastro e aproveitar todas as vantagens de nossa plataforma, é necessário verificar sua conta. Basta clicar no botão abaixo:</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:2rem;padding-right:2rem;margin-top:2rem;width:100%;display:flex;align-items:center;justify-content:center">
              <tbody>
                <tr>
                  <td><a href="${emailDTO.link}" style="cursor:pointer;background-color:rgb(217,119,6);padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;border-radius:0.25rem;color:rgb(255,255,255);font-weight:600;text-decoration-line:none" target="_blank">Verificar Conta</a></td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:2rem;padding-right:2rem;margin-top:2rem">
              <tbody>
                <tr>
                  <td>
                    <p style="font-size:0.875rem;line-height:1.25rem;margin:16px 0">Caso o botão não funcione, você também pode copiar e colar o link abaixo em seu navegador:<!-- --> <a href="${emailDTO.link}" style="color:#067df7;text-decoration-line:none" target="_blank">Link de Verificação</a></p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:2rem;padding-right:2rem;color:rgb(113,113,122)">
              <tbody>
                <tr>
                  <td>
                    <p style="font-size:0.75rem;line-height:1rem;text-align:center;margin:16px 0">Se você não criou uma conta em nossa plataforma, por favor, ignore este e-mail.</p>
                    <p style="font-size:0.75rem;line-height:1rem;color:rgb(107,114,128);margin-top:1rem;margin:16px 0">Se tiver alguma dúvida, entre em contato com nossa equipe de suporte através do e-mail<!-- -->
                    <p style="color:rgb(59,130,246);font-size:14px;line-height:24px;margin:16px 0">suport@rndistrubidora.com</p>.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:2rem;padding-right:2rem">
              <tbody>
                <tr>
                  <td>
                    <p style="font-size:0.875rem;line-height:1.25rem;color:rgb(75,85,99);margin:16px 0">Atenciosamente, <span style="font-weight:600">Equipe <!-- -->RN Distribuidora</span></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>

</html><!--/$-->`,
            },
            recipients: {
                to: [
                    {
                        address: `<${emailDTO.to}>`,
                        displayName: "",
                    },
                ],
            },
        };

        const poller = await this.emailClient.beginSend(message);

        if (!poller.getOperationState().isStarted) {
            throw "Poller was not started.";
        }

        let timeElapsed = 0;
        while (!poller.isDone()) {
            poller.poll();
            console.log("Email send polling in progress");

            await new Promise((resolve) => setTimeout(resolve, 10 * 1000));
            timeElapsed += 10;

            if (timeElapsed > 18 * 10) {
                throw "Polling timed out.";
            }
        }

        if (poller.getResult().status === KnownEmailSendStatus.Succeeded) {
            console.log(
                `Successfully sent the email (operation id: ${poller.getResult().id})`,
            );
        } else {
            throw poller.getResult().error;
        }
    }

    async resendAccountVerificationEmail(
        emailDTO: sendAccountVerificationEmailDTO,
    ) {
        console.log(emailDTO);
        console.log("KKKKKK");
        const message = {
            senderAddress:
                "<DoNotReply@9bdc846e-c9d5-4b90-a327-29924bdc6855.azurecomm.net>",
            content: {
                subject: `Por favor verifique sua conta na RN Distribuidora`,
                plainText: "Verifique seu email",
                html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><!--$-->
                    <html dir="ltr" lang="en">

                    <head>
                        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
                        <meta name="x-apple-disable-message-reformatting" />
                    </head>
                    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Verifique sua conta para começar a fazer compras!<div> ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌</div>
                    </div>

                    <body style="background-color:rgb(255,255,255);margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;font-family:ui-sans-serif, system-ui, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;">
                        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:rgb(228,228,231);height:5rem;width:100%">
                        <tbody>
                            <tr>
                            <td>
                                <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="width:100%;display:flex;justify-content:center;align-items:center;max-width:37.5em">
                                <tbody>
                                    <tr style="width:100%">
                                    <td><img src="https://cdn.discordapp.com/attachments/1277016444269367369/1304160438430335027/rn-logo.png?ex=672e618e&is=672d100e&hm=229ad4525976efdf55e6e89d431919b293409f17fabbc916e669a00dcf03cef1&" style="width:120px;display:block;outline:none;border:none;text-decoration:none" /></td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em">
                        <tbody>
                            <tr style="width:100%">
                            <td>
                                <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-top:2rem;padding-left:2rem;padding-right:2rem">
                                <tbody>
                                    <tr>
                                    <td>
                                        <p style="font-size:1.25rem;line-height:1.75rem;color:rgb(17,24,39);margin-top:1rem;margin:16px 0">Olá, <!-- -->${emailDTO.name}</p>
                                        <p style="color:rgb(31,41,55);margin-top:0.5rem;font-size:14px;line-height:24px;margin:16px 0">Bem-vindo(a) à <!-- -->RN Distribuidora<!-- -->! Estamos felizes em tê-lo(a) conosco.</p>
                                        <p style="color:rgb(31,41,55);margin-top:0.5rem;font-size:14px;line-height:24px;margin:16px 0">Para concluir seu cadastro e aproveitar todas as vantagens de nossa plataforma, é necessário verificar sua conta. Basta clicar no botão abaixo:</p>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                                <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:2rem;padding-right:2rem;margin-top:2rem;width:100%;display:flex;align-items:center;justify-content:center">
                                <tbody>
                                    <tr>
                                    <td><a href="${emailDTO.link}" style="cursor:pointer;background-color:rgb(217,119,6);padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;border-radius:0.25rem;color:rgb(255,255,255);font-weight:600;text-decoration-line:none" target="_blank">Verificar Conta</a></td>
                                    </tr>
                                </tbody>
                                </table>
                                <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:2rem;padding-right:2rem;margin-top:2rem">
                                <tbody>
                                    <tr>
                                    <td>
                                        <p style="font-size:0.875rem;line-height:1.25rem;margin:16px 0">Caso o botão não funcione, você também pode copiar e colar o link abaixo em seu navegador:<!-- --> <a href="${emailDTO.link}" style="color:#067df7;text-decoration-line:none" target="_blank">Link de Verificação</a></p>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                                <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:2rem;padding-right:2rem;color:rgb(113,113,122)">
                                <tbody>
                                    <tr>
                                    <td>
                                        <p style="font-size:0.75rem;line-height:1rem;text-align:center;margin:16px 0">Se você não criou uma conta em nossa plataforma, por favor, ignore este e-mail.</p>
                                        <p style="font-size:0.75rem;line-height:1rem;color:rgb(107,114,128);margin-top:1rem;margin:16px 0">Se tiver alguma dúvida, entre em contato com nossa equipe de suporte através do e-mail<!-- -->
                                        <p style="color:rgb(59,130,246);font-size:14px;line-height:24px;margin:16px 0">suport@rndistrubidora.com</p>.</p>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                                <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-left:2rem;padding-right:2rem">
                                <tbody>
                                    <tr>
                                    <td>
                                        <p style="font-size:0.875rem;line-height:1.25rem;color:rgb(75,85,99);margin:16px 0">Atenciosamente, <span style="font-weight:600">Equipe <!-- -->RN Distribuidora</span></p>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </body>

                    </html><!--/$-->`,
            },
            recipients: {
                to: [
                    {
                        address: `<${emailDTO.to}>`,
                        displayName: "",
                    },
                ],
            },
        };
        console.log("KKKKKK");
        console.log(this.emailClient);
        const poller = await this.emailClient.beginSend(message);
        console.log("Poller object:", poller);
        console.log("Initial poller state:", poller.getOperationState());
        console.log(poller.getOperationState().isCancelled);
        console.log("KKKKKK");
        if (!poller.getOperationState().isStarted) {
            throw "Poller was not started.";
        }
        console.log("KKKKKK");

        let timeElapsed = 0;
        while (!poller.isDone()) {
            poller.poll();
            console.log("Email send polling in progress");
            await new Promise((resolve) => setTimeout(resolve, 10 * 1000));
            timeElapsed += 10;

            if (timeElapsed > 18 * 10) {
                throw "Polling timed out.";
            }
        }

        if (poller.getResult().status === KnownEmailSendStatus.Succeeded) {
            console.log(
                `Successfully sent the email (operation id: ${poller.getResult().id})`,
            );
        } else {
            throw poller.getResult().error;
        }
    }
}
