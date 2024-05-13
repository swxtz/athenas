import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface CarouselInfoLabel {
  date: number | Date;
  location: string;
  title: string;
}

export function CarouselInfoLabel({ date, location, title }: CarouselInfoLabel) {
  return (
    <motion.div className="flex flex-row items container gap-4 justify-between md:px-16 2xl:w-3/5" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 100 }}>
      <span className="font-medium text-1xl md:text-2xl 2xl:text-3xl">
        {title}
      </span>
      <div className="">
        <span className="font-medium text-zinc-400 text-xs md:text-xl flex flex-row items-center gap-2 2xl:text-lg">
          <MapPin className="size-4" /> <span>{location}</span>
        </span>
        <span className="font-medium text-zinc-400 text-xs md:text-xl flex flex-row items-center gap-2 2xl:text-lg">
          <Calendar className="size-4" /> <span>{new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "medium",
            timeStyle: "short"
          }).format(date)}</span>
        </span>
      </div>

    </motion.div>
  );
}