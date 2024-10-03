"use client";

import Image from "next/image";
import logo from "@/images/logo-rn.png";
import { Home, MenuIcon, Phone, ShoppingBasket } from "lucide-react";
import { PiShoppingCart, } from "react-icons/pi";
import { TbShoppingBagHeart } from "react-icons/tb";

import {
  Dialog,
  DialogPortal,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
} from "@radix-ui/react-dialog";
import { Avatar } from "../avatar";
import Link from "next/link";
import { LuUser } from "react-icons/lu";
import { Separator } from "../ui/separator";
import type { ActiveLinkProps } from "../active-link";
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
    <nav className="bg-gray-700 w-full h-10 md:h-24 flex ">
      <div className=" flex w-full items-center">
      
        {/* <div className="">
          <Searchbar/>
        </div> */}

        <div className="flex items-center md:hidden ml-4">
          <MobileMenu />
          <div className="ml-2">
            <LuUser size={28}/>
          </div>
        </div>

        <Link href="/">
          <Image
            src={logo}
            alt="logo RN Distribuidora"
            quality={100}
            className="w-20 mr-10 md:w-30"
          />
        </Link>
        {/* logo */}

        <TbShoppingBagHeart size={28} className="mr-4" /> 
        {/* carrinho */}

        <div className="hidden md:flex  items-center gap-8">
          <DesktopMenu />
          {/* <Link href="/carrinho">
            <ShoppingBasket size={38} className="text-white"/>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
