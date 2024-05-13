import {
  CarouselContent,
  CarouselItem,
  Carousel as CarouselRoot,
} from "@/components/ui/carousel";

import weekendBanner from "@/assets/images/events/weekend.png";
import kendrickLamarBanner from "@/assets/images/events/kendrick-lamar.png";
import futureMetroBanner from "@/assets/images/events/future-metro-booming.png";
import tylerTheCreatorBanner from "@/assets/images/events/tyler-the-creator.png";

import { uuid } from "@/lib/uuid";
import { Link } from "react-router-dom";
import { CarouselInfoLabel } from "@/components/carousel-info-label";

interface CarouselDisplayItem {
  title: string;
  imageUrl: string;
  linkToEvent: string;
  date: number | Date;
  location: string;
}

const carouselItems: CarouselDisplayItem[] = [
  {
    imageUrl: weekendBanner,
    title: "After Show Party",
    linkToEvent: "/events/weekend",
    date: new Date(),
    location: "New York",
  },
  {
    imageUrl: kendrickLamarBanner,
    title: "Kendrick Lamar Live",
    linkToEvent: "/events/kendrick-lamar",
    date: new Date(),
    location: "New York",
  },
  {
    imageUrl: futureMetroBanner,
    title: "Future - Metro Booming",
    linkToEvent: "/events/future-metro-booming",
    date: new Date(),
    location: "New York",
  },
  {
    imageUrl: tylerTheCreatorBanner,
    title: "Tyler The Creator",
    linkToEvent: "/events/tyler-the-creator",
    date: new Date(),
    location: "New York",
  }
];

export function Carousel() {
  return (
    <CarouselRoot opts={{ loop: true, active: true }}>
      <CarouselContent>
        {carouselItems.map((item) => (
          <CarouselItem
            key={uuid()}
            className="flex flex-col gap-8 w-[90%] mt-8 md:mt-12"
          >
            <Link to={item.linkToEvent} className="w-[90%] mx-auto md:w-full 2xl:w-3/5">
              <img
                className="w-full rounded-3xl"
                src={item.imageUrl}
                alt={item.title}
              />
            </Link>
            <CarouselInfoLabel
              date={item.date}
              location={item.location}
              title={item.title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselRoot>
  );
}
