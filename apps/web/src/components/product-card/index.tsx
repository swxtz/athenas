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
  return (
    <div className="flex flex-col items-center ">
      <p className=" text-left w-32">{name}</p>
      <Image src={image} alt={name} className="w-1/2 rounded-md"/>
      <p>{description}</p>
      <p className="flex gap-2">
        <ShoppingBasket />
        {price}
      </p>
    </div>
  );
}
