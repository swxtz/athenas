package trigger

import (
	"fmt"
	"github.com/resend/resend-go/v2"
	"github.com/swxtz/athenas/apps/microservices/email-trigger/internal/env"
)

func SendSimpleEmail() {

	apiKey := env.GetEnv("RESEND_API_KEY")

	client := resend.NewClient(apiKey)

	params := &resend.SendEmailRequest{
		From:    "Acme <onboarding@resend.dev>",
		To:      []string{"delivered@resend.dev"},
		Html:    "<strong>hello world</strong>",
		Subject: "Hello from Golang",
		Cc:      []string{"cc@example.com"},
		Bcc:     []string{"bcc@example.com"},
		ReplyTo: "replyto@example.com",
	}

	sent, err := client.Emails.Send(params)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	fmt.Println(sent.Id)
}
