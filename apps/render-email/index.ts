
import { render } from "@react-email/render";
import VerifyEmail from "./emails/verfiy-email";

const html = await render(VerifyEmail({
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
  }) , {
  pretty: true,
});

console.log(html);
