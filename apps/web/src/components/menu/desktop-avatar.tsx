"use client";

import { useQueryGetPersonalInfo } from "@/hooks/queries/get-personal-info";
import { Avatar } from "../avatar";
import { Popover, PopoverTrigger } from "../ui/popover";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";

export function DesktopAvatar() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="hover:bg-red-500">
          <Avatar />
        </Button>
      </PopoverTrigger>
    </Popover>
  );
}