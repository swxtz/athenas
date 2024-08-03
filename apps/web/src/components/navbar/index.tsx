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

const links: ActiveLinkProps[] = [
  { href: "/", children: "Home", icon: <Home /> },
  { href: "/produtos", children: "Produtos", icon: <ShoppingBasket /> },
  { href: "/contato", children: "Contato", icon: <Phone /> },
];

export function Navbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function closeDialog() {
    setIsDialogOpen(false);
  }

  return (
    <nav className="py-4 bg-amber-800 flex justify-between items-center shadow">
      <div className="px-6 lg:px-24 w-full flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="logo RN Distribuidora"
            quality={100}
            className="w-20 md:w-28"
          />
        </Link>

        <Searchbar />

        <div className="flex justify-center gap-4">
          <button>
            <PiShoppingCart className="text-slate-50 size-9" />
          </button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button type="button">
                <MenuIcon className="text-slate-50 size-9" />
              </button>
            </DialogTrigger>

            <DialogPortal>
              <DialogOverlay className="fixed inset-0 bg-white/5" />
              <DialogContent className="fixed p-10 m-0 right-0 top-0 bottom-0 h-screen w-3/4 md:w-1/2 lg:w-[350px] bg-slate-200 border-l border-zinc-900 container data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-right-1/2">
                <div className="">
                  <div className="flex w-full items-center gap-4">
                    <Avatar />
                    <div className="">
                      <span>
                        Faça <span className="font-semibold">login</span> ou{" "}
                        <span className="font-semibold">crie</span> sua conta
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center mt-8 flex-col gap-2">
                    <Link
                      onClick={closeDialog}
                      href="/auth/login"
                      className="bg-zinc-900 text-zinc-50 w-full md:text-base flex items-center justify-center rounded py-1 text-sm hover:bg-zinc-950 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      onClick={closeDialog}
                      href="/auth/register"
                      className="bg-zinc-900 text-zinc-50 w-full md:text-base flex items-center justify-center rounded py-1 text-sm hover:bg-zinc-950 transition-colors"
                    >
                      Crie sua conta
                    </Link>
                  </div>

                  <Separator className="w-full bg-zinc-950/50 mx-auto mt-4" />

                  <div className="flex flex-col gap-1 mt-4">
                    {links.map((link) => (
                      <ActiveLink
                        key={link.href}
                        {...link}
                        onClick={closeDialog}
                      />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </DialogPortal>
          </Dialog>
        </div>
      </div>
    </nav>
  );
}
