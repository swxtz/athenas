"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import QRCode from "qrcode.react";

export function Pix() {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText("https://pornhub.com");
    toast({
      title: "Dados copiados",
      description:
        "Os dados do pagamento foram copiados para a área de transferência.",
      variant: "default",
    });
  };
  
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <h2 className="text-xl font-semibold mb-4">Pagamento via PIX</h2>
      <QRCode value="https://pornhub.com" size={256} className="mb-4" />
      <Button className="bg-green-600 text-white" onClick={handleCopy}>
        Copiar Dados do PIX
      </Button>
      <p className="mt-2 text-sm text-gray-500">
        Aponte seu aplicativo de pagamentos para o QR Code acima.
      </p>
    </div>
  );
}
