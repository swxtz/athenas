import { cookies } from "@/lib/cookies";
import { uuid } from "@/lib/uuid";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { AvatarNavbar } from "../avatar-navbar";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Separator } from "../ui/separator";
import { signOut } from "@/contexts/auth-context";
import { AvatarPopover } from "../avatar-popover";

interface LinkType {
  to: string;
  label: string;
}

const links: LinkType[] = [
  {
    label: "Proximos Eventos",
    to: "/top-events"
  },
  {
    label: "Generos",
    to: "/events-genders"
  },
  {
    label: "Artistas",
    to: "/artists"
  },
  {
    label: "Sobre",
    to: "/about"
  }, 
  {
    label: "Minhas Compras",
    to: "/myshop"
  
  }
];

export function Navbar() {
  const token = cookies.get("user-jwt");

  return (
    <motion.nav className="bg-zinc-900/50" initial={{ y: -200 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className="hidden md:flex">
        <div className="container py-7 flex flex-row items-center justify-between">
          <div className="">
            <Link to="/" className="font-inter font-semibold text-4xl hover:text-zinc-150 hover:text-zinc-400 transition-colors">invite.me</Link>
          </div>

          <div className="flex flex-row gap-8">
            {links.map((link) => (
              <Link key={uuid()} to={link.to} className="font-medium text-zinc-200 hover:text-zinc-400 transition-colors">{link.label}</Link>
            ))}

          </div>

          <div className="flex flex-row gap-4">
            {token ? (<AvatarNavbar token={token} />) : (
              <>
                <AvatarPopover />
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex md:hidden">
        <div className="container py-8 flex flex-row justify-between w-full items-center">
          <div className="">
            <Link to="/" className="font-inter font-semibold text-3xl hover:text-zinc-150 hover:text-zinc-400 transition-colors">invite.me</Link>
          </div>

          <div className="">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button variant={"ghost"}>
                  <Menu className="size-8" />
                </Button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/70" />
                <Dialog.Content className="fixed p-10 right-0 top-0 bottom-0 h-screen min-w-[320px] bg-zinc-950 border-l border-zinc-900">
                  <div className="space-y-3 flex flex-col">
                    {links.map((link) => (
                      <Button variant={"link"} key={uuid()} className="items-center justify-start" asChild>
                        <Link to={link.to} className="font-medium text-zinc-200 hover:text-zinc-400 transition-colors flex flex-row gap-4">{link.label} <FaExternalLinkAlt /></Link>
                      </Button>
                    ))}
                  </div>

                  <Separator className="w-4/5 my-8 mx-auto" />

                  <div className="flex flex-col items-center justify-center">
                    {!token ? (
                      <Button variant={"destructive"} onClick={signOut} className="font-medium w-4/5">Sair</Button>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <Button className="font-medium" variant={"secondary"} asChild><Link to="/register">Crie sua conta</Link></Button>
                        <Button className="font-medium" variant={"secondary"} asChild><Link to="login">Entre</Link></Button>
                      </div>
                    )}
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}