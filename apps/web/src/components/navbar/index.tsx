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
import type { ActiveLinkProps } from "../active-link";
import { useState } from "react";
import { Searchbar } from "@/app/components/searchbar";
import { MobileMenu } from "../menu/mobile-menu";
import { DesktopMenu } from "../menu/desktop-menu";
import { Categories } from "./categories";

const links: ActiveLinkProps[] = [
  { href: "/", children: "Home", icon: <Home /> },
  { href: "/produtos", children: "Produtos", icon: <ShoppingBasket /> },
  { href: "/contato", children: "Contato", icon: <Phone /> },
];

export function Navbar() {
  return (
    <nav className="py-3 bg-[#F2F2F2] items-center border-b-1 border-bg-zinc-800 fixed top-0 left-0 w-full">
      <div className="flex justify-between">
        <div className="px-6 lg:px-24 mt-auto md:my-4 w-full flex items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              alt="logo RN Distribuidora"
              quality={100}
              className="w-10 md:w-24"
            />
          </Link>

          <Searchbar />

          <div className="flex md:hidden">
            <MobileMenu />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <DesktopMenu />
            <Link href="/carrinho">
              <ShoppingBasket size={38} className="text-white" />
            </Link>
          </div>
        </div>
      </div>

      <Categories scrollY={0} />
    </nav>
  );
}
