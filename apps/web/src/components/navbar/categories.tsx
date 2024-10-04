"use client";

import { navbarCategories } from "@/data/navbar-categories";
import { motion, useAnimation, useScroll } from "framer-motion";
import { CategoryButton } from "./category-button";
import { useEffect, useState } from "react";

interface CategoriesProps {
  scrollY: number;
}

export function Categories() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 1) {
        controls
          .start({
            y: -50, // Sobe para cima
            opacity: 0, // Desaparece
            transition: { duration: 0.3, ease: "easeInOut" },
          })
          .then(() => {
            // Após a animação terminar, aplica a classe 'hidden'
            setIsHidden(true);
          });
      } else {
        setIsHidden(false); // Remove o 'hidden' quando voltar ao topo
        controls.start({
          y: 0, // Volta à posição original
          opacity: 1, // Torna visível
          transition: { duration: 0.3, ease: "easeInOut" },
        });
      }
    });

    return () => unsubscribe(); // Limpa o listener ao desmontar o componente
  }, [scrollY, controls]);

  return (
    <motion.div className="px-6 lg:px-24 flex gap-9 items-center justify-center">
      {navbarCategories.map((category) => (
        <motion.div
          animate={controls}
          key={category.name}
          className={`flex items-center justify-center ${
            isHidden ? "hidden" : ""
          }`}
          whileHover={{ scale: 1.03 }}
        >
          <CategoryButton {...category} />
        </motion.div>
      ))}
    </motion.div>
  );
}
