import { ProductsCarousel } from "@/app/components/products-carousel";
import Image from "next/image";
import { BestSellers } from "./components/best-sellers";
import { QueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { CategorySection } from "./components/category-section";
import { Categories } from "./components/categories";

async function getProducts() {
  const res = await api.get("/categories/all");
  return res.data;
}

export default async function Home() {
  return (
    <main className="container min-h-screen min-w-screen">
      <BestSellers />

      <Categories />

      <div className="mt-24 md:mt-48" />
    </main>
  );
}
