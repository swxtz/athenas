/* eslint-disable @next/next/no-img-element */
"use client";

import { IProductCard } from "@/app/components/product-card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ProductCardProps extends IProductCard {
  image: string;
}

export function ProductCard({
  name,
  fees,
  image,
  isPayable,
  price,
  productLink,
  numberOfInstallments,
}: ProductCardProps) {
  return (
    <div className="mt-8 pt-8">
      <div className="flex items-center justify-center my-4 mx-8 bg-white rounded">
        <Image src={image} alt={name} width={1000} height={1000} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-3/6" />
      </div>

      <div className="">
        <div className="">
          <span className="text-xl">{name}</span>
        </div>
      </div>
    </div>
  );
}
