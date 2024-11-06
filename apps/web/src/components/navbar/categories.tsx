"use client";

import { navbarCategories } from "@/data/navbar-categories";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
} from "framer-motion";
import { CategoryButton } from "./category-button";
import { useEffect, useState } from "react";
import { cuid } from "@/utils/cuid";

interface CategoriesProps {
  scrollY: number;
}

export function Categories() {
  const [showCategories, setShowCategories] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Rolando para baixo
      setShowCategories(false);
    } else {
      // Rolando para cima
      setShowCategories(true);
    }
    setLastScrollY(currentScrollY);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="px-6 lg:px-24 flex gap-9 items-center justify-center mx-auto">
      {navbarCategories.map((category) => (
        // <div
        //   key={cuid()}
        //   className={`transform transition-transform duration-300 ease-in-out ${
        //     showCategories
        //       ? "translate-y-0 opacity-100"
        //       : "-translate-y-full opacity-0"
        //   }`}
        // >
        //   <CategoryButton {...category} />
        // </div>

        <div
          className="transform transition-transform duration-300 ease-in-out"
          key={cuid()}
        >
          <CategoryButton {...category} />
        </div>
      ))}
    </div>
  );
}
