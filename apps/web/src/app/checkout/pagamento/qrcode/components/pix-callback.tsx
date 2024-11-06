"use client";

import { toast, useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/axios";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useQueryState } from "nuqs";

async function payOrderPix(orderId: string, token: string) {
  const res = await api.post(
    "/payments/pay/order/pix",
    { orderBuyId: orderId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
}

export function PixCallback() {
  const { data: session } = useSession();
  const [orderId, setOrderId] = useQueryState("order_id");

  if (!session) {
    return;
  }

  if (!orderId) {
    return;
  }

  payOrderPix(orderId, session.token).then((res) => {
    if (res.status === 200) {
      setTimeout(() => {
        redirect(
          `/checkout/pagamento/sucesso?paymentId=${encodeURIComponent(
            orderId
          )}&paymentMethod=pix&paymentDate=${encodeURIComponent(res.data.data.updatedAt)}`
        );
      }, 1000);
    }
  });

  return (
    <div className="">
      <Loader2 className="animate-spin" />
    </div>
  );
}
