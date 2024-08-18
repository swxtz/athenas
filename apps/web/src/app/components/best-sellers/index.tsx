import { CategoryDivisor } from "@/components/category-divisor";
import { ProductCard } from "../product-card";

interface Products {
  name: string;
  image: string;
  price: number;
}

const products: Products[] = [
  {
    name: "Molho grill junior 380g",
    image: "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
  },
  {
    name: "Molho grill junior 380g",
    image: "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
  },
  {
    name: "Molho grill junior 380g",
    image: "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
  },
  {
    name: "Molho grill junior 380g",
    image: "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
  },
  {
    name: "Molho grill junior 380g",
    image: "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
  },

  {
    name: "Molho grill junior 380g",
    image: "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
  },
];

export function BestSellers() {
  return (
    <div className="mt-12">
      <div className="">
        {/* Divisor */}
        <CategoryDivisor title="Mais vendidos" />
        <div className="mt-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 lg:grid-cols-6 md:gap-4  mx-auto">
            {products.map((product, index) => (
              <ProductCard key={index} name={product.name} image={product.image} price={product.price} />
            ))}
          </div>
        </div>

        <div className="mb-[500px]" />
      </div>
    </div>
  );
}
