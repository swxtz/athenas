"use client";

import { cuid } from "@/utils/cuid";
import { ProductCard } from "../product-card";

interface ProductCardProps {
  productId: string;
}

export function CategoryCard() {
  

  return (
    <div className="mt-6 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 lg:grid-cols-6  gap-y-4 md:gap-y-8 mx-auto">
        <ProductCard
          key={cuid()}
          name={name}
          image={coverImage}
          price={price}
          productLink={`/produto/${productLink}`}
          isPayable={true}
          numberOfInstallments={3}
          fees={1}
        />
      </div>
    </div>
  );
}
