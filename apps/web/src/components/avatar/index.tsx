import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {
  Avatar as AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { User } from "lucide-react";

interface AvatarProps {
  name?: string;
  email?: string;
  avatarPhotoUrl?: string | StaticImport;
}

export function Avatar({ name, email, avatarPhotoUrl }: AvatarProps) {
  return (
    <div className="">
      <div className="">
        <AvatarRoot>
          <AvatarImage src="" />
          <AvatarFallback className="">
            <User className="text-zinc-900 p-1 w-96" size={48} />
          </AvatarFallback>
        </AvatarRoot>
      </div>
    </div>
  );
}
