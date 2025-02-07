import { redirect } from "next/navigation";
import { auth } from "@/app/api/auth/[...nextauth]/providers";
import { FreightSelect } from "./components/freight-select";
import { PaymentMethod } from "./components/payment-method";
import { Separator } from "@/components/ui/separator";
import { Resume } from "./components/resume";
import { MobileResume } from "./components/mobile-resume";

export default async function CheckoutPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  const today = new Date(); // Data atual
  const twoDaysFromNow = new Date(today); // Cria uma nova data a partir de hoje

  // Adiciona dois dias
  twoDaysFromNow.setDate(today.getDate() + 15);

  return (
    <div className="mt-48 mb-12 container">
      <div className="">
        <h1 className="font-medium text-2xl">Finalizar compra</h1>

        <div className="flex flex-col md:flex-row gap-1 md:gap-8">
          <div className="w-fit md:w-[40.625rem]">
            <div className="mt-4 w-fit md:w-full">
              <h2 className="text-xl text-zinc-700 mb-3">
                Selecione um método de pagamento{" "}
              </h2>
              <PaymentMethod />
            </div>

            <Separator className="hidden md:flex my-4" />

            {/* <div className="">
              <h2 className="text-xl text-zinc-700 mb-3">
                Selecione a opção de frete
              </h2>
              <FreightSelect />
            </div> */}
          </div>
          <div className="flex">
            <Separator orientation="vertical" className="hidden md:flex h-[500px] my-auto" />
          </div>
          <div className="">
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
}
