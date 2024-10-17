import { convertToReal } from "@/utils/convert-to-real";

export function ResumePriceDisplay() {
  return (
    <div className="text-brown-500 flex flex-row justify-between font-inter">
      <span className="font-semibold">Total: </span>
      <span className="font-semibold">{convertToReal(2000 / 100)}</span>
    </div>
  );
}
