import { footerSections } from "@/data/footer-links";
import logo from "@/images/logo-rn.png";
import type { SocialMedias } from "@/types/social-medias";
import { cuid } from "@/utils/cuid";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Separator } from "../ui/separator";

export const socialMedias: SocialMedias[] = [
  {
    href: "https://www.facebook.com/rndistribuidora",
    title: "Facebook",
    icon: <FaFacebook size={28} />,
  },
  {
    href: "https://www.instagram.com/rndistribuidora",
    title: "Instagram",
    icon: <FaInstagram size={28} />,
  },
  {
    href: "https://www.whatsapp.com/rndistribuidora",
    title: "WhatsApp",
    icon: <FaWhatsapp size={28} />,
  },
];

export function DesktopFooter() {
  return (
    <div className="flex flex-col justify-between items-center shadow-md w-screen">
      <div className="bg-white py-12 w-full">
        <div className="container flex justify-between">
          <div className="flex flex-row">
            <Link href="/">
              <Image
                src={logo}
                alt="logo RN Distribuidora"
                quality={100}
                className="w-[160px]"
              />
            </Link>
            <div className="my-auto flex flex-col gap-2 text-brown-500">
              <div className="flex flex-row items-center gap-1 font-semibold">
                <h2 className="font-semibold text-2xl">RN Distrubuidora</h2>
                <span>&copy;</span>
              </div>
              <h3 className="font-medium text-sm">Desde, 2007</h3>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <div className="flex flex-col gap-1 text-brown-500 text-sm">
                {section.links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Redes sociais</h3>
            <div className="flex items-center gap-4">
              {socialMedias.map((socialMedia) => (
                <Link
                  key={cuid()}
                  href={socialMedia.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brown-500"
                >
                  {socialMedia.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className="w-full bg-[#F97316] h-0" />
      <div className="bg-[#202020] w-full">
        <div className="container flex justify-between items-center py-4 text-white text-sm">
          <p className="font-medium">© {new Date().getFullYear()} LTDA. RN Distribuidora</p>
          <div className="flex flex-col gap-1">
            <Link href="/politica-de-privacidade">Política de privacidade</Link>
            <Link href="/termos-de-uso">Termos de uso</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
