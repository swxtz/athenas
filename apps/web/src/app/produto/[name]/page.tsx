import { products } from "@/data/best-sellers";
import Image from "next/image";
import { ProductCard } from "../components/product-card";


interface ProductParams {
  params: {
    name: string;
  };
}

export default function ProductPage({ params }: ProductParams) {
  return (
    <main className="-mt-8 container bg-white min-h-screen min-w-screen">
      <div className="">
        <ProductCard {...products[0]} />
      </div>
    </main>
  );
}