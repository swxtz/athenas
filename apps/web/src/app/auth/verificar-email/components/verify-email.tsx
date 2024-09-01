"use client";

import { useMutationVerifyEmail } from "@/hooks/mutations/verify-email";
import { SuccessMessage } from "./sucess-message";
import { ErrorMessage } from "./error-message";
import { useQueryConfirmEmail } from "@/hooks/queries/confirm-email";
import { useSearchParams } from "next/navigation";
import { ParamNotFound } from "./param-not-found";

interface VerifyEmailProps {
  token: string;
}

export function VerifyEmail() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const { isLoading, isSuccess } = useQueryConfirmEmail(token);

  if (!token) {
    return <ParamNotFound />;
  }


  if (isLoading) {
    return <p>Verificando...</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-full">
      {isSuccess ? <SuccessMessage /> : <ErrorMessage />}
    </div>
  );
}
