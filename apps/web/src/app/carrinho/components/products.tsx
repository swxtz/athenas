"use client";

import { ProductCard } from "./product-card";

export function Products() {

  return (
    <div className="mt-9 bg-white rounded-[10px]">
      <div className="container py-6 border-b-2  border-[#F9A84D]/20">
        <h2 className="font-semibold text-2xl font-inter ">Carrinho de produtos</h2>
      </div>
      <ProductCard productId="e6cf15db-6d35-4c7e-91b4-9f9554067185" />
    </div>
  );
}
