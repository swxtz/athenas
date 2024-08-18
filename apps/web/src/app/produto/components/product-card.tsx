/* eslint-disable @next/next/no-img-element */
"use client";

import { IProductCard } from "@/app/components/product-card";
import { Separator } from "@/components/ui/separator";
import { calculateTotalWithInterest } from "@/utils/calculate-total-with-interest";
import { convertToReal } from "@/utils/convert-to-real";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  isPayable: boolean;
  numberOfInstallments: number;
  fees: number;
}

export function ProductCard({
  name,
  fees,
  image,
  isPayable,
  price,
  numberOfInstallments,
}: ProductCardProps) {
  return (
    <div className="mt-8 pt-8 flex flex-col gap-8">
      <div className="flex items-center justify-center my-4 mx-8 bg-white rounded shadow-2xladow-">
        <Image
          src={image}
          alt={name}
          width={1000}
          height={1000}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-3/6"
        />
      </div>

      <Separator className="w-4/5 mx-auto bg-black/80" />

      <div className="-mt-6">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-medium font-montserrat">{name}</span>
          <span className="text-4xl">{convertToReal(price)}</span>
          <span className="text-base text-gray-500 -mt-2">
            {numberOfInstallments}x de {convertToReal(calculateTotalWithInterest(numberOfInstallments, fees, price))} sem juros
          </span>
        </div>
      </div>
    </div>
  );
}
