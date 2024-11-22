"use client";

import { useCart } from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import { EmptyCart } from "./empty-cart";
import { cuid } from "@/utils/cuid";
import { ResumeCard } from "./resume-card";
import { Separator } from "@/components/ui/separator";
import { TotalPrice } from "./total-price";

export function Resume() {
  const context = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log(context);
  }, [context]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mt-9 bg-white rounded-[10px] min-w-[519px] h-fit">
      <div className="container py-6 border-b-2 border-[#F9A84D]/20">
        <h2 className="font-semibold text-2xl font-inter text-brown-500">
          Resumo
        </h2>
      </div>

      <div className="max-h-[500px] overflow-y-auto scrollbar scrollbar-thumb-zinc-700/50 scrollbar-w-2 scrollbar-thumb-rounded-full">
        {context?.state.items.length === 0 && <EmptyCart />}
        {context?.state.items.map((item) => (
          <ResumeCard key={cuid()} productId={item.id} productQuantity={item.quantity} />
        ))}
      </div>

      {context?.state.items.length !== 0 && <Separator />}
      {context?.state.items.length !== 0 && <TotalPrice />}
    </div>
  );
}
