interface CategoryDivisorProps {
  title: string;
}

export function CategoryDivisor({ title }: CategoryDivisorProps) {
  return (
    <div className="font-bold text-xl w-fit border-b-[3px] rounded-b-sm border-orange-500 text-zinc-500">
      <h2>{title}</h2>
    </div>
  );
}
