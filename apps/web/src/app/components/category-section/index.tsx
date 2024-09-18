import { CategoryDivisor } from "@/components/category-divisor";
import { CategoryCard } from "../category-card";

interface CategorySectionProps {
  title: string;
}

export function CategorySection({ title }: CategorySectionProps) {
  return (
    <div className="">
      <div> 
        <CategoryDivisor title={title} />
      </div>
    </div>
  );
}