import { clsx } from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export interface PaymentMethodCardProps {
  logo: string | StaticImport;
  alt: string;
  isAvailable: boolean;
}

export function PaymentMethodCard({
  logo,
  alt,
  isAvailable,
}: PaymentMethodCardProps) {
  return (
    <div
      className={clsx(
        "border-2 border-zinc-300 p-4 w-fit rounded cursor-pointer",
        {
          "hover:brightness-75 hover:bg-zinc-50 transition-all": isAvailable,
          "cursor-not-allowed": !isAvailable,
        }
      )}
    >
      <Image
        src={logo}
        alt={alt}
        className="w-[120px] h-[120px] object-contain mx-auto rounded-xl"
      />
    </div>
  );
}
