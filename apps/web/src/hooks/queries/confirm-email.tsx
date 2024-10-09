import { api } from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

interface VerifyEmailResponseData {
  emailVerified: boolean
  id: string
  email: string
}


async function verifyEmail(token: string | null) {
  const response = await api.post("/auth/verify-email", { token: token});
  return response;
}

export function useQueryConfirmEmail(token: string | null) {
  return useQuery({
    queryKey: ["confirm-email", token],
    queryFn: () => verifyEmail(token),
    retry: 0,
  });
}