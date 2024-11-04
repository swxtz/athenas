"use client";

import { clsx } from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HTMLAttributes } from "react";

export interface PaymentMethodCardProps extends HTMLAttributes<HTMLDivElement> {
  logo: string | StaticImport;
  alt: string;
  isAvailable: boolean;
  isSelected: boolean;
}

export function PaymentMethodCard({
  logo,
  alt,
  isAvailable,
  isSelected,
  ...props
}: PaymentMethodCardProps) {
  return (
    <div
      className={clsx(
        "relative border-2 border-zinc-300 p-4 w-fit rounded cursor-pointer transition-all",
        {
          "hover:brightness-75 hover:bg-zinc-50 transition-all": isAvailable,
          "cursor-not-allowed bg-zinc-300": !isAvailable,
          "border-green-500": isSelected,
        }
      )}
      {...props}
    >
      {/* Ícone de seleção */}
      {isSelected && (
        <div className="absolute top-1 right-1 bg-green-500 rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <Image
        src={logo}
        alt={alt}
        className="w-[120px] h-[120px] object-contain mx-auto rounded-xl"
      />
    </div>
  );
}
