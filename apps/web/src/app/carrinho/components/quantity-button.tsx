"use client";

import { Minus, Plus, Trash2Icon } from "lucide-react";

interface QuantityButtonProps {
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
}: QuantityButtonProps) {
  return (
    <div className="flex gap-4 font-semibold text-lg text-brown-500 font-inter items-center">
      <p className="text-brown-500/70">Qntd.</p>
      <div className="flex w-[100px] justify-center gap-2 items-center border-1 border-brown-500 rounded px-3 py-2">
        {quantity <= 1 ? (
          <Trash2Icon onClick={onRemoveProduct} className="cursor-pointer" />
        ) : (
          <button type="button" onClick={onDecrement}>
            <Minus />
          </button>
        )}
        <span>{quantity}</span>
        <button type="button" onClick={onIncrement}>
          <Plus />
        </button>
      </div>
    </div>
  );
}
