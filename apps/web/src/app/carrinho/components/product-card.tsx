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
import { useMediaQuery } from "@/hooks/use-media-query";
import { ProductCardDesktop } from "./product-card-desktop";
import { ProductCardMobile } from "./product-card-mobile";

interface ProductCardProps {
  productId: string;
  productQuantity: number;
}

export function ProductCard({ productId, productQuantity }: ProductCardProps) {
  const isDesktop = useMediaQuery(768);
  const context = useCart();
  const { data, isLoading, error } = useQueryGetProductById(productId);
  const [quantity, setQuantity] = useState(productQuantity || 1);

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
    <div className="md:container h-[150px] md:min-h-[220px] w-full py-8 md:py-0 md:mt-9 flex flex-row gap-8 border-b-2 border-[#F9A84D]/20 pb-12">
      {isLoading && <Skeleton className="h-[150px] w-full rounded-xl" />}
      {error && <Skeleton className="h-[150px] w-full rounded-xl" />}

      {isDesktop ? (
        <ProductCardDesktop
          name={data?.name || ""}
          coverImage={data?.coverImage || ""}
          description={data?.description || ""}
          slug={data?.slug || ""}
          price={data?.price || 0}
          quantity={quantity}
          isLoading={isLoading}
          handleDecrementQuantity={handleDecrementQuantity}
          handleIncrementQuantity={handleIncrementQuantity}
          handleRemoveProduct={handleRemoveProduct}
        />
      ) : (
        <ProductCardMobile
          name={data?.name || ""}
          coverImage={data?.coverImage || ""}
          slug={data?.slug || ""}
          price={data?.price || 0}
          quantity={quantity}
          handleDecrementQuantity={handleDecrementQuantity}
          handleIncrementQuantity={handleIncrementQuantity}
          handleRemoveProduct={handleRemoveProduct}
        />
      )}
    </div>
  );
}
