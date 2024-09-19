"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useQueryGetProductById } from "@/hooks/queries/get-product-by-id";
import { convertToReal } from "@/utils/convert-to-real";
import Image from "next/image";
import { QuantityButton } from "./quantity-button";
import { useState } from "react";

interface ProductCardProps {
  productId: string;
}

export function ProductCard({ productId }: ProductCardProps) {
  const { data, isLoading, error } = useQueryGetProductById(productId);
  const [quantity, setQuantity] = useState(1);

  function handleIncrementQuantity() {
    setQuantity((prev) => prev + 1);
  }
  function handleDecrementQuantity() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  return (
    <div className="container h-[180px] w-full mt-9 flex flex-row gap-8">
      {isLoading && <Skeleton className="h-[150px] w-full rounded-xl" />}

      {data && (
        <div className="flex w-full flex-row gap-4">
          <Image
            src={data.coverImage}
            alt={data.name}
            className="h-[150px] w-[150px] rounded-xl"
            width={150}
            height={150}
          />
          <div className="flex flex-col w-full">
            <h3 className="font-semibold text-lg text-brown-500 w-full font-inter">
              {data.name}
            </h3>

            <div className="flex justify-between">
              <div className="" />
              <div className="flex flex-col h-[120px] justify-between">
                <QuantityButton
                  onDecrement={handleDecrementQuantity}
                  onIncrement={handleIncrementQuantity}
                  quantity={quantity}
                />

                <p className="font-semibold text-lg text-end text-brown-500 font-inter">
                  {convertToReal(data?.price / 100)}
                </p>
                {quantity > 1 && (
                  <p className="font-semibold text-sm text-end text-brown-500 font-inter">
                    {convertToReal((data?.price * quantity) / 100)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
