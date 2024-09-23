import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function EmptyCart() {
  return (
    <div className="container mt-9 bg-white rounded-[10px]">
      <div className="flex flex-col items-center justify-center h-[300px]">
        <p className="text-lg font-semibold text-brown-500 font-inter">
          Seu carrinho está vazio
        </p>
        <p className="text-sm text-brown-500 font-inter">
          <Button variant={"primary"} className="mt-4">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft />
              <span>Ver Produtos</span>
            </Link>
          </Button>
        </p>
      </div>
    </div>
  );
}
