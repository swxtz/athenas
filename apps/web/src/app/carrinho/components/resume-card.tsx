"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQueryGetProductById } from "@/hooks/queries/get-product-by-id";
import { useCart } from "@/hooks/use-cart";
import { convertToReal } from "@/utils/convert-to-real";
import { truncateText } from "@/utils/truncate-text";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ResumeCard {
  productId: string;
  productQuantity: number;
}

export function ResumeCard({ productId, productQuantity }: ResumeCard) {
  const { data, isLoading, error } = useQueryGetProductById(productId);
  const [quantity, setQuantity] = useState(productQuantity || 1);

  const context = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className="w-4/5 my-3 h-16 mx-auto" />;
  }

  function handleRemoveProduct() {
    if (context) {
      context.dispatch({ type: "REMOVE_ITEM", id: productId });
    }
  }

  return (
    <div className="mx-8">
      {data && (
        <div className="flex flex-row my-4 gap-4 w-full">
          <Image
            src={data?.coverImage}
            alt={data?.name || ""}
            width={200}
            height={200}
            className="w-[50px] h-[100px] object-contain rounded-x"
          />
          <div className="flex flex-col mb-4 justify-between w-full">
            <h2 className="mt-2 text-sm text-brown-500">
              {truncateText(data.name, 20)}
            </h2>
            <div className="flex flex-row justify-between items-center w-full">
              <span className="font-semibold text-base text-brown-500 font-inter">
                {convertToReal((data.price * quantity) / 100)}
              </span>

              <Button variant={"ghost"} onClick={handleRemoveProduct} className="text-red-800 hover:text-red-700 font-semibold">
                Remover
              </Button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
