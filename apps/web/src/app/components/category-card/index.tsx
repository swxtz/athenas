"use client";

import { cuid } from "@/utils/cuid";
import { ProductCard } from "../product-card";
import { useQueryGetProductById } from "@/hooks/queries/get-product-by-id";
import { Loader2 } from "lucide-react";

interface ProductCardProps {
  productId: string;
}

export function CategoryCard({ productId }: ProductCardProps) {
  const { data, isLoading } = useQueryGetProductById(productId);

  if (isLoading) {
    return (
      <div className="mt-52 w-fit mx-auto">
        <Loader2 size={32} className="animate-spin" />
      </div>
    );
  }

  const productLink = `/produto/${data?.slug}`;

  return (
    <div className="mt-6 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 lg:grid-cols-6  gap-y-4 md:gap-y-8 mx-auto">
        <ProductCard
          key={cuid()}
          name={data?.name || ""}
          image={data?.coverImage || ""}
          price={data?.price || 0}
          productLink={productLink}
          isPayable={true}
          numberOfInstallments={3}
          fees={1}
        />
      </div>
    </div>
  );
}
