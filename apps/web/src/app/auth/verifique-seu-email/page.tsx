import { useQueryState } from "nuqs";
import { Helper } from "./components/helper";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "RN Distribuidora | Verifique seu email",
  description: "E-commerce da RN Distribuidora",
};

export default function VerifyYourEmailPage() {
  return (
    <div className="nav-container container">
      <div className="flex flex-col mx-auto items-center justify-center mt-12">
        <h1 className="text-3xl font-bold text-gray-800">
          Verifique seu e-mail para continuar!
        </h1>
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded mb-6 mt-6">
          <strong>Importante:</strong> você tem <strong>7 dias</strong> para
          confirmar seu e-mail. Após esse prazo, será necessário criar uma nova
          conta para acessar o aplicativo.
        </div>
        <Helper />
        <p className="text-gray-600 text-center my-6">
          Se não encontrar o e-mail, confira também sua pasta de spam ou lixo
          eletrônico. O e-mail pode levar alguns minutos para chegar.
        </p>
        <div className="text-center mb-6">
          <Link href="#">
            <span className="text-blue-500 hover:underline">
              Não recebeu o e-mail? Clique aqui para reenviar
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}
