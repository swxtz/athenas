"use client";

import { CategoryDivisor } from "@/components/category-divisor";
import { IProductCard, ProductCard } from "../product-card";
import { cuid } from "@/utils/cuid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { products } from "@/data/best-sellers";
import { formatTextToSlug } from "@/utils/format-text-to-slug";
import { QueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { Loader2 } from "lucide-react";
import { useQueryGetBestSellersProduct } from "@/hooks/queries/get-best-sellers-product";

export function BestSellers() {
  const {
    data,
    error: fetchError,
    isLoading,
  } = useQueryGetBestSellersProduct();

  if (fetchError) {
    return <div>Erro ao carregar produtos</div>;
  }

  return (
    <div className="mt-12">
      <div className="">
        {/* Divisor */}
        <CategoryDivisor title="Mais vendidos" />

        {isLoading && (
          <div className="mt-52 w-fit mx-auto">
            <Loader2 size={32} className="animate-spin" />
          </div>
        )}

        <div className="mt-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 lg:grid-cols-6  gap-y-4 md:gap-y-8 mx-auto">
            {data?.map((product) => (
              <ProductCard
                key={cuid()}
                name={product.name}
                image={product.image}
                price={product.price}
                productLink={`/produto/${formatTextToSlug(product.name)}`}
                isPayable={product.isPayable}
                numberOfInstallments={product.numberOfInstallments}
                fees={product.fees}
              />
            ))}
          </div>
        </div>

        <div className="mb-[500px]" />
      </div>
    </div>
  );
}
