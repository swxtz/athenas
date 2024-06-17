import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | null,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT" | "BRL";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "USD", notation = "compact" } = options;

  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const numericPrice = typeof price === "string" ? Number.parseFloat(price) : price!;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}
