import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import hamburguerImage from "@/images/hamburguer.webp";
import { ProductsCard } from "../product-card";
import { uuid } from "@/utils/uuid";

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
    <div className="px-4 py-1 mt-4 rounded-md md:rounded-lg bg-gray-300 mx-auto">
      <Carousel className="mt-8">
        <CarouselContent className="mx-auto">
          {products.map((card) => (
            <CarouselItem key={uuid()} className="basis-1/2 md:basis-1/6">
              <ProductsCard
                name={card.name}
                image={card.image}
                description={card.description}
                price={card.price}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
