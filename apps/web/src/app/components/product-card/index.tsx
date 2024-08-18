"use client";

import { TruncateText } from "@/components/ui/truncate-text";
import { convertToReal } from "@/utils/convert-to-real";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

export interface IProductCard {
  name: string;
  image: string | StaticImport;
  price: number;
  productLink: string;
}

export function ProductCard({ image, name, price, productLink }: IProductCard) {
  const convertedPrice = convertToReal(price);
  const isDesktop = useMediaQuery(768);

  return (
    <>
      {isDesktop ? (
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href={productLink}
            className="bg-white/50 rounded-[10px] md:rounded shadow-md flex itens-center justify-center w-[150px] md:w-[200px] px-4 py-2 flex-col"
          >
            <div className="w-[75px] md:w-[100px] h-[180px] flex items-center justify-center mx-auto">
              <Image
                src={image}
                alt=""
                width={250}
                height={250}
                className="w-[75px] md:w-[100px] mx-auto"
              />
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <TruncateText
                text={name}
                maxLength={30}
                className="text-base font-rubik"
              />
              <span className="text-lg font-montserrat font-medium">
                {convertedPrice}
              </span>
            </div>
          </Link>
        </motion.div>
      ) : (
        <Link
          href={productLink}
          className="bg-white/50 rounded-[10px] md:rounded shadow-md flex itens-center justify-center w-[150px] md:w-[200px] px-4 py-2 flex-col"
        >
          <div className="w-[75px] md:w-[100px] h-[180px] flex items-center justify-center mx-auto">
            <Image
              src={image}
              alt=""
              width={250}
              height={250}
              className="w-[75px] md:w-[100px] mx-auto"
            />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <TruncateText
              text={name}
              maxLength={30}
              className="text-base font-rubik"
            />
            <span className="text-lg font-montserrat font-medium">
              {convertedPrice}
            </span>
          </div>
        </Link>
      )}
    </>
  );
}
