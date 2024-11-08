"use client"

import { useCart } from "@/hooks/use-cart";
import { convertToReal } from "@/utils/convert-to-real";
import { useEffect, useState } from "react";

export function ResumePriceDisplay() {

  const context = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const itens = context?.state.items

  return (
    <div className="text-brown-500 flex flex-row justify-between font-inter">
      <span className="font-semibold">Total: </span>
      <span className="font-semibold">{convertToReal(2000 / 100)}</span>
    </div>
  );
}
