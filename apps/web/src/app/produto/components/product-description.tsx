interface ProductDescriptionProps {
  children: string;
}

export function ProductDescription({ children }: ProductDescriptionProps) {
  return (
    <div className="">
      <div className="text-lg flex flex-col gap-4">
        <h2 className="text-xl font-medium">Descrição</h2>
        <p className="leading-relaxed text-zinc-700">{children}</p>
      </div>
    </div>
  );
}