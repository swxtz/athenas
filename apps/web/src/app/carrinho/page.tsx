import { Disclaimer } from "./components/disclaimer";
import { Products } from "./components/products";

export default function ShoppingCartPage() {
  return (
    <div className="container mt-48 mb-24">
      <h1 className="font-medium text-2xl">Meu carrinho</h1>

      <Disclaimer />
      <Products />
    </div>
  );
}
