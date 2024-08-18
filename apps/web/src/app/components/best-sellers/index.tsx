import { CategoryDivisor } from "@/components/category-divisor";
import { IProductCard, ProductCard } from "../product-card";
import { cuid } from "@/utils/cuid";

type Product = IProductCard;

function createFakeLink() {
  return "/produto/" + cuid();
}

const products: Product[] = [
  {
    name: "Molho grill junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
  },
  {
    name: "Molho grill junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
  },
  {
    name: "Molho grill junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
  },
  {
    name: "Molho grill junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
  },
  {
    name: "Molho grill junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
  },
  {
    name: "Molho grill junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
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
            {products.map((product) => (
              <ProductCard
                key={cuid()}
                name={product.name}
                image={product.image}
                price={product.price}
                productLink={product.productLink}
              />
            ))}
          </div>
        </div>

        <div className="mb-[500px]" />
      </div>
    </div>
  );
}
