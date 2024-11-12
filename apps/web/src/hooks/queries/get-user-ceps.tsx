import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

async function getUserCeps(token: string | undefined) {
  const res = await api.get("/cep/get-user-address", { headers: {
    Authorization: `Bearer ${token}`
  } });
  return res.data;
}

export function useQueryGetUserCeps() {
  const session = useSession();

  return useQuery({
    queryKey: ["user-ceps"],
    queryFn: () => getUserCeps(session.data?.token),
    refetchOnWindowFocus: true,
  });
}
