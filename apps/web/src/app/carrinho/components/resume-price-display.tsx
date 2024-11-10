"use client";

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

  const items = context?.state.items.reduce((context, item) => {
    const price = (item.price * item.quantity) + context;
    return price;
  }, 0) || 0;

  return (
    <div className="text-brown-500 flex flex-row justify-between font-inter">
      <span className="font-semibold">Total: </span>
      <span className="font-semibold">{convertToReal(items/ 100)}</span>
    </div>
  );
}
