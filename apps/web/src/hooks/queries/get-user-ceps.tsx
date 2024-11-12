import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

async function getUserCeps() {
  const res = await api.get("/cep/get-user-address");
  return res.data;
}

export function useQueryGetUserCeps() {
  return useQuery({
    queryKey: ["user-ceps"],
    queryFn: getUserCeps,
    refetchOnWindowFocus: true
  });
}