import { CategoryDivisor } from "@/components/category-divisor";
import { IProductCard, ProductCard } from "../product-card";
import { cuid } from "@/utils/cuid";
import { useMediaQuery } from "@/hooks/use-media-query";

type Product = IProductCard;

function createFakeLink() {
  return "/produto/" + cuid();
}

const products: Product[] = [
  {
    name: "Molho ketchup junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: true,
    numberOfInstallments: 3,
    fees: 1,
  },
  {
    name: "Molho barbecue junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_636639-MLU77839654916_072024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: false,
    fees: 5.5,
  },
  {
    name: "Molho ketchup junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: true,
    numberOfInstallments: 3,
    fees: 5.5,
  },
  {
    name: "Molho ketchup junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: true,
    numberOfInstallments: 3,
    fees: 5.5,
  },
  {
    name: "Maionese Alho 190g - Cepêra",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_733039-MLB77070535049_062024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: false,
    fees: 5.5,
  },
  {
    name: "Pepinos Em Conserva - Tipo Picles 550g - Cepêra",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_848410-MLB49232733922_022022-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: false,
    fees: 5.5,
  },
];

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
