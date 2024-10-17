import { Metadata } from "next";
import { Disclaimer } from "./components/disclaimer";
import { Products } from "./components/products";
import { Resume } from "./components/resume";

export const metadata: Metadata = {
  title: "RN Distribuidora | Meu carrinho",
  description: "E-commerce da RN Distribuidora",
};
export default function ShoppingCartPage() {
  return (
    <div className="mx-20 mt-36 md:mt-48 mb-24">
      <h1 className="font-medium text-2xl">Meu carrinho</h1>

      <Disclaimer />
      <div className="flex flex-row gap-14">
        <Products />
        <Resume />
      </div>
    </div>
  );
}
