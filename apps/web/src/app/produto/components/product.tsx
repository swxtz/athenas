"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cuid } from "@/utils/cuid";
import { Heart, Share2, Star } from "lucide-react";
import Image from "next/image";
import { PriceDisplay } from "./price-display";
import { Zipcode } from "./zipcode";
import { SectionDivisor } from "./section-divisor";
import nookies from "nookies";
import { ProductDescription } from "./product-description";
import { RWebShare } from "react-web-share";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ProductStars } from "./product-starts";
import { useQueryGetProductById } from "@/hooks/queries/get-product-by-id";
import { useQueryGetProductBySlug } from "@/hooks/queries/get-product-by-slug";
import { useCart } from "@/hooks/use-cart";
import { ProductDisplayMobile } from "./product-display-mobile";
import { ProductDisplayDesktop } from "./product-display-desktop";
import { QuantityButton } from "@/app/carrinho/components/quantity-button";
import { BestSellers } from "@/app/components/best-sellers/index";
import { CardPurchaseFreight } from "./card-purchase-freight";

interface ProductCardProps {
  slug: string;
} 

export function Product({ slug }: ProductCardProps) {
  const cartContext = useCart();
  const isDesktop = useMediaQuery(768);
  const { data, isLoading, error } = useQueryGetProductBySlug(slug);



  const zipcodeCookie = nookies.get(null).zipcode;

  function handleAddToCart() {
    if (cartContext && data) {
      cartContext.dispatch({
        type: "ADD_ITEM",
        item: { id: data.id, quantity: 1 },
      });
    }
  }

  return (
    <>
      {isLoading && <div>Carregando...</div>}
      {error && <div>Erro ao carregar o produto</div>}

      {!isDesktop ? (
        <ProductDisplayMobile
          name={data?.name || ""}
          coverImage={data?.coverImage || ""}
          description={data?.description || ""}
          price={data?.price || 0}
          fees={12}
          numberOfInstallments={3}
        />
      ) : (
      //<ProductDisplayDesktop
      //   name={data?.name || ""}
      //   coverImage={data?.coverImage || ""}
      //   price={data?.price || 0}
      //   fees={12}
      //   numberOfInstallments={3} />

        <div className="min-w-screen min-h-screen bg-zinc-100 ">

          <div className="">
            <div className="container pt-8">
              <div className="container bg-white rounded-md shadow-md flex flex-row pb-8">
                <div className="p-12 py-36 mx-auto w-fit">
                  <Image
                    src={data?.coverImage || ""}
                    alt={data?.name || ""}
                    width={1000}
                    height={100}
                    sizes="(max-width: 500px) 13vw, (max-width: 500px) 13vw, 13vw"
                    className=" w-[300px] min-w-[100px]"
                  />
                </div>

                <div className="w-[1px] bg-border h-[500px] my-auto rounded mx-8" />

                <div className="mt-20 flex flex-col gap-2">
                  <div className="">
                    <p className="flex justify-center items-center rounded-2xl p-1 bg-orange-400 text-white text-xs w-28">
                      mais vendidos
                    </p>
                  </div>
                  <span className="text-2xl font-medium font-montserrat text-zinc-800">
                    {data?.name}
                  </span>
                  <div className="">
                    <ProductStars />
                  </div>
                  <div className="mt-4">
                    <PriceDisplay
                      fees={12}
                      numberOfInstallments={3}
                      price={data?.price}
                      discount={true}
                      discountAmount={3.99}
                      isPayable={true}
                      isDesktop={true}
                    />
                  </div>
                  <div className="  flex flex-col gap-2 text-zinc-600 leading-tight">
                    <p className="text-2xl font-semibold"> DESCRIÇÃO DO PRODUTO</p>
                    <p className="text-sm  text-justify  "> 
                    pão de 73g é macio e leve, ideal para hambúrgueres. Com 12 unidades por embalagem, oferece praticidade para lanchonetes e eventos. Seu sabor delicado realça os recheios, tornando cada lanche mais saboroso.
                    Perfeito para diversas preparações, é a escolha ideal para quem busca qualidade e versatilidade em suas refeições. Experimente e eleve seus lanches a um novo nível!
                    </p>
                  </div>
                  <div className="flex flex-row gap-16 py-5">

                    <QuantityButton />

                    <div className="flex flex-col gap-3 w-full">
                      <Button className="bg-green-700 hover:bg-green-800">
                        Compre agora
                      </Button>
                      <Button
                        variant={"outline"}
                        className="w-full"
                        onClick={handleAddToCart}
                      >
                        Adicionar ao carrinho
                      </Button>
                    </div>   
                  </div>
                </div>
                <div>
                  <CardPurchaseFreight />
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      )}
    </>
  );
}
