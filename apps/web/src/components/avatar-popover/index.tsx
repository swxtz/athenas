import { Button } from "@/components/ui/button";
import { UserCircle2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

export function AvatarPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"ghost"} className="py-8">
          <div className="flex flex-rol gap-2 items-center">
            <UserCircle2 size={36} strokeWidth={1.5} />
            <div className="">
              <p className="text-zinc-400">
                <span className="text-zinc-200 font-medium">Entre</span> ou{" "}
                <span className="text-zinc-200">Cadraste-se</span>
              </p>
            </div>
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[460px] border-slate-500">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-8 justify-center items-center">
            <span className="font-medium text-xl">Já possui conta?</span>
            <Button variant={"secondary"} asChild className="w-48">
              <Link to="/login">Entre com sua conta</Link>
            </Button>
          </div>

          <Separator orientation="vertical" className="h-40" />

          <div className="flex flex-col gap-8 justify-center items-center">
            <span className="font-medium text-xl">Crie gratuitamente</span>
            <Button variant={"secondary"} asChild className="w-48">
              <Link to="/register">Crie sua conta</Link>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
