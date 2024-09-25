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
        <p className="text-zinc-600 leading-tight ">{text}</p>
      </div>
    </div>
  );
}