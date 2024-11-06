import type { Metadata } from "next";
import { Product } from "../components/product";

const product = {
  name: "Molho ketchup junior 380g",
  image:
    "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
  price: 16.5,
  isPayable: true,
  numberOfInstallments: 3,
  fees: 1,
  discount: true,
  discountAmount: 2,
  description:
    "O ketchup Junior 380g é um molho de tomate clássico, embalado em uma garrafa prática e fácil de manusear. Ideal para acompanhar uma variedade de pratos, como hambúrgueres, batatas fritas e sanduíches, ele oferece o equilíbrio perfeito entre o doce e o ácido, característico de um ketchup de alta qualidade. A garrafa de 380g é compacta, ideal para famílias menores ou para uso em porções moderadas, garantindo que o produto permaneça fresco por mais tempo. Com uma tampa de fácil abertura e design ergonômico, o ketchup Junior é uma opção conveniente e saborosa para realçar suas refeições diárias.",
};

export const metadata: Metadata = {
  title: `RN Distribuidora | ${product.name}`,
  description: "E-commerce da RN Distribuidora",
};

interface ProductParams {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage(props: ProductParams) {
  const params = await props.params;

  return (
    <div>
      <div className="mt-36 md:mt-48">
        <Product slug={params.slug} />
      </div>
    </div>
  );
}
