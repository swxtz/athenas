
import { redirect } from "next/navigation";
import { auth } from "../api/auth/[...nextauth]/providers";

export default async function MyPurchasesPage() {
  const session = await auth();

  if(!session) {
    return redirect("/auth/login");
  }

  return (
    <div className="">
      <h3>TESTE</h3>

    </div>
  );
}
