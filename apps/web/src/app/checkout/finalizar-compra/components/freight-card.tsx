import { convertToReal } from "@/utils/convert-to-real";
import { getDeliveryInfo } from "@/utils/delivery-days";

interface FreightCardProps {
  price: number;
  deliveryDate: Date;
}



export function FreightCard({ price, deliveryDate }: FreightCardProps) {


  return (
    <div className="px-4 py-5 bg-white rounded">
      <div className="flex gap-4">
        <span className="text-black font-medium text-1xl">{convertToReal(price / 100)}</span>
        <span>Receba até: {getDeliveryInfo(deliveryDate.toDateString())}</span>
      </div>
    </div>
  );
} 