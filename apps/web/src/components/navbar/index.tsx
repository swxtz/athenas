"use client";

import Image from "next/image";
import logo from "@/images/logo-rn.png";
import { Home, MenuIcon, Phone, ShoppingBasket } from "lucide-react";
import { PiShoppingCart } from "react-icons/pi";
import {
  Dialog,
  DialogPortal,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
} from "@radix-ui/react-dialog";
import { Avatar } from "../avatar";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { ActiveLink, ActiveLinkProps } from "../active-link";
import { useState } from "react";
import { Searchbar } from "@/app/components/searchbar";
import { MobileMenu } from "../menu/mobile-menu";
import { DesktopMenu } from "../menu/desktop-menu";

const links: ActiveLinkProps[] = [
  { href: "/", children: "Home", icon: <Home /> },
  { href: "/produtos", children: "Produtos", icon: <ShoppingBasket /> },
  { href: "/contato", children: "Contato", icon: <Phone /> },
];

export function Navbar() {
  
  return (
    <nav className="py-3 bg-yellow-300 flex justify-between items-center shadow-md">
      <div className="px-6 lg:px-24 w-full flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="logo RN Distribuidora"
            quality={100}
            className="w-10 md:w-20"
          />
        </Link>

        <Searchbar />

        <div className="flex md:hidden">
          <MobileMenu />
        </div>

        <div className="hidden md:flex">
          <DesktopMenu />
        </div>
      </div>
    </nav>
  );
}
