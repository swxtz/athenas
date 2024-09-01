

import { useSearchParams } from "next/navigation";
import { ParamNotFound } from "./components/param-not-found";
import { useMutationVerifyEmail } from "@/hooks/mutations/verify-email";
import { SuccessMessage } from "./components/sucess-message";
import { VerifyEmail } from "./components/verify-email";

export default function VerifyEmailPage() {
  
  

  return (
    <div className="flex flex-col items-center min-h-full">
      <VerifyEmail />
    </div>
  );
}
