"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export interface ActiveLinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function ActiveLink({ children, href, icon }: ActiveLinkProps) {
  const link = usePathname();
  
  const isActive = link === href;
  return (
    <div className="">
      <Button asChild variant={"link"} className="transition-all px-0"><Link href={href} className={cn("flex gap-1 hover:text-zinc-600", isActive ? "font-bold text-lg" : "")}>{icon}{children}</Link></Button>
    </div>
  );
}