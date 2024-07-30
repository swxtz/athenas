import { ShoppingBasket } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ProductsCardProps {
  image: string | StaticImport;
  price: number;
  name: string;
  description: string;
}

export function ProductsCard({
  name,
  image,
  price,
  description,
}: ProductsCardProps) {
  const convertedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <div className="flex flex-col items-center w-fit">
      <Image src={image} alt={name} className="w-[150px] rounded-md" />
      <p className="text-left w-32 text-sm font-medium mt-4 mb-2">{name}</p>
      <p className="flex gap-2 text-xl font-semibold">{convertedValue}</p>
    </div>
  );
}
