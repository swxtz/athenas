import { getServerSession } from "next-auth";
import nextAuthOptions from "../api/auth/[...nextauth]/providers";

export default async function MyPurchasesPage() {
  const session = await getServerSession(nextAuthOptions);

  console.log(session);

  return (
    <div className="">
      <h3>TESTE</h3>
      
    </div>
  );
}
