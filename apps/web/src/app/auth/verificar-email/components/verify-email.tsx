"use client";

import { useMutationVerifyEmail } from "@/hooks/mutations/verify-email";
import { SuccessMessage } from "./success-message";
import { ErrorMessage } from "./error-message";
import { useQueryConfirmEmail } from "@/hooks/queries/confirm-email";
import { useSearchParams } from "next/navigation";
import { ParamNotFound } from "./param-not-found";
import { useQueryState } from "nuqs";
import { EmailLoading } from "./email-loading";

export function VerifyEmail() {
  const [token] = useQueryState("token");

  const { isLoading, isSuccess } = useQueryConfirmEmail(token);

  if (!token) {
    return <ParamNotFound />;
  }

  if (isLoading) {
    return <EmailLoading />;
  }

  return (
    <div className="flex flex-col items-center min-h-full">
      {isSuccess ? <SuccessMessage /> : <ErrorMessage />}
    </div>
  );
}
