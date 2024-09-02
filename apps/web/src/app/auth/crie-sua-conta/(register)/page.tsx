import { Separator } from "@/components/ui/separator";
import { RegisterForm } from "./components/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RN Distribuidora | Crie sua conta",
  description: "Ecommerce da RN Distribuidora",
};

export default function RegisterPage() {
  return (
    <div className="mt-12 container py-8 w-96 rounded shadow bg-zinc-100">
      <h2 className="text-center font-semibold text-xl">Bem-vindo de volta!</h2>
      <Separator className="w-4/5 my-4 mx-auto" />
      <RegisterForm />
    </div>
  );
}