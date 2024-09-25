"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useQueryGetProductById } from "@/hooks/queries/get-product-by-id";
import { convertToReal } from "@/utils/convert-to-real";
import Image from "next/image";
import { QuantityButton } from "./quantity-button";
import { useEffect, useState } from "react";
import { useCart } from "@/hooks/use-cart";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  productId: string;
}

export function ProductCard({ productId }: ProductCardProps) {
  const context = useCart();
  const { data, isLoading, error } = useQueryGetProductById(productId);
  const [quantity, setQuantity] = useState(1);

  function handleIncrementQuantity() {
    setQuantity((prev) => prev + 1);
  }
  function handleDecrementQuantity() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function handleRemoveProduct() {
    if (context) {
      context.dispatch({ type: "REMOVE_ITEM", id: productId });
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (context) {
      context.dispatch({
        type: "UPDATE_QUANTITY",
        id: productId,
        quantity: quantity,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <div className="container h-[180px] w-full mt-9 flex flex-row gap-8 border-b-2 border-[#F9A84D]/20">
      {isLoading && <Skeleton className="h-[150px] w-full rounded-xl" />}

      {data && (
        <div className="flex w-full flex-row gap-4 ">
          <Image
            src={data.coverImage}
            alt={data.name}
            className="w-[150px] object-contain mx-auto rounded-xl"
            width={150}
            height={150}
          />
          <div className="flex flex-col w-full">
            <h3 className="font-semibold text-lg text-brown-500 w-full font-inter">
              {data.name}
            </h3>

            <div className="flex justify-between">
              <div className="flex flex-col items-start justify-between">
                <p className="font-semibold text-sm text-brown-500 font-inter">
                  {data.description}
                </p>

                <Button variant={"link"} className="text-brown-500 px-0">
                  <Link href={`/produto/${data.slug}`}>Ver produto</Link>
                </Button>
              </div>
              <div className="flex flex-col h-[120px] justify-between">
                <QuantityButton
                  onDecrement={handleDecrementQuantity}
                  onIncrement={handleIncrementQuantity}
                  onRemoveProduct={handleRemoveProduct}
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
