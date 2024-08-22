/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { cuid } from "@/utils/cuid";
import { Heart, Share2, Star } from "lucide-react";
import Image from "next/image";
import { PriceDisplay } from "./price-display";
import { Zipcode } from "./zipcode";
import { SectionDivisor } from "./section-divisor";
import nookies from "nookies";
import { ProductDescription } from "./product-description";
import { RWebShare } from "react-web-share";

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  isPayable: boolean;
  numberOfInstallments: number;
  fees: number;
  description: string;
}

export function ProductCard({
  name,
  fees,
  image,
  isPayable,
  price,
  numberOfInstallments,
  description,
}: ProductCardProps) {
  const { toast } = useToast();
  const zipcodeCookie = nookies.get(null).zipcode;
  console.log(zipcodeCookie);

  return (
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
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={cuid()} fill="000000" />
                    ))}
                  </div>
                  {/* Total de avaliações */}
                  <div className="">
                    <span>0</span>
                    <span className="text-sm text-zinc-500"> (0)</span>
                  </div>
                </div>

                {/* Botão de like */}
                <div className="flex gap-2 md:gap-4">
                  <Button
                    className="w-fit h-fit p-3 rounded-full bg-black/70 hover:bg-black"
                    
                  >
                    <RWebShare
                      data={{
                        text: "Compartilhe este produto!",
                        url: window.location.href,
                        title: "Compartilhe este produto!",
                      }}
                    >
                      <Share2 />
                    </RWebShare>
                  </Button>
                  <Button className="w-fit h-fit p-3 rounded-full bg-black/70 hover:bg-black" asChild>
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
  );
}
