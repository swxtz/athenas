"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  return (
    <div className="flex flex-col items-center justify-center h-[600px]">
      <h2 className="text-4xl">Pagina não encontrada.</h2>
      <div className="flex flex-col gap-4 mt-12">
        <Button variant={"primary"} onClick={handleBack}>
          <ArrowLeft /> Voltar para pagina anterior
        </Button>
      </div>
    </div>
  );
}
