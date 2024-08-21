import { products } from "@/data/best-sellers";
import Image from "next/image";
import { ProductCard } from "../components/product-card";

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
};

interface ProductParams {
  params: {
    name: string;
  };
}

export default function ProductPage({ params }: ProductParams) {
  return (
    <main className="-mt-8 bg-white min-h-screen min-w-screen">
      <div className="">
        <ProductCard {...product} />
      </div>
    </main>
  );
}
