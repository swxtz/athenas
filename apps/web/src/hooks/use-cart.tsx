"use client";

import { CartContext } from "@/context/cart-context";
import { useContext } from "react";

export function useCart() {
  const context = useContext(CartContext);

  return context;
}