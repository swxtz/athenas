import { IProductCard } from "@/app/components/product-card";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

type Product = IProductCard;

async function getBestSellersProduct(): Promise<Product[]> {
  const response = await api.get("/mock/products/best-sellers");
  return response.data;
}

export function useQueryGetBestSellersProduct() {
  return useQuery({
    queryKey: ["best-sellers-products"],
    queryFn: getBestSellersProduct,
    refetchOnWindowFocus: false,
  });
}