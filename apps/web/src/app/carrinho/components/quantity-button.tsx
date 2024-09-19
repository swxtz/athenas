"use client";

import { Minus, Plus, Trash2Icon } from "lucide-react";
import MotionNumber from "motion-number";

interface QuantityButtonProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function QuantityButton({
  quantity,
  onDecrement,
  onIncrement,
}: QuantityButtonProps) {
  return (
    <div className="flex gap-4 font-semibold text-lg text-brown-500 font-inter">
      <p>Qntd.</p>
      <div className="flex w-[100px] justify-center gap-2 items-center border-1 border-brown-500 rounded px-3 py-2">
        {quantity <= 1 ? (
          <Trash2Icon />
        ) : (
          <button type="button" onClick={onDecrement}>
            <Minus />
          </button>
        )}
        <MotionNumber value={quantity} />
        <button type="button" onClick={onIncrement}>
          <Plus />
        </button>
      </div>
    </div>
  );
}
