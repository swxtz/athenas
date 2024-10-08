"use client";

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

async function getPersonalInfo(token: string) {
  const response = await api.get("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export function useQueryGetPersonalInfo(token: string) {
  return useQuery({
    queryKey: ["personal-info"],
    queryFn: () => getPersonalInfo(token),
    refetchOnWindowFocus: false,
  });
}