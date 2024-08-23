/* eslint-disable @next/next/no-img-element */
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

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  isPayable: boolean;
  numberOfInstallments: number;
  fees: number;
  description: string;
}

export function Product({
  name,
  fees,
  image,
  isPayable,
  price,
  numberOfInstallments,
  description,
}: ProductCardProps) {
  const isDesktop = useMediaQuery(768);

  const zipcodeCookie = nookies.get(null).zipcode;

  return (
    <>
      {!isDesktop ? (
        <div className="bg-white min-h-screen min-w-screen">
          <div className="pb-[200px]">
            <section className="mt-8 pt-8 flex flex-col gap-8 container">
              <div className="flex items-center justify-center my-4 mx-8 bg-white rounded ">
                <Image
                  src={image}
                  alt={name}
                  width={1000}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-3/6"
                />
              </div>

              <Separator className="w-4/5 mx-auto bg-black/80" />

              <div className="mt-2">
                <div className="flex flex-col gap-20">
                  <div className="">
                    <span className="text-xl font-medium font-montserrat text-zinc-800">
                      {name}
                    </span>
                    <div className="flex mt-6 justify-between">
                      <ProductStars size={24} />

                      {/* Botão de like */}
                      <div className="flex gap-2 md:gap-4">
                        <Button className="w-fit h-fit p-3 rounded-full bg-black/70 hover:bg-black">
                          <RWebShare
                            data={{
                              text: "Compartilhe este produto!",
                              url: "",
                              title: "Compartilhe este produto!",
                            }}
                          >
                            <Share2 />
                          </RWebShare>
                        </Button>
                        <Button
                          className="w-fit h-fit p-3 rounded-full bg-black/70 hover:bg-black"
                          asChild
                        >
                          <Heart />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <SectionDivisor />

            {/* Section do preço */}
            <section className="container flex flex-col gap-4">
              <PriceDisplay
                fees={fees}
                numberOfInstallments={numberOfInstallments}
                price={price}
                discont={true}
                discountAmount={3.99}
                isPayable={true}
                isDesktop={isDesktop}
              />
              {/* Buy Button */}
              <div className="flex flex-col gap-2">
                <Button className="bg-green-700 hover:bg-green-800">
                  Compre agora
                </Button>
                <Button variant={"outline"} className="">
                  Adicionar ao carrinho
                </Button>
              </div>
            </section>

            <SectionDivisor />

            <section className="container flex flex-col gap-4">
              <Zipcode />
            </section>

            <SectionDivisor />

            <section className="container">
              <ProductDescription>{description}</ProductDescription>
            </section>
          </div>
        </div>
      ) : (
        <div className="min-w-screen min-h-screen bg-zinc-100 ">
          <div className="">
            <div className="container pt-16">
              <div className="container bg-white rounded-md shadow-md flex flex-row">
                <div className="mx-16 py-16 w-fit">
                  <Image
                    src={image}
                    alt={name}
                    width={1000}
                    height={100}
                    sizes="(max-width: 500px) 13vw, (max-width: 500px) 13vw, 13vw"
                    className="w-[250px]"
                  />
                </div>

                <div className="w-[1px] bg-border h-[500px] my-auto rounded mx-8" />

                <div className="mt-32 flex flex-col gap-2">
                  <span className="text-2xl font-medium font-montserrat text-zinc-800">
                    {name}
                  </span>
                  <div className="">
                    <ProductStars />
                  </div>
                  <div className="mt-4">
                    <PriceDisplay
                      fees={fees}
                      numberOfInstallments={numberOfInstallments}
                      price={price}
                      discont={true}
                      discountAmount={3.99}
                      isPayable={true}
                      isDesktop={true}
                    />
                  </div>

                  <div className="">
                    <div className="flex flex-col gap-2">
                      <Button className="bg-green-700 hover:bg-green-800">
                        Compre agora
                      </Button>
                      <Button variant={"outline"} className="">
                        Adicionar ao carrinho
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
