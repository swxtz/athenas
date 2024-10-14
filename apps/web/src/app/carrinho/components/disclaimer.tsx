import Link from "next/link";

export function Disclaimer() {
  return (
    <div className="mt-10">
      <div className="text-sm text-black/80 bg-zinc-200 border-l-[4px] border-amber-500 py-2 md:py-4 flex items-center rounded">
        <p className="ml-4">
          Ao clicar em &quot;Finalizar compra&quot;, você concorda com os{" "}
          <Link href="/politica-de-privacidade" className="underline">
            Política de Privacidade
          </Link>{" "}
          e{" "}
          <Link href="/termos-de-uso" className="underline">
            Termos de Uso
          </Link>{" "}
          da nossa loja.
        </p>
      </div>
    </div>
  );

}
