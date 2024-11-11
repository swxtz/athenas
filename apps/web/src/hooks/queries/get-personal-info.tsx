"use client";

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

async function getPersonalInfo(token: string | undefined) {
  const response = await api.get("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
}

export function useQueryGetPersonalInfo(token: string | undefined) {
  const session = useSession();

  return useQuery({
    queryKey: ["personal-info"],
    queryFn: () => getPersonalInfo(token),
    refetchOnWindowFocus: false,
  });
}
