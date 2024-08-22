import { Separator } from "@/components/ui/separator";

interface ProductDescriptionProps {
  children: string;
}

export function ProductDescription({ children }: ProductDescriptionProps) {
  return (
    <div className="">
      <div className="text-lg flex flex-col gap-4">
        <h2 className="text-xl font-medium">Descrição</h2>
        <Separator />
        <p className="text-zinc-600 leading-tight ">{children}</p>
      </div>
    </div>
  );
}