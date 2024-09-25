import { Suspense } from "react";
import { VerifyEmail } from "./verify-email";

export function SuspenceVerifyEmail() {
  return (
    <div className="">
      <Suspense>
        <VerifyEmail />
      </Suspense>
    </div>
  );
}