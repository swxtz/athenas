import { convertToReal } from "@/utils/convert-to-real";
import { getDeliveryInfo } from "@/utils/delivery-days";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface FreightCardProps extends HTMLAttributes<HTMLLabelElement> {
  price: number;
  deliveryDate: Date;
  logo: string | StaticImport;
}

export function FreightCard({ price, deliveryDate, logo }: FreightCardProps) {
  return (
    <div className="px-4 py-5 bg-white rounded w-fit md:w-[600px]">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-black font-medium text-sm md:text-1xl">
              {convertToReal(price / 100)}
            </span>
            <span className="text-xs">
              Receba até: {getDeliveryInfo(deliveryDate.toDateString())}
            </span>
          </div>
          <div className=""></div>
        </div>

        <div className="w-fit h-fit border-1 border-zinc-200 p-2 rounded hover:border-zinc-400 transition-all">
          <Image
            src={logo}
            alt="sedex"
            className="w-[100px] h-[40px] object-contain mx-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
