"use client";

import { useCart } from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import { cuid } from "@/utils/cuid";
import { Separator } from "@/components/ui/separator";
import { EmptyCart } from "@/app/carrinho/components/empty-cart";
import { ResumeCard } from "./resume-card";
import { TotalPrice } from "./total-price";

export function Resume() {
  const context = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  
  }

  if(!context?.state.items) {
    return (
      <h1>teste</h1>
    );
  }

  return (
    <div className="mt-9 bg-white rounded-[10px] w-fit md:min-w-[519px] h-fit">
      <div className="container py-6 border-b-2 border-[#F9A84D]/20">
        <h2 className="font-semibold text-xl md:text-2xl font-inter text-brown-500">
          Carrinho de produtos
        </h2>
      </div>

      <div className="max-h-[500px] overflow-y-auto scrollbar scrollbar-thumb-zinc-700/50 scrollbar-w-2 scrollbar-thumb-rounded-full ">
        {context?.state.items.length === 0 && <EmptyCart />}
        {context?.state.items.map((item) => (
          <ResumeCard key={cuid()} productId={item.id} productQuantity={item.quantity} />
        ))}
      </div>

      {context?.state.items.length !== 0 && <Separator />}
      {context?.state.items.length !== 0 && <TotalPrice itens={context?.state.items} />}
    </div>
  );
}
