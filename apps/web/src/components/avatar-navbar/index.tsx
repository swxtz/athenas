import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { jwtDecode } from "jwt-decode";
import type { JwtUserPayload } from "@/types/jwt";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


interface AvatarNavbarProps {
  token: string;
}

export function AvatarNavbar({ token }: AvatarNavbarProps) {
  const { name, email } = jwtDecode<JwtUserPayload>(token);

  // pegue a primeira letra das duas primeira frases do nome 
  const avatarFallback = name.split(" ").slice(0, 2).map((word) => word[0]).join("");


  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant={"ghost"}>
          <div className="">
            <div className="">
              <span>{name}</span>
              <span>{email}</span>
            </div>
            <Avatar>
              <AvatarImage src={"https://github.com/swxtz.png"} />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
          </div>
        </Button>
      </Dialog.Trigger>
    </Dialog.Root>
  );
}