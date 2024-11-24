import { convertToReal } from "@/utils/convert-to-real";
import Image from "next/image";
import { QuantityButton } from "./quantity-button";
import { truncateText } from "@/utils/truncate-text";
import Link from "next/link";

interface ProductCardMobileProps {
  name: string;
  coverImage: string;
  price: number;
  quantity: number;
  slug: string;
  handleDecrementQuantity: () => void;
  handleIncrementQuantity: () => void;
  handleRemoveProduct: () => void;
}

export function ProductCardMobile({
  name,
  coverImage,
  price,
  quantity,
  slug,
  handleDecrementQuantity,
  handleIncrementQuantity,
  handleRemoveProduct,
}: ProductCardMobileProps) {
  const linkToProduct = `/produto/${slug}`;

  return (
    <div className="flex gap-4 w-full px-4">
      <Link
        href={linkToProduct}
        className="flex items-center justify-center h-full w-[100px]"
      >
        <Image
          src={coverImage}
          alt={name}
          width={400}
          height={400}
          className="w-[50px] h-[100px] object-contain mx-auto rounded-xl"
        />
      </Link>
      <div className="w-full">
        <div className="flex flex-col justify-between h-full w-full">
          {name && (
            <Link href={linkToProduct}>
              <h2 className="text-sm font-medium  font-inter text-brown-500">
                {truncateText(name, 6)}
              </h2>
            </Link>
          )}

          <div className="flex items-center justify-between w-full">
            <p className="font-semibold text-sm text-brown-500 font-inter">
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
