import { getServerSession } from "next-auth";
import nextAuthOptions from "../api/auth/[...nextauth]/providers";
import { redirect } from "next/navigation";

export default async function MyPurchasesPage() {
  const session = await getServerSession(nextAuthOptions);

  if(!session) {
    return redirect("/auth/login");
  }

  return (
    <div className="">
      <h3>TESTE</h3>

    </div>
  );
}
