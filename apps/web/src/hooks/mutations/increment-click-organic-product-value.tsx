import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

async function incrementClickOrganicProductValue(id: string) {
  const res = await api.put(`/odin/increment-click-organic-product/${id}`);
  return res.data;
}

export function useMutationIncrementClickOrganicProductValue() {
  return useMutation({
    mutationKey: ["increment-click-organic-product"],
    mutationFn: (id: string) => incrementClickOrganicProductValue(id),
  });
}
