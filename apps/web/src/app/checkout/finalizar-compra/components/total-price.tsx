"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useQueryState } from "nuqs";
import Link from "next/link";
import { ResumePriceDisplay } from "@/app/carrinho/components/resume-price-display";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export function TotalPrice() {
  const context = useCart();
  const router = useRouter();
  const { toast } = useToast();

  const [payment, setPayment] = useQueryState("payment");
  const [freight, setFreight] = useQueryState("freight");

  function handleNavigation() {
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

    const destination = `/checkout/pagamento?payment=${encodeURIComponent(
      payment
    )}&freight=${encodeURIComponent(freight)}`;

    router.push(destination);
  }

  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

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
