import { Button } from "@/components/ui/button";

export function ParamNotFound() {
  return (
    <div className="flex flex-col items-center min-h-full">
      <h1 className="text-3xl mt-32 md:mt-64 font-bold text-gray-800">
        Verifique seu email
      </h1>
      <p className="text-gray-600 mt-4 flex flex-col items-center gap-1">
        Enviamos um email de verificação para você. Verifique sua caixa de
        entrada.{" "}
        <span>
          Se você não recebeu o email, clique no botão abaixo para reenviar.
        </span>
      </p>

      <div className="mt-4 flex items-center flex-col">
        <Button
          className="mt-4 text-white px-4 py-2 rounded-md w-fit"
          variant={"primary"}
        >
          Reenviar email
        </Button>
      </div>
    </div>
  );
}
