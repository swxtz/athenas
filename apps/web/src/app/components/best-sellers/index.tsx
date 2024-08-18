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
  },
  {
    name: "Molho barbecue junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_636639-MLU77839654916_072024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
  },
  {
    name: "Ketchup Heinz Squeeze Tradicional 397g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_679412-MLA45406459591_032021-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
  },
  {
    name: "Ketchup Sache Tradicional Cepera 154 Saches X 7g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_662445-MLU72013920699_092023-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
  },
  {
    name: "Maionese Alho 190g - Cepêra",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_733039-MLB77070535049_062024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
  },
  {
    name: "Pepinos Em Conserva - Tipo Picles 550g - Cepêra",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_848410-MLB49232733922_022022-O.webp",
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
