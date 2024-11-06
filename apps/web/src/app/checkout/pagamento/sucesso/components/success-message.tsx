"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";

export function SuccessMessage() {
  const [paymentId, setPaymentId] = useQueryState("paymentId");
  const [paymentMethod, setPaymentMethod] = useQueryState("paymentMethod");
  const [paymentDate, setPaymentDate] = useQueryState("paymentDate",);

  const router = useRouter();

  const datePlaceholder = "2024-11-06T06:25:04.041Z";
  const date = new Date(paymentDate || datePlaceholder);

  const formattedDate = date.toLocaleString("pt-BR", {
    weekday: "long",   // Nome do dia da semana
    year: "numeric",   // Ano com 4 dígitos
    month: "long",     // Nome completo do mês
    day: "numeric",    // Dia do mês
    hour: "numeric",   // Hora
    minute: "numeric", // Minuto
    second: "numeric", // Segundo
  });

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-6">
      <div className="flex flex-col items-center">
        <div className="p-4 rounded-full bg-green-600 text-white">
          <ShoppingBag size={32}/>
        </div>
        <h1 className="text-3xl font-semibold text-green-600 mt-4">
          Pagamento Realizado com Sucesso!
        </h1>
        <p className="text-lg mt-2">
          O ID do seu pagamento é:{" "}
          <span className="font-bold">{paymentId}</span>
        </p>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xl font-medium text-green-600">
          <strong>Status:</strong> Pagamento Confirmado
        </p>
        <p className="text-lg text-green-600">
          <strong>Valor pago:</strong> R$100,00
        </p>
        <p className="text-lg text-green-600">
          <strong>Forma de pagamento:</strong> {paymentMethod}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Pagamento realizado em: {formattedDate}
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <Button
          onClick={() => router.push("/")}
          variant={"primary"}
        >
          Voltar para a Página Inicial
        </Button>
        {/* <button
          onClick={() => router.push("/historico")}
          className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition"
        >
          Ver Histórico de Compras
        </button> */}
      </div>
    </div>
  );
}
