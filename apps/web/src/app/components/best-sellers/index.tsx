"use client";

import { CategoryDivisor } from "@/components/category-divisor";
import { ProductCard } from "../product-card";
import { cuid } from "@/utils/cuid";
import { Loader2 } from "lucide-react";
import { useQueryGetRecommendedProducts } from "@/hooks/queries/get-recommended-products";

export function BestSellers() {
  const {
    data,
    error: fetchError,
    isLoading,
  } = useQueryGetRecommendedProducts();

  if (fetchError) {
    return <div>Erro ao carregar produtos</div>;
  }

  return (
    <div className="mt-12">
      <div className="">
        {/* Divisor */}
        <CategoryDivisor title="O QUE MAIS IMPRESSIONA NO SABOR" />

        {isLoading && (
          <div className="mt-52 w-fit mx-auto">
            <Loader2 size={32} className="animate-spin" />
          </div>
        )}

        <div className="mt-6 flex">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 md:gap-4 lg:grid-cols-6 gap-y-4 md:gap-y-8 mx-auto">
            {/* Tipar */}
            {data?.data.map((product: any) => (
              <ProductCard
                key={cuid()}
                name={product.name}
                image={product.coverImage}
                price={product.price} 
                productLink={`/produto/${product.slug}`}
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
