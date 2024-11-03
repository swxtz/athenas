import { redirect } from "next/navigation";
import { auth } from "../api/auth/[...nextauth]/providers";

export default async function CheckoutPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="mt-48">
      <h2>checkout</h2>
    </div>
  );
}
