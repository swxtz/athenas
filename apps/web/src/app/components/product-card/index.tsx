import { TruncateText } from "@/components/ui/truncate-text";
import { convertToReal } from "@/utils/convert-to-real";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import image from "next/image";
import Image from "next/image";
import Link from "next/link";

export interface IProductCard {
  name: string;
  image: string | StaticImport;
  price: number;
  productLink: string;
}

export function ProductCard({ image, name, price, productLink }: IProductCard) {
  const convertedPrice = convertToReal(price);

  return (
    <Link href={productLink} className="bg-white/50 rounded-[10px] flex itens-center justify-center w-[150px] md:w-[200px] px-4 py-2 flex-col">
      <Image
        src={image}
        alt=""
        width={250}
        height={250}
        className="w-[75px] md:w-[100px] mx-auto"
      />

      <div className="mt-4 flex flex-col gap-2">
        <TruncateText
          text={name}
          maxLength={30}
          className="text-base font-rubik"
        />
        <span className="text-lg font-montserrat font-medium">{convertedPrice}</span>
      </div>
    </Link>
  );
}
