"use client";

import { auth } from "@/app/api/auth/[...nextauth]/providers";
import { api } from "@/lib/axios";
import { cuid } from "@/utils/cuid";
import { useMutation } from "@tanstack/react-query";


async function createBuyOrder(data: any) {
  const session = await auth();

  if (!session) {
    return;
  }

  const res = await api.post("/payments/create-buy-order/pix", data, {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  return res;
}

export function useMutationCreateBuyOrder() {
  const orderBuy = `order-buy-${cuid()}`;

  return useMutation({
    mutationFn: createBuyOrder,
    mutationKey: [orderBuy],
  });
}
