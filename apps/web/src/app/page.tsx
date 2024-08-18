import { ProductsCarousel } from "@/app/components/products-carousel";
import Image from "next/image";
import { BestSellers } from "./components/best-sellers";

export default function Home() {
  return (
    <main className="container min-h-screen min-w-screen">
      <ProductsCarousel />
      <BestSellers />
    </main>
  );
}
