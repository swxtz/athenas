import { auth } from "@/app/api/auth/[...nextauth]/providers";
import { redirect } from "next/navigation";
import { Pix } from "./components/pix";

export default async function PaymentPage() {
  const session = await auth();
  

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="mt-48 mb-12 container">
      <Pix />
    </div>
  );
}
