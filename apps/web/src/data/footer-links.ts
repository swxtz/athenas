import type { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

interface FooterSection {
  title: string;
  links: Links[];
}

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

const homeLinks: Links[] = [
  { href: "/produtos", title: "Produtos" },
  { href: "/servicos", title: "Serviços" },
  { href: "/blog", title: "Blog" },
];

export const footerSections: FooterSection[] = [
  {
    title: "Home",
    links: homeLinks
  }, 
  {
    title: "Links",
    links: footerLinks,
  },
  {
    title: "Informações legais",
    links: legalInfosFooter,
  },
];

