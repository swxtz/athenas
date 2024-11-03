import nextAuthOptions from "@/app/api/auth/[...nextauth]/providers";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FreightCard } from "./components/freight-card";

export default async function PaymentMethod() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/auth/login");
  }

  const today = new Date(); // Data atual
  const twoDaysFromNow = new Date(today); // Cria uma nova data a partir de hoje

  // Adiciona dois dias
  twoDaysFromNow.setDate(today.getDate() + 15);

  return (
    <div className="mt-48 container">
      <div className="">
        <h1 className="font-medium text-2xl">Finalizar compra</h1>

        <div className="">
          <FreightCard price={100} deliveryDate={twoDaysFromNow}  />
        </div>
      </div>
    </div>
  );
}
