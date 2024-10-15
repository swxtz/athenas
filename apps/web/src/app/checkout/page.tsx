import { getServerSession } from "next-auth";
import nextAuthOptions from "../api/auth/[...nextauth]/providers";
import { redirect } from "next/navigation";

export default async function CheckoutPage() {
  const session = await getServerSession(nextAuthOptions);

  if(!session) {
    redirect("/auth/login");
  }

  return (
    <div className="mt-48">
      <h2>checkout</h2>
    </div>
  );
}