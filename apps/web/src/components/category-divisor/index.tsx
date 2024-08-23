interface CategoryDivisorProps {
  title: string;
}

export function CategoryDivisor({ title }: CategoryDivisorProps) {
  return (
    <div className="font-medium text-xl w-fit ">
      <h2>{title}</h2>
      <div className="mt-4 bg-amber-800 rounded w-full h-1" />
    </div>
  );
}
