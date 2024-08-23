import { cuid } from "@/utils/cuid";
import { Star } from "lucide-react";

interface ProductStarsProps {
  size?: number;
  ratingNumber?: number;
}

export function ProductStars({
  size = 16,
  ratingNumber = 0,
}: ProductStarsProps) {
  return (
    <div className="flex items-center gap-1 justify-center w-fit">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={cuid()} fill="000000" size={size} />
        ))}
      </div>
      <div className="">
        <span>{ratingNumber / 5}</span>
        <span className="text-sm text-zinc-500"> ({ratingNumber})</span>
      </div>
    </div>
  );
}
