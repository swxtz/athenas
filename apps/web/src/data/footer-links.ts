import type { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

interface Links {
  href: string;
  title: string;
}

export const footerLinks: Links[] = [
  { href: "/", title: "Home" },
  { href: "/sobre-nos", title: "Sobre nós" },
  { href: "/contato", title: "Contato" },
];

export const legalInfosFooter: Links[] = [
  { href: "/politica-de-privacidade", title: "Política de privacidade" },
  { href: "/termos-de-uso", title: "Termos de uso" },
];

