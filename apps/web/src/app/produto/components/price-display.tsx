import { calculateTotalWithInterest } from "@/utils/calculate-total-with-interest";
import { convertToReal } from "@/utils/convert-to-real";

interface PriceProps {
  price: number | undefined;
  numberOfInstallments: number;
  fees: number;
  discount: boolean;
  discountAmount: number;
  isPayable: boolean;
  isDesktop: boolean;
}

export function PriceDisplay({
  price,
  numberOfInstallments,
  fees,
  discount,
  discountAmount,
  isPayable,
  isDesktop,
}: PriceProps) {
  return (
    <>
      {!isDesktop ? (
        // Mobile
        <div className="flex flex-col gap-1">
          {discount ? (
            <div className="flex flex-col gap-1">
              <span className="text-3xl text-zinc-700">
                {convertToReal((price ?? 0) - discountAmount)}
              </span>
              <span className="text-sm text-zinc-500 line-through">
                {convertToReal(price ?? 0)}
              </span>
              {isPayable && (
                <span className="text-sm text-zinc-500">
                  {numberOfInstallments}x de{" "}
                  {convertToReal(
                    calculateTotalWithInterest(
                      numberOfInstallments,
                      fees,
                      (price ?? 0)
                    )
                  )}{" "}
                  sem juros
                </span>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <span className="text-3xl text-zinc-700">
                {convertToReal(price ?? 0)}
              </span>
              {isPayable && (
                <span className="text-sm text-zinc-500">
                  {numberOfInstallments}x de{" "}
                  {convertToReal(
                    calculateTotalWithInterest(
                      numberOfInstallments,
                      fees,
                      (price ?? 0)
                    )
                  )}{" "}
                  sem juros
                </span>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          {discount ? (
            // Desktop
            <div className="flex flex-col gap-0.5">
              <span className="text-3xl text-zinc-700">
                {convertToReal((price ?? 0) / 100 - discountAmount)}
              </span>
              <span className="text-sm text-zinc-500 line-through">
                {convertToReal((price ?? 0) / 100)}
              </span>
              {isPayable && (
                <span className="text-sm text-zinc-500">
                  {numberOfInstallments}x de{" "}
                  {convertToReal(
                    calculateTotalWithInterest(
                      numberOfInstallments,
                      fees,
                      (price ?? 0) / 100
                    )
                  )}{" "}
                  sem juros
                </span>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <span className="text-3xl text-zinc-700">
                {convertToReal((price ?? 0))}
              </span>
              {isPayable && (
                <span className="text-sm text-zinc-500">
                  {numberOfInstallments}x de{" "}
                  {convertToReal(
                    calculateTotalWithInterest(
                      numberOfInstallments,
                      fees,
                      (price ?? 0) / 100
                    )
                  )}{" "}
                  sem juros
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
