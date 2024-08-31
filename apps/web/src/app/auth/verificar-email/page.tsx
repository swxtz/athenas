"use client";

import { useSearchParams } from "next/navigation";
import { ParamNotFound } from "./components/param-not-found";
import { useMutationVerifyEmail } from "@/hooks/mutations/verify-email";
import { SuccessMessage } from "./components/sucess-message";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const { mutate, isSuccess } = useMutationVerifyEmail();

  const token = searchParams.get("token");

  if (!token) {
    return <ParamNotFound />;
  }
  mutate(token);

  if (isSuccess) {
    return <SuccessMessage />;
  }

  return (
    <div className="flex flex-col items-center min-h-full">
      <h1 className="text-3xl mt-32 md:mt-64 font-bold text-gray-800">
        Verifique seu email
      </h1>
      <p className="text-gray-600 mt-4">
        Enviamos um email de verificação para você. Verifique sua caixa de
        entrada.
      </p>
    </div>
  );
}
