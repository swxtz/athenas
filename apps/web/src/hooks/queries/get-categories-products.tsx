import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface Categories {
  type: string
  products: Product[]
}

interface Product {
  productId: string
}


async function getCategoriesProducts(): Promise<Categories[]> {
  const res = await api.get("/categories/all");
  return res.data;
}

export function useQueryGetCategoriesProducts() {
  return useQuery({
    queryKey: ["categories-products"],
    queryFn: getCategoriesProducts,
    refetchOnWindowFocus: false,
  });
}