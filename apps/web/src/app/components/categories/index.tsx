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
    <div className="">
      {isLoading && (
        <div className="mt-52 w-fit mx-auto">
          <Loader2 size={32} className="animate-spin" />
        </div>
      )}

      {data?.map((category) => (
        <div key={cuid()}>
          <CategorySection  title={category.type} />
          {category.products.map((product) => (
            
          ))}
        </div>

      ))}
      
    </div>
  );
}
