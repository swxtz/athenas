import { Avatar } from "../avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import Link from "next/link";

export function DesktopMenu() {
  return (
    <div className="hidden md:flex gap-4">
      <div className="">
        <Popover>
          <PopoverTrigger asChild>
            <button className="text-white flex items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <Avatar />
                <span className="text-sm text-zinc-200">
                  Faça login <span className="font-medium">ou</span> <br /> crie
                  sua conta!
                </span>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="my-6 mx-4 flex flex-col gap-2">
              <Link href="/auth/login" className="w-full">
                <Button className="w-full">Entre</Button>
              </Link>
              <Separator />
              <Link href="/auth/crie-sua-conta" className="w-full">
                <Button className="w-full">Crie sua conta</Button>
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
