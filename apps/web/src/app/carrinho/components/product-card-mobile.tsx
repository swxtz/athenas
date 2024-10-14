import { convertToReal } from "@/utils/convert-to-real";
import Image from "next/image";
import { QuantityButton } from "./quantity-button";

interface ProductCardMobileProps {
  name: string;
  coverImage: string;
  price: number;
  quantity: number;
  handleDecrementQuantity: () => void;
  handleIncrementQuantity: () => void;
  handleRemoveProduct: () => void;
}

export function ProductCardMobile({
  name,
  coverImage,
  price,
  quantity,
  handleDecrementQuantity,
  handleIncrementQuantity,
  handleRemoveProduct,
}: ProductCardMobileProps) {
  return (
    <div className="flex gap-4 w-full">
      <div className="flex items-center justify-center h-full">
        <Image
          src={coverImage}
          alt={name}
          width={400}
          height={400}
          className="w-[50px] h-[100px] object-contain mx-auto rounded-xl"
        />
      </div>
      <div className="w-full">
        <div className="flex flex-col justify-between h-full w-full">
          <h2 className="text-sm font-semibold font-inter text-brown-500">
            {name}
          </h2>

          <div className="flex items-center justify-between w-full">
            <p className="font-semibold text-sm  text-brown-500 font-inter">
              {convertToReal((price * quantity) / 100)}
            </p>

            <QuantityButton
              onDecrement={handleDecrementQuantity}
              onIncrement={handleIncrementQuantity}
              onRemoveProduct={handleRemoveProduct}
              quantity={quantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
