"use client";

import { Button } from "@/components/ui/button";

import { ResumePriceDisplay } from "@/app/carrinho/components/resume-price-display";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

import { useQueryState } from "nuqs";
import { useMutationCreateBuyOrder } from "@/hooks/mutations/create-buy-order-pix";
import { api } from "@/lib/axios";
import { auth } from "@/app/api/auth/[...nextauth]/providers";
import { useSession } from "next-auth/react";

interface TotalPriceProps {
  itens: Item[];
}

interface Item {
  id: string;
  quantity: number;
}

async function createBuyOrder(data: any, token: string) {
  const res = await api.post("/payments/create-buy-order/pix", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}

export function TotalPrice({ itens }: TotalPriceProps) {
  const session = useSession();

  const router = useRouter();
  const { toast } = useToast();

  const [payment, setPayment] = useQueryState("payment");
  const [freight, setFreight] = useQueryState("freight");

  async function handleNavigation() {
    if (!payment) {
      toast({
        title: "Selecione um método de pagamento",
        variant: "destructive",
      });

      return;
    }

    if (!freight) {
      toast({
        title: "Selecione uma forma de frete",
        variant: "destructive",
      });

      return;
    }

    if (!session?.data?.token) {
      toast({
        title: "Token não encontrado ou sessão não iniciada.",
        variant: "destructive",
      });
      return; // Retorna e impede que o código abaixo seja executado
    }

    console.log(itens);

    const products = {
      products: itens.map((product) => ({
        id: product.id,
        amount: product.quantity, // Multiplicando para obter o valor "amount" como no exemplo
      })),
    };

    console.log(products);
    console.log(session.data.token);
    const res = await createBuyOrder(products, session.data.token);

    if (res.status === 500) {
      toast({
        title: "Algo deu errado! tente mais tarde mais tarde",
        variant: "destructive",
      });

      return;
    }

    if (res.status !== 201) {
      toast({
        title: "Algo deu errado! tente mais tarde mais tarde",
        variant: "destructive",
      });

      return;
    }

    if (res.status !== 201) {
      toast({
        title: "Algo deu errado! tente mais tarde mais tarde",
        variant: "destructive",
      });
    }
    if (res.status === 201) {
      toast({
        title:
          "Em alguns segundo vc vai redirecionado para pagina de pagamento",
        variant: "default",
      });
    }

    console.log(res.data.data.buyOrderId);

    const destination = `/checkout/pagamento?payment=${encodeURIComponent(
      payment
    )}&freight=${encodeURIComponent(freight)}`;

    setTimeout(() => {
      router.push(destination);
    }, 3000);
  }
  return (
    <div className="flex flex-col gap-4 justify-center py-3 container">
      <ResumePriceDisplay />
      <Button
        className="mx-auto bg-green-600 w-full font-semibold text-white text-lg hover:bg-green-700 hover:text-zinc-200 py-4"
        onClick={handleNavigation}
      >
        Continuar para o Pagamento
      </Button>
    </div>
  );
}
