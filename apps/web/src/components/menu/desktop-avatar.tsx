"use client";

import { Avatar } from "../avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useQueryGetPersonalInfo } from "@/hooks/queries/get-personal-info";


export function DesktopAvatar() {
  const { data: session } = useSession();

  if (!session) {
    return;
  }

  const { data, isLoading } = useQueryGetPersonalInfo(session?.token);

  if(isLoading) {
    return
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="py-8 px-2 flex gap-4" variant={"ghost"}>
          <Avatar />
          <span>{data.name}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="h-fit py-4">
        <div className="flex items-center justify-center">
          <Button className="w-[150px] flex gap-1" variant={"destructive"} onClick={() => signOut()}>
            <LogOut size={18}/>
            <span>Sair</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
