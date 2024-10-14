import Image from "next/image";
import { ProductBreadcrumb } from "./product-breadcrumb";
import { ProductAsideImages } from "./products-aside-images";
import { ProductImage } from "./product-image";
import { ProductStars } from "./product-starts";
import { PriceDisplay } from "./price-display";

interface ProductDisplayDesktopProps {
    coverImage: string,
    name: string
    price: number;
    fees: number;
    numberOfInstallments: number;
}

export function ProductDisplayDesktop({
  coverImage, 
  name,
  price,
  fees,
  numberOfInstallments,
}: ProductDisplayDesktopProps) {
  return (
    <div className="bg-slate-400 container flex flex-col">
      <div className="">
        <ProductBreadcrumb />
      </div>
      <div className="flex">
        <div>
          <div className=" bg-fuchsia-600 flex flex-col">
            <ProductAsideImages coverImage={coverImage} name={name} />
            <ProductAsideImages coverImage={coverImage} name={name} />
            <ProductAsideImages coverImage={coverImage} name={name} />
          </div>
        </div>
        <div className="bg-stone-500">
          <div>
            <ProductImage coverImage={coverImage} name={name} />
          </div>
        </div>
        <div>
          <div>
            <p>mais vendidos</p>
          </div>
          <div>
            <h1>Pão de Hamburguer Monaco G CT QIMBO QSR 12x73g</h1>
          </div>
          <div className="flex">
            <div>
              <h3>4.8|</h3>
            </div>
            <ProductStars size={24} />
            <div>
              <h3>Em estoque </h3>
            </div>
          </div>
          <div>
            <PriceDisplay
              fees={fees}
              numberOfInstallments={numberOfInstallments}
              price={price}
              discount={true}
              discountAmount={3.99}
              isPayable={true}
              isDesktop={false}
            />
          </div>
          <div className="text-sm text-justify flex ">
            <p>O Pão de Hambúrguer Monaco G CT da QIMBO é a escolha perfeita para quem busca qualidade e sabor em suas refeições. Com 12 unidades de 73g cada, esses pães são macios, com uma textura leve e arejada, ideal para envolver suculentos hambúrgueres e deliciosos recheios.</p>
          </div>
        </div>
      </div>
    </div>
  );
}