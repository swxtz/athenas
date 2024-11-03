"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import { ResumePriceDisplay } from "./resume-price-display";
import Link from "next/link";

export function TotalPrice() {
  const context = useCart();
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  return (
    <div className="flex flex-col gap-4 justify-center py-3 container">
      <ResumePriceDisplay />
      <Button className="mx-auto bg-green-600 w-full font-semibold text-white text-lg hover:bg-green-700 hover:text-zinc-200 py-4" asChild>
        <Link href="/checkout/finalizar-compra">Finalizar Compra</Link>
      </Button>
    </div>
  );
}
