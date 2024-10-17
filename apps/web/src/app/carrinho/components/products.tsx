"use client";

import { useCart } from "@/hooks/use-cart";
import { ProductCard } from "./product-card";
import { useState, useEffect } from "react";
import { EmptyCart } from "./empty-cart";

export function Products() {
  const context = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mt-9 bg-white rounded-[10px] w-full">
      <div className="container py-6 border-b-2  border-[#F9A84D]/20">
        <h2 className="font-semibold text-2xl font-inter text-brown-500">
          Carrinho de produtos
        </h2>
      </div>

      {context?.state.items.length === 0 && <EmptyCart />}
      {context?.state.items.map((item) => (
        <ProductCard key={item.id} productId={item.id} />
      ))}
    </div>
  );
}
