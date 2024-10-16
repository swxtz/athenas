"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import { EmptyCart } from "./empty-cart";
import { cuid } from "@/utils/cuid";
import { ResumeCard } from "./resume-card";

export function Resume() {
  const context = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mt-9 bg-white rounded-[10px] min-w-[519px] max-h-[500px] overflow-y-auto">
      <div className="container py-6 border-b-2 border-[#F9A84D]/20">
        <h2 className="font-semibold text-2xl font-inter text-brown-500">
          Carrinho de produtos
        </h2>
      </div>

      <div className="">
        {context?.state.items.length === 0 && <EmptyCart />}
        {context?.state.items.map((item) => (
          <ResumeCard key={cuid()} productId={item.id}  />
        ))}
      </div>
    </div>
  );
}
