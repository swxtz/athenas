"use client";

import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

interface Product {
  id: string;
}



export interface Response {
  id: number
  name: string
  price: number
  discount: string
  currency: string
  delivery_time: number
  delivery_range: DeliveryRange
  packages: Package[]
  additional_services: AdditionalServices
  company: Company
  has_error: boolean
}

export interface DeliveryRange {
  min: number
  max: number
}

export interface Package {
  price: number
  discount: string
  format: string
  dimensions: Dimensions
  weight: string
  insurance_value: number
}

export interface Dimensions {
  height: string
  width: string
  length: string
}

export interface AdditionalServices {
  receipt: boolean
  own_hand: boolean
}

export interface Company {
  id: number
  name: string
  picture: string
}


async function getFreightPrice(
  token: string | undefined,
  products: Product[],
  cep: string | null
): Promise<Response | undefined> {

  if(!token && !cep) {
    return;
  }

  const res = await api.post(
    "/freight/calculate-freight",
    {
      cep,
      products,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return res.data;
}

export function useQueryGetFreightPrice(token: string | undefined, products: Product[], cep: string | null) {


  return useQuery({
    queryKey: ["get-freight-price"],
    queryFn: () => getFreightPrice(token, products, cep),
  });
}
