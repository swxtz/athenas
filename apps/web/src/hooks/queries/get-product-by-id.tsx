"use client";

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

async function getProduct(id:string) {
  const res = await api.get(`products/get-product-by-id/${id}`);
  return res.data;
}

export function useQueryGetProductById(id: string) {

  const queryKey = `product-${id}`;

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => getProduct(id),
    refetchOnWindowFocus: false,
  });
}

