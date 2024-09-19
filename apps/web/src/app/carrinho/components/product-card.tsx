"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useQueryGetProductById } from "@/hooks/queries/get-product-by-id";

interface ProductCardProps {
  productId: string;
}

export function ProductCard({ productId }: ProductCardProps) {
  const { data, isLoading, error } = useQueryGetProductById(productId);

  return (
    <div className="container h-[180px] w-full mt-9 flex flex-row gap-8 pb-10">
      <Skeleton className="h-[150px] w-full rounded-xl" />
      {/* <div className="flex flex-col justify-between w-full">
        <div className="">
          <Skeleton className="h-4 w-40 mt-2" />
          <Skeleton className="h-4 w-20 mt-2" />
        </div>

        <div className="w-full">
          <div className="flex flex-row justify-between">
            <Skeleton className="h-4 w-20 mt-2" />
            <Skeleton className="h-4 w-12 mt-2" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
