/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  useDocumentTitle("Pagína não encontrada | invite.me");

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  function handleGoBack(event: any) {
    event.preventDefault();

    navigate(-1);
  }

  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <h1 className="text-6xl">404</h1>
        <h2 className="text-2xl">Pagína não encontrada!</h2>

        <Button
          variant={"ghost"}
          className="flex gap-4 text-1xl"
          onClick={(e) => handleGoBack(e)}
        >
          <IoArrowBackOutline />
          Voltar para pagina anterior
        </Button>
      </div>
    </main>
  );
}
