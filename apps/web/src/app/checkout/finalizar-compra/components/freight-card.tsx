import { Badge } from "@/components/ui/badge";
import { convertToReal } from "@/utils/convert-to-real";
import { getDeliveryInfo } from "@/utils/delivery-days";
import Image from "next/image";
import sedex from "@/images/freight/sedex.png";

interface FreightCardProps {
  price: number;
  deliveryDate: Date;
}

export function FreightCard({
  price,
  deliveryDate,
}: FreightCardProps) {
  return (
    <div className="px-4 py-5 bg-white rounded w-[600px]">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-black font-medium text-1xl">
              {convertToReal(price / 100)}
            </span>
            <span>
              Receba até: {getDeliveryInfo(deliveryDate.toDateString())}
            </span>
          </div>
          <div className="">
            
          </div>
        </div>

        <div className="w-fit h-fit border-1 border-zinc-200 p-2 rounded hover:border-zinc-400 transition-all">
          <Image src={sedex} alt="sedex" className="w-[100px]" />
        </div>
      </div>
    </div>
  );
}
