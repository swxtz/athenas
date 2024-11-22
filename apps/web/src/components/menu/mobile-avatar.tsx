import { useQueryGetPersonalInfo } from "@/hooks/queries/get-personal-info";
import { signOut, useSession } from "next-auth/react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar } from "../avatar";
import { LogOut } from "lucide-react";

export function MobileAvatar() {
  const { data: session } = useSession();
  const { data, isLoading } = useQueryGetPersonalInfo(session?.token);

  if (isLoading) {
    return;
  }

  return (
    <div className="">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="py-8 px-2 flex gap-4" variant={"ghost"}>
            <Avatar />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="h-fit py-4">
          <div className="flex items-center justify-center">
            <Button
              className="w-[150px] flex gap-1"
              variant={"destructive"}
              onClick={() => signOut()}
            >
              <LogOut size={18} />
              <span>Sair</span>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
