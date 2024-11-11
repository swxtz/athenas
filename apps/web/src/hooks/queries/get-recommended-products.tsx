import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

async function getRecommendedProducts() {
  const res = await api.get("/odin/get-recommended-products?limit=6");
  return res;
}

export function useQueryGetRecommendedProducts() {
  return useQuery({
    queryKey: ["get-recommended-products"],
    queryFn: getRecommendedProducts
  });
}