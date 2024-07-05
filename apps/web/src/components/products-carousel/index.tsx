import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import hamburguerImage from "@/images/hamburguer.webp";
import { ProductsCard } from "../product-card";

interface IProducts {
  name: string;
  image: string | StaticImport;
  price: number;
  description: string;
}

const products: IProducts[] = [
  {
    name: "Hamburguer",
    price: 12,
    image: hamburguerImage,
    description: "Hamburguer gostoso",
  },
  {
    name: "Hamburguer",
    price: 12,
    image: hamburguerImage,
    description: "Hamburguer gostoso",
  },
  {
    name: "Hamburguer",
    price: 12,
    image: hamburguerImage,
    description: "Hamburguer gostoso",
  },
  {
    name: "Hamburguer",
    price: 12,
    image: hamburguerImage,
    description: "Hamburguer gostoso",
  },
  {
    name: "Hamburguer",
    price: 12,
    image: hamburguerImage,
    description: "Hamburguer gostoso",
  },
];

export function ProductsCarousel() {
  return (
    <Carousel className="mt-8">
      <CarouselContent>
        {products.map((card) => (
          <CarouselItem key={card.name} className="">
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
  );
}
