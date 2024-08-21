/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { calculateTotalWithInterest } from "@/utils/calculate-total-with-interest";
import { convertToReal } from "@/utils/convert-to-real";
import { cuid } from "@/utils/cuid";
import { Heart, Share2, Star } from "lucide-react";
import Image from "next/image";
import { PriceDisplay } from "./price-display";
import { Zipcode } from "./zipcode";

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  isPayable: boolean;
  numberOfInstallments: number;
  fees: number;
}

export function ProductCard({
  name,
  fees,
  image,
  isPayable,
  price,
  numberOfInstallments,
}: ProductCardProps) {
  const { toast } = useToast();

  function handleShare() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      toast({
        description: "URL copiada para a área de transferência!",
      });
    }); 
  }

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
                    onClick={handleShare}
                  >
                    <Share2 />
                  </Button>
                  <Button className="w-fit h-fit p-3 rounded-full bg-black/70 hover:bg-black">
                    <Heart />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-2.5 bg-zinc-100 mx-auto md:hidden my-10" />

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
          <Button className="bg-green-700 hover:bg-green-800">Compre agora</Button>
          <Button variant={"outline"} className="">Adicionar ao carrinho</Button>
        </div>

        <Zipcode />
      </section>
    </div>
  );
}
