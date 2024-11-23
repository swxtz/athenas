import { Separator } from "@/components/ui/separator";
import { inter } from "@/fonts/fonts";
import Image from "next/image";
import { ProductStars } from "./product-starts";
import { Button } from "@/components/ui/button";
import { RWebShare } from "react-web-share";
import { Heart, Share2 } from "lucide-react";
import { SectionDivisor } from "./section-divisor";
import { PriceDisplay } from "./price-display";
import { Zipcode } from "./zipcode";
import { ProductDescription } from "./product-description";

interface ProductDescriptionProps {
  name: string;
  coverImage: string;
  price: number;
  fees: number;
  numberOfInstallments: number;
  description: string;
  addToCart: () => void;
}

export function ProductDisplayMobile({
  name,
  coverImage,
  description,
  price,
  fees,
  numberOfInstallments,
  addToCart
}: ProductDescriptionProps) {
  return (
    <div className="bg-white min-h-screen min-w-screen">
      <div className="pb-[200px]">
        <section className="mt-8 pt-8 flex flex-col gap-8 container">
          <div className="flex items-center justify-center my-4 mx-8 bg-white rounded ">
            <Image
              src={coverImage || ""}
              alt={name || ""}
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
            discount={true}
            discountAmount={3.99}
            isPayable={true}
            isDesktop={false}
          />
          {/* Buy Button */}
          <div className="flex flex-col gap-2">
            <Button className="bg-green-700 hover:bg-green-800">
              Compre agora
            </Button>
            <Button variant={"outline"} className="" onClick={addToCart}>
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
          <ProductDescription text={description} />
        </section>
      </div>
    </div>
  );
}
