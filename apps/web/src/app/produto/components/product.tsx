"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PriceDisplay } from "./price-display";
import nookies from "nookies";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ProductStars } from "./product-starts";
import { useQueryGetProductBySlug } from "@/hooks/queries/get-product-by-slug";
import { useCart } from "@/hooks/use-cart";
import { ProductDisplayMobile } from "./product-display-mobile";
import { CardPurchaseFreight } from "./card-purchase-freight";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductCardProps {
  slug: string;
}

export function Product({ slug }: ProductCardProps) {
  const cartContext = useCart();
  const isDesktop = useMediaQuery(768);
  const { data, isLoading, error } = useQueryGetProductBySlug(slug);
  const { toast } = useToast();

  const zipcodeCookie = nookies.get(null).zipcode;

  function handleAddToCart() {
    if (cartContext && data) {
      cartContext.dispatch({
        type: "ADD_ITEM",
        item: { id: data.id, quantity: 1, price: data.price },
      });
    }

    toast({
      title: "Produto adicionado ao carrinho",
      description: "Você acabou de adicionar um novo item ao carrinho.",
      variant: "success",
      action: (
        <ToastAction altText="Ver carrinho">
          <Link href="/carrinho">Ver Carrinho</Link>
        </ToastAction>
      ),
    });
  }

  return (
    <>
      {isLoading && (
        <div className="nav-container">
          <Skeleton className="w-4/5 h-[500px] mx-auto" />
        </div>
      )}
      {error && <div>Erro ao carregar o produto</div>}

      {data && (
        <>
          {!isDesktop ? (
            <ProductDisplayMobile
              name={data?.name || ""}
              coverImage={data?.coverImage || ""}
              description={data?.description || ""}
              price={data?.price || 0}
              fees={12}
              numberOfInstallments={3}
              addToCart={handleAddToCart}
            />
          ) : (
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
                        <p className="text-2xl font-semibold">
                          DESCRIÇÃO DO PRODUTO
                        </p>
                        <p className="text-sm  text-justify">
                          pão de 73g é macio e leve, ideal para hambúrgueres.
                          Com 12 unidades por embalagem, oferece praticidade
                          para lanchonetes e eventos. Seu sabor delicado realça
                          os recheios, tornando cada lanche mais saboroso.
                          Perfeito para diversas preparações, é a escolha ideal
                          para quem busca qualidade e versatilidade em suas
                          refeições. Experimente e eleve seus lanches a um novo
                          nível!
                        </p>
                      </div>
                      <div className="flex flex-row gap-16 py-5">
                        {/* <QuantityButton /> */}

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
                    {/* <div>
                      <CardPurchaseFreight />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
