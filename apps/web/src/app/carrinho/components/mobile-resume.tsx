"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { convertToReal } from "@/utils/convert-to-real";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileResume() {
  const context = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log(context);
  }, [context]);

  if (!isMounted) {
    return null;
  }

  const items =
    context?.state.items.reduce((context, item) => {
      const price = item.price * item.quantity + context;
      return price;
    }, 0) || 0;

  return (
    <div className="">
      {context?.state.items.length !== 0 && (
        <div className="bg-white rounded-[10px] py-6 container flex flex-col gap-2">
          <div className="">
            <div className="">
              <span className="text-brown-500 font-inter font-semibold">
                Total: {convertToReal(items / 100)}
              </span>
            </div>
          </div>
          <div className="">
            <Button variant={"buy"} asChild>
              <Link href="/checkout/finalizar-compra">Finalizar Compra</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
