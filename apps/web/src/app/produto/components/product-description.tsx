import { Separator } from "@/components/ui/separator";

interface ProductDescriptionProps {
  text: string | undefined;
}

export function ProductDescription({ text }: ProductDescriptionProps) {
  return (
    <div className="">
      <div className="text-lg flex flex-col gap-4">
        <h2 className="text-xl font-medium">Descrição</h2>
        <Separator />
        <p className="text-zinc-600 leading-tight ">{text}pão de 73g é macio e leve, ideal para hambúrgueres. Com 12 unidades por embalagem, oferece praticidade para lanchonetes e eventos. Seu sabor delicado realça os recheios, tornando cada lanche mais saboroso.
        Perfeito para diversas preparações, é a escolha ideal para quem busca qualidade e versatilidade em suas refeições. Experimente e eleve seus lanches a um novo nível!</p>
        {/* ATENCA0 SARAH COMENTOU PARA TESTAR A DESCRIÇÃO MOBILE<p className="text-zinc-600 leading-tight ">{text}</p> */}
      </div>
    </div>
  );
}