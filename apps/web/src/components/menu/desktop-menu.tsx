import { FaRegUser } from "react-icons/fa";
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
            <button className="text-black flex items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <FaRegUser size={28}/>
                <span className="text-sm text-left text-zinc-200">
                  Entrar <span className="font-medium text-xs"> <br />ou cadastre-se </span>
                </span>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="mx-6 flex p-3 flex-col gap-1">
              <Link href="/auth/login" className="w-full">
                <Button className="w-full">Entrar</Button>
              </Link>
              <p className="text-xs"> Não tem cadastro? <Link href="/auth/crie-sua-conta" className=" hover:underline"> Crie sua conta.</Link> </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
