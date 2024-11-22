"use client";

import { FaRegUser } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { DesktopAvatar } from "../menu/desktop-avatar";
import { MobileAvatar } from "../menu/mobile-avatar";

export function MobileProfile() {
  const { status, data: session } = useSession();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isAuthorized = status === "authenticated";

  function closeDialog() {
    setIsDialogOpen(false);
  }

  return (
    <>
      {!isAuthorized && (
        <Popover open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <PopoverTrigger asChild>
            <Button
              type="button"
              className="text-black flex items-center gap-2"
              variant={"ghost"}
            >
              <div className="flex flex-row items-center gap-2">
                <FaRegUser size={28} />
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="mx-6 flex p-3 flex-col gap-1">
              <Link href="/auth/login" className="w-full" onClick={closeDialog}>
                <Button variant={"primary"} className="w-full h-12">
                  Entrar
                </Button>
              </Link>
              <p className="text-xs mt-2">
                {" "}
                Não tem cadastro?{" "}
                <Link
                  href="/auth/crie-sua-conta"
                  className="underline"
                  onClick={closeDialog}
                >
                  {" "}
                  Crie sua conta.
                </Link>{" "}
              </p>
            </div>
          </PopoverContent>
        </Popover>
      )}

      {isAuthorized && (
        <div className="">
          <MobileAvatar />
        </div>
      )}
    </>
  );
}
