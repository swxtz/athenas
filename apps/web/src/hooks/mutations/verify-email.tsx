import { api } from "@/lib/axios";
import { ApiResponse } from "@/types/api";
import { useMutation } from "@tanstack/react-query";

interface VerifyEmailResponseData {
  emailVerified: boolean
  id: string
  email: string
}


async function verifyEmail(token: string) {
  const response = await api.post("/auth/verify-email", { token });
  return response;
}

export function useMutationVerifyEmail(token: string) {
  return useMutation({
    mutationFn: () => verifyEmail(token),
    mutationKey: ["verify-email"],
  });
}
