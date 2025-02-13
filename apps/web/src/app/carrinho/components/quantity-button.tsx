"use client";

import { Minus, Plus, Trash2Icon } from "lucide-react";
import { HTMLAttributes } from "react";

interface QuantityButtonProps extends HTMLAttributes<HTMLDivElement> {
  quantity: number;
  onRemoveProduct: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function QuantityButton({
  quantity,
  onDecrement,
  onIncrement,
  onRemoveProduct,
  ...rest
}: QuantityButtonProps) {
  return (
    <div className="flex gap-2 md:gap-4 font-semibold text-xs md:text-lg text-brown-500 font-inter item-center" {...rest}>
      <p className="text-brown-500/70 text-xs md:text-base my-auto">Qntd.</p>
      <div className="flex w-[70px] md:w-[100px] justify-center gap-2 items-center border-1 border-brown-500 rounded h-9">
        {quantity <= 1 ? (
          <Trash2Icon onClick={onRemoveProduct} className="cursor-pointer size-4 md:size-6" />
        ) : (
          <button type="button" onClick={onDecrement}>
            <Minus className="size-4 md:size-6"/>
          </button>
        )}
        <span>{quantity}</span>
        <button type="button" onClick={onIncrement}>
          <Plus className="size-4 md:size-6"/>
        </button>
      </div>
    </div>
  );
}
