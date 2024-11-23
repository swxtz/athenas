import { Metadata } from "next";
import { Disclaimer } from "./components/disclaimer";
import { Products } from "./components/products";
import { Resume } from "./components/resume";
import { MobileResume } from "./components/mobile-resume";

export const metadata: Metadata = {
  title: "RN Distribuidora | Meu carrinho",
  description: "E-commerce da RN Distribuidora",
};
export default function ShoppingCartPage() {
  return (
    <div className="mx-8 md:mx-20 mt-36 md:mt-48 mb-24">
      <h1 className="font-medium text-2xl">Meu carrinho</h1>

      <Disclaimer />
      <div className="flex flex-col md:flex-row gap-14">
        <Products />
        <div className="hidden md:flex">
          <Resume />
        </div>

        <div className="md:hidden">
          <MobileResume />
        </div>
      </div>
    </div>
  );
}
