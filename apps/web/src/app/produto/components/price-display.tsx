import { calculateTotalWithInterest } from "@/utils/calculate-total-with-interest";
import { convertToReal } from "@/utils/convert-to-real";

interface PriceProps {
  price: number;
  numberOfInstallments: number;
  fees: number;
  discont: boolean;
  discountAmount: number;
  isPayable: boolean;
  isDesktop: boolean;
}

export function PriceDisplay({
  price,
  numberOfInstallments,
  fees,
  discont,
  discountAmount,
  isPayable,
  isDesktop,
}: PriceProps) {
  return (
    <>
      {!isDesktop ? (
        // Mobile
        <div className="flex flex-col gap-1">
          {discont ? (
            <div className="flex flex-col gap-1">
              <span className="text-3xl text-zinc-700">
                {convertToReal(price - discountAmount)}
              </span>
              <span className="text-sm text-zinc-500 line-through">
                {convertToReal(price)}
              </span>
              {isPayable && (
                <span className="text-sm text-zinc-500">
                  {numberOfInstallments}x de{" "}
                  {convertToReal(
                    calculateTotalWithInterest(
                      numberOfInstallments,
                      fees,
                      price
                    )
                  )}{" "}
                  sem juros
                </span>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <span className="text-3xl text-zinc-700">
                {convertToReal(price)}
              </span>
              {isPayable && (
                <span className="text-sm text-zinc-500">
                  {numberOfInstallments}x de{" "}
                  {convertToReal(
                    calculateTotalWithInterest(
                      numberOfInstallments,
                      fees,
                      price
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
          {discont ? (
            // Desktop
            <div className="flex flex-col gap-0.5">
              <span className="text-3xl text-zinc-700">
                {convertToReal(price - discountAmount)}
              </span>
              <span className="text-sm text-zinc-500 line-through">
                {convertToReal(price)}
              </span>
              {isPayable && (
                <span className="text-sm text-zinc-500">
                  {numberOfInstallments}x de{" "}
                  {convertToReal(
                    calculateTotalWithInterest(
                      numberOfInstallments,
                      fees,
                      price
                    )
                  )}{" "}
                  sem juros
                </span>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <span className="text-3xl text-zinc-700">
                {convertToReal(price)}
              </span>
              {isPayable && (
                <span className="text-sm text-zinc-500">
                  {numberOfInstallments}x de{" "}
                  {convertToReal(
                    calculateTotalWithInterest(
                      numberOfInstallments,
                      fees,
                      price
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
