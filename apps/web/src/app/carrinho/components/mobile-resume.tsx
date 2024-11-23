"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
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

  return (
    <div className="">
      <div className=""></div>
      <div className="">
        <Button>COmpar\</Button>
      </div>
    </div>
  );
}