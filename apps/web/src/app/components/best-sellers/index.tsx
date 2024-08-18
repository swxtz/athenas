import { CategoryDivisor } from "@/components/category-divisor";
import { ProductCard } from "../product-card";

export function BestSellers() {
  return (
    <div className="mt-12">
      <div className="">
        {/* Divisor */}
        <CategoryDivisor title="Mais vendidos" />
        <div className="">
          <ProductCard
            image="https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp"
            name="Molho grill junior"
            price={16.5}
          />
        </div>
      </div>
    </div>
  );
}
