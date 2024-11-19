import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { QuantityButton } from "./quantity-button";
import { convertToReal } from "@/utils/convert-to-real";
import { Skeleton } from "@/components/ui/skeleton";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { truncateText } from "@/utils/truncate-text";

interface ProductCardDesktopProps {
  name: string;
  coverImage: string;
  description: string;
  isLoading: boolean;
  slug: string;
  quantity: number;
  price: number;
  handleDecrementQuantity: () => void;
  handleIncrementQuantity: () => void;
  handleRemoveProduct: () => void;
}

export function ProductCardDesktop({
  coverImage,
  description,
  name,
  isLoading,
  slug,
  quantity,
  price,
  handleDecrementQuantity,
  handleIncrementQuantity,
  handleRemoveProduct,
}: ProductCardDesktopProps) {
  return (
    <div className="h-[180px] w-full flex flex-row gap-8">
      {isLoading && <Skeleton className="h-[150px] w-full rounded-xl" />}

      <div className="flex w-full justify-center flex-row gap-4">
        <Image
          src={coverImage}
          alt={name}
          className="w-[150px] object-contain mx-auto rounded-xl"
          width={150}
          height={150}
        />
        <div className="flex flex-col w-full">
          <h3 className="font-semibold text-lg text-brown-500 w-full font-inter">
            {name}
          </h3>

          <div className="flex justify-between mt-2">
            <div className="flex flex-col items-start justify-between">
              {description && (
                <p className="font-medium text-sm text-brown-500 font-inter">
                  {truncateText(description, 40)}
                </p>
              )}

              <Button variant={"link"} className="text-brown-500 px-0">
                <Link href={`/produto/${slug}`}>Ver produto</Link>
              </Button>
            </div>
            <div className="flex flex-col h-[120px] justify-between">
              <QuantityButton
                onDecrement={handleDecrementQuantity}
                onIncrement={handleIncrementQuantity}
                onRemoveProduct={handleRemoveProduct}
                quantity={quantity}
              />

              <p className="font-semibold text-lg text-end text-brown-500 font-inter">
                {convertToReal(price / 100)}
              </p>
              {quantity > 1 && (
                <p className="font-semibold text-sm text-end text-brown-500 font-inter">
                  {convertToReal((price * quantity) / 100)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
