"use client";

import { cuid } from "@/utils/cuid";
import { ProductCard } from "../product-card";
import { useQueryGetProductById } from "@/hooks/queries/get-product-by-id";

interface ProductCardProps {
  productId: string;
}

export function CategoryCard({productId}: ProductCardProps) {

  const { data, isLoading } = useQueryGetProductById(productId)


  if(isLoading){
    return <h2>Teste</h2>
  }
  

  return (
    <div className="mt-6 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 lg:grid-cols-6  gap-y-4 md:gap-y-8 mx-auto">
        {/* <ProductCard
          key={cuid()}
          name={data.name}
          image={data.coverImage}
          price={data.price}
          productLink={data.slug}
          isPayable={true}
          numberOfInstallments={3}
          fees={1}
        /> */}

        {data}
      </div>
    </div>
  );
}
