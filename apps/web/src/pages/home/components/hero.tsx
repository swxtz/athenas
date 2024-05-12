import heroImg from "@/assets/images/hero.png";
import { Carousel } from "./carousel";

export function Hero() {
  return (
    <div className="flex flex-col gap-8">
      <Carousel />

      <>
        <h1 className="text-zinc-50 text-center font-bold text-6xl font-inter">Experience the Best Live</h1>
        <h2 className="font-inter text-zinc-400 leading-relaxed text-2xl text-center w-3/5 mx-auto">Discover upcoming concerts, festivals, and events in your area. <br /> Buy tickets with ease and enjoy unforgettable live performances.</h2>
      </>

      <img src={heroImg} alt="Experience the Best Live" className="w-4/5 mx-auto rounded-md" />
    </div>
  );
}