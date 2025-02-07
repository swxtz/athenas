import { api } from "@/lib/axios";
import { cuid } from "@/utils/cuid";
import { useQuery } from "@tanstack/react-query";

async function getOrderInfos(orderId: string | null) {

  if(!orderId) {
    return;
  }

  const res = await api.post("/payments/orders/get-order-info", {
    orderId: orderId
  });

  return res.data;
}

export function useQueryGetOrderInfos(orderId: string | null) {
  return useQuery({
    queryKey: ["get-order-info-" + orderId],
    queryFn: () => getOrderInfos(orderId)
  });
}