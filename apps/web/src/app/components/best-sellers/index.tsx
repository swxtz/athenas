"use client";

import { CategoryDivisor } from "@/components/category-divisor";
import { ProductCard } from "../product-card";
import { cuid } from "@/utils/cuid";
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
            {data?.data.map((product) => (
              <ProductCard
                key={cuid()}
                name={product.name}
                image={product.coverImage}
                price={product.price}
                productLink={`/produto/${product.id}`}
                isPayable={true}
                numberOfInstallments={3}
                fees={1}
              />
            ))}
          </div>
        </div>

        <div className="" />
      </div>
    </div>
  );
}
