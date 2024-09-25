import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo-rn.png";
import type { ReactNode } from "react";

import { cuid } from "@/utils/cuid";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { footerLinks, legalInfosFooter } from "@/data/footer-links";
import type { SocialMedias } from "@/types/social-medias";


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

export function MobileFooter() {
  return (
    <div className="flex flex-col justify-between items-center shadow-md">
      <div className="lg:px-24 py-8 bg-white container w-full flex flex-col gap-8 items-center justify-between">
        <Link href="/" className="mx-auto">
          <Image
            src={logo}
            alt="logo RN Distribuidora"
            quality={100}
            className="w-[100px] md:w-20"
          />
        </Link>

        <div className="flex flex-col text-brown-500 items-center gap-4">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 text-brown-500">
          {socialMedias.map((socialMedia) => (
            <a
              key={socialMedia.href}
              href={socialMedia.href}
              target="_blank"
              rel="noreferrer"
            >
              {socialMedia.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="flex bg-[#202020] items-center gap-4 w-full container">
        <div className="mx-auto mt-4 mb-8 flex flex-col gap-4 text-center text-sm text-white">
          <p>© {new Date().getFullYear()} LTDA. RN Distribuidora</p>

          <div className="flex flex-col gap-1">
            {legalInfosFooter.map((legalInfo) => (
              <Link key={cuid()} href={legalInfo.href}>
                {legalInfo.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
