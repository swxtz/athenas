"use client";

import Image from "next/image";
import logo from "@/images/logo-rn.png";
import { MenuIcon } from "lucide-react";
import {
  Dialog,
  DialogPortal,
  DialogTrigger,
  DialogContent
} from "@radix-ui/react-dialog";
import { DialogOverlay } from "../ui/dialog";

export function Navbar() {
  return (
    <nav className="py-4 bg-amber-600 flex justify-between items-center shadow">
      <div className="px-6 lg:px-24 w-full flex items-center justify-between">
        <Image
          src={logo}
          alt="logo RN Distribuidora"
          quality={100}
          className="w-24 md:w-28"
        />

        <Dialog>
          <DialogTrigger asChild>
            <button type="button">
              <MenuIcon className="text-slate-50 size-12" />
            </button>
          </DialogTrigger>

          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-white/40" />
            <DialogContent className="fixed p-10 m-0 right-0 top-0 bottom-0 h-screen w-3/4 md:w-1/2 lg:w-1/5 bg-slate-200 border-l border-zinc-900 container data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-right-1/2">
              <p>conteudo...</p>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
    </nav>
  );
}
