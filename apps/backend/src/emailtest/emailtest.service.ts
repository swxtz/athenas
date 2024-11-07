import { Injectable } from "@nestjs/common";
import { EmailClient, KnownEmailSendStatus } from "@azure/communication-email";

@Injectable()
export class EmailTestService {
    private emailClient: EmailClient;

    constructor() {}

    async sendEmail() {
        const emailClient = new EmailClient("YOUR_CONNECTION");
        const message = {
            senderAddress:
                "<DoNotReply@9bdc846e-c9d5-4b90-a327-29924bdc6855.azurecomm.net>",
            content: {
                subject: "Welcome to Azure Communication Services Email",
                plainText:
                    "This email message is sent from Azure Communication Services Email using the JavaScript SDK.",
            },
            recipients: {
                to: [
                    {
                        address: "<email do usuario>",
                        displayName: "Customer Name",
                    },
                ],
            },
        };

        const poller = await emailClient.beginSend(message);

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
    catch(e) {
        console.log(e);
    }
}
