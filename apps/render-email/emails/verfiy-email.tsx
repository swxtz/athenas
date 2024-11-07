import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface VerifyEmailProps extends Colors {
  previewText: string;
  name: string;
  ecommerceName: string;
  linkCTA: string;
  link: string;
  supportEmail: string;
}

interface Colors {
  primaryColor: string;
  actionColor: string;
}

VerifyEmail.PreviewProps = {
  //colors
  primaryColor: "#e4e4e7",
  actionColor: "#d97706",

  // texts
  previewText: "Verifique sua conta para começar a fazer compras!",
  name: "John Doe",
  ecommerceName: "RN Distribuidora",
  linkCTA: "Verificar Conta",
  link: "http://localhost:3000/",
  supportEmail: "suport@rndistrubidora.com",
} as VerifyEmailProps;

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function VerifyEmail({
  // colors
  primaryColor,
  actionColor,

  // texts
  previewText,
  name,
  ecommerceName,
  linkCTA,
  link,
  supportEmail,
}: VerifyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Section className={`bg-[${primaryColor}] h-20 w-full`}>
            <Container className="w-full flex justify-center items-center ">
              <Img
                src={`${baseUrl}/static/rn-logo.svg`}
                className="w-[120px]"
              />
            </Container>
          </Section>
          <Container>
            <Section className="mt-8 px-8">
              <Text className="text-xl text-gray-900 mt-4">Olá {name}</Text>
              <Text className="text-gray-800 mt-2">
                Bem-vindo(a) à {ecommerceName}! Estamos felizes em tê-lo(a)
                conosco.
              </Text>
              <Text className="text-gray-800 mt-2">
                Para concluir seu cadastro e aproveitar todas as vantagens de
                nossa plataforma, é necessário verificar sua conta. Basta clicar
                no botão abaixo:
              </Text>
            </Section>
            <Section className="px-8 mt-8 w-full flex  items-center justify-center">
              <Link
                className={`cursor-pointer bg-[${actionColor}] px-4 py-3 rounded text-white font-semibold`}
                href={link}
              >
                {linkCTA}
              </Link>
            </Section>
            <Section className="px-8 mt-8">
              <Text className="text-sm">
                Caso o botão não funcione, você também pode copiar e colar o
                link abaixo em seu navegador:{" "}
                <Link href={link}>Link de Verificação</Link>
              </Text>
            </Section>
            <Section className="px-8 text-zinc-500">
              <Text className="text-xs text-center">
                Se você não criou uma conta em nossa plataforma, por favor,
                ignore este e-mail.
              </Text>
              <Text className="text-xs text-gray-500 mt-4">
                Se tiver alguma dúvida, entre em contato com nossa equipe de
                suporte através do e-mail{" "}
                <Text className="text-blue-500">{supportEmail}</Text>.
              </Text>
              
            </Section>
            <Section className="px-8">
            <Text className="text-sm text-gray-600">
                Atenciosamente, <span className="font-semibold">Equipe {ecommerceName}</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
