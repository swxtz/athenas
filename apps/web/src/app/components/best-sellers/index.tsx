import { CategoryDivisor } from "@/components/category-divisor";
import { IProductCard, ProductCard } from "../product-card";
import { cuid } from "@/utils/cuid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { products } from "@/data/best-sellers";


export function BestSellers() {
  return (
    <div className="mt-12">
      <div className="">
        {/* Divisor */}
        <CategoryDivisor title="Mais vendidos" />
        <div className="mt-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 lg:grid-cols-6  gap-y-4 md:gap-y-8 mx-auto">
            {products.map((product) => (
              <ProductCard
                key={cuid()}
                name={product.name}
                image={product.image}
                price={product.price}
                productLink={product.productLink}
                isPayable={product.isPayable}
                numberOfInstallments={product.numberOfInstallments}
                fees={product.fees}
              />
            ))}
          </div>
        </div>

        <div className="mb-[500px]" />
      </div>
    </div>
  );
}
