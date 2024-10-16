"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import { EmptyCart } from "./empty-cart";
import { cuid } from "@/utils/cuid";
import { ResumeCard } from "./resume-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { convertToReal } from "@/utils/convert-to-real";

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
    <div className="mt-9 bg-white rounded-[10px] min-w-[519px] h-fit">
      <div className="container py-6 border-b-2 border-[#F9A84D]/20">
        <h2 className="font-semibold text-2xl font-inter text-brown-500">
          Carrinho de produtos
        </h2>
      </div>

      <div className="max-h-[500px] overflow-y-auto scrollbar scrollbar-thumb-zinc-700/50 scrollbar-w-2 scrollbar-thumb-rounded-full ">
        {context?.state.items.length === 0 && <EmptyCart />}
        {context?.state.items.map((item) => (
          <ResumeCard key={cuid()} productId={item.id} />
        ))}
      </div>

      <Separator />

      <div className="flex flex-col gap-4 justify-center py-3 container">
        <div className="text-brown-500 flex flex-row justify-between font-inter">
          <span className="font-semibold">Total: </span>
          <span className="font-semibold">{convertToReal(2000 / 100)}</span>
        </div>
        <Button className="mx-auto bg-green-600 w-full font-semibold text-white text-lg hover:bg-green-700 hover:text-zinc-200 py-4 ">
          Finalizar Compra
        </Button>
      </div>
    </div>
  );
}
