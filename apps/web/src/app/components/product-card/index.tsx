"use client";

import { TruncateText } from "@/components/ui/truncate-text";
import { convertToReal } from "@/utils/convert-to-real";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { number } from "zod";
import { useMutationIncrementClickOrganicProductValue } from "@/hooks/mutations/increment-click-organic-product-value";
import { api } from "@/lib/axios";

export interface IProductCard {
  name: string;
  image: string | StaticImport;
  price: number;
  productLink: string;
  isPayable: boolean;
  numberOfInstallments?: number | undefined;
  fees: number;
}

export function ProductCard({
  image,
  name,
  price,
  productLink,
  isPayable,
  fees,
  numberOfInstallments,
}: IProductCard) {
  const convertedPrice = convertToReal(price / 100);
  const isDesktop = useMediaQuery(768);

  const { mutate } = useMutationIncrementClickOrganicProductValue();

  function calculateTotalWithInterest(
    numInstallments: number | undefined,
    interestRate: number,
    productValue: number
  ) {
    if (!numInstallments) {
      numInstallments = 1;
    }

    // Convert the interest rate from percentage to decimal
    const interestDecimal = interestRate / 100;

    // Calculate the value of each installment with interest
    const installmentValue = productValue / numInstallments;

    // Calculate the total value with simple interest
    const totalValue =
      installmentValue * numInstallments * (1 + interestDecimal);

    return totalValue / numInstallments;
  }

  // function handleClickLink() {
  //   api
  //     .put(`/odin/increment-click-organic-product/${productId}`)
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }

  return (
    <>
      {isDesktop ? (
        <motion.div whileHover={{ scale: 1.01 }}>
          <Link
            href={productLink}
            className="bg-white rounded-[10px] md:rounded-xl shadow-md flex itens-center justify-center w-[150px] md:w-[200px] px-4 py-2 flex-col h-[350px]"
          >
            <div className="w-[75px] md:w-[100px] h-[180px] flex items-center justify-center mx-auto">
              <Image
                src={image}
                alt=""
                width={250}
                height={250}
                className="h-[75px] md:h-[150px] max-w-full object-contain"
              />
            </div>

            <div className="mt-4 flex flex-col gap-1">
              <span className="text-lg font-bold font-roboto text-brown-500 ">
                {convertedPrice}
              </span>

              <TruncateText
                text={name}
                maxLength={30}
                className="text-sm font-roboto "
              />

              <span className="text-green-500 text-xs font-roboto">
                Frete ou retirada
              </span>

              <span>
                {isPayable && (
                  <span className="text-xs font-montserrat font-medium">
                    {`Em ${numberOfInstallments}x de ${convertToReal(
                      calculateTotalWithInterest(
                        numberOfInstallments,
                        fees,
                        price
                      ) / 100
                    )} sem juros`}
                  </span>
                )}
              </span>
            </div>
          </Link>
        </motion.div>
      ) : (
        <Link
          href={productLink}
          className="bg-white rounded-[10px] md:rounded shadow-md flex itens-center justify-center w-[150px] md:w-[200px] px-4 py-2 flex-col h-[350px]"
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
