"use client";

import { api } from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CommandDisplayProps {
  slug: string;
  name: string;
}

async function getProductImage(slug: string) {
  const res = await api.get("/products/get-product-image", {
    params: {
      slug,
    },
  });
  return res.data;
}

export function CommandDisplay({ slug, name }: CommandDisplayProps) {
  const [image, setImage] = useState("");

  useEffect(() => {
    getProductImage(slug).then((res) => {
      console.log(res);
      setImage(res.coverImage);
    });
  }, [slug]);

  return (
    <div className="">
      <Image src={image} alt={name} width={40} height={40}  />
    </div>
  );
}
