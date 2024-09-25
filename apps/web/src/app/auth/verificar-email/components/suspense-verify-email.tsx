import { Suspense } from "react";
import { VerifyEmail } from "./verify-email";

export function SuspenseVerifyEmail() {
  return (
    <div className="">
      <Suspense>
        <VerifyEmail />
      </Suspense>
    </div>
  );
}