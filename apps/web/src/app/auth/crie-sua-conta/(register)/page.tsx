import { Separator } from "@/components/ui/separator";
import { RegisterForm } from "./components/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RN Distribuidora | Crie sua conta",
  description: "Ecommerce da RN Distribuidora",
};

export default function RegisterPage() {
  return (

    <div className="w-full bg-slate-50 rounded-lg container mt-9 md:w-1/2 py-11 text-2xl md:flex flex-col ">
      <div className="w-full container text-center flex flex-col gap-4">
        <h2 className="font-semibold container text-x2l">Seja Bem-vindo!</h2>
        <h3 className="font-semibold flex w-full text-xs">Crie sua conta</h3>
        <RegisterForm />
        
      </div>
    </div>
  );
}
