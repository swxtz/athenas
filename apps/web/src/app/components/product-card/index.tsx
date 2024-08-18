import { convertToReal } from "@/utils/convert-to-real";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface IProductCard {
  name: string;
  image: string | StaticImport;
  price: number;
}

export function ProductCard({ image, name, price }: IProductCard) {

  const convertedPrice = convertToReal(price);
  
  return (
    <div>
      <div className="bg-white/50 rounded-[10px] flex itens-center justify-center w-[200px] px-4 py-2 flex-col">
        <Image src="https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp" alt="" width={250} height={250} className="w-[100px]" />

        <div className="mt-4 flex flex-col">
          <span className="text-base font-rubik">{name}</span>
          <span className="text-lg">{convertedPrice}</span>
        </div>
      </div>
    </div>
  );
}