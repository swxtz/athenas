import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../components/ui/carousel";

import hamburguerImage from "@/images/hamburguer.webp";

import { uuid } from "@/utils/uuid";
import { ProductsCard } from "./product-card";

interface IProducts {
  name: string;
  image: string | StaticImport;
  price: number;
  description: string;
}

const products: IProducts[] = [
  {
    name: "Pão Pita gergilim 320g",
    price: 12,
    image: hamburguerImage,
    description: "Pão Pita gergilim 320g gostoso",
  },
  {
    name: "Pão Pita gergilim 320g",
    price: 12,
    image: hamburguerImage,
    description: "Pão Pita gergilim 320g gostoso",
  },
  {
    name: "Pão Pita gergilim 320g",
    price: 12,
    image: hamburguerImage,
    description: "Pão Pita gergilim 320g gostoso",
  },
  {
    name: "Pão Pita gergilim 320g",
    price: 12,
    image: hamburguerImage,
    description: "Pão Pita gergilim 320g gostoso",
  },
  {
    name: "Pão Pita gergilim 320g",
    price: 12,
    image: hamburguerImage,
    description: "Pão Pita gergilim 320g gostoso",
  },
  {
    name: "Pão Pita gergilim 320g",
    price: 12,
    image: hamburguerImage,
    description: "Pão Pita gergilim 320g gostoso",
  },
  {
    name: "Pão Pita gergilim 320g",
    price: 12,
    image: hamburguerImage,
    description: "Pão Pita gergilim 320g gostoso",
  },
];

export function ProductsCarousel() {
  return (
    <div className="px-4 py-1 mt-4 rounded-md md:rounded-lg bg-white/50 mx-auto">
      <Carousel className="mt-8">
        <CarouselContent className="mx-auto flex gap-2">
          {products.map((card) => (
            <CarouselItem key={uuid()} className="basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
              <ProductsCard
                name={card.name}
                image={card.image}
                description={card.description}
                price={card.price}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex size-14 bg-white" />
        <CarouselNext className="hidden md:flex size-14 bg-white" />
      </Carousel>
    </div>
  );
}
