interface CategoryDivisorProps {
  title: string;
}

export function CategoryDivisor({ title }: CategoryDivisorProps) {
  return (
    <div className="font-medium text-xl w-fit border-b-[3px] rounded-b-sm border-orange-500">
      <h2>{title}</h2>
    </div>
  );
}
