"use client";

import { useQueryGetCategoriesProducts } from "@/hooks/queries/get-categories-products";
import { Loader2 } from "lucide-react";
import { CategorySection } from "../category-section";
import { cuid } from "@/utils/cuid";
import { CategoryCard } from "../category-card";

export function Categories() {
  const { data, isLoading, error } = useQueryGetCategoriesProducts();

  if (error) {
    return <div>Erro ao carregar produtos</div>;
  }

  console.log(data);

  return (
    <div className="mt-12">
      {isLoading && (
        <div className="mt-52 w-fit mx-auto">
          <Loader2 size={32} className="animate-spin" />
        </div>
      )}

      {data &&
        data?.map((category) => (
          <div key={cuid()} className="mt-12">
            <CategorySection title={category.type} />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 md:gap-4 lg:grid-cols-6 gap-y-4 md:gap-y-8 mx-auto">
              {category.products.map((products) => (
                <CategoryCard key={cuid()} productId={products.productId} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
