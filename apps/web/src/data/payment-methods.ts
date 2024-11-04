import { PaymentMethodCardProps } from "@/app/checkout/finalizar-compra/components/payment-method-card";

import PixLogo from "@/images/payments/pix.svg";
import MastercardLogo from "@/images/payments/mastercard.svg";
import VisaLogo from "@/images/payments/visa_blue.svg";

interface PaymentMethods extends PaymentMethodCardProps {
  name: string;
}

export const paymentMethods: PaymentMethods[] = [
  {
    name: "pix",
    alt: "Pix",
    logo: PixLogo,
    isAvailable: true,
  },
  {
    name: "mastercard",
    alt: "Mastercard",
    logo: MastercardLogo,
    isAvailable: false,
  },
  {
    name: "visa",
    alt: "Visa",
    logo: VisaLogo,
    isAvailable: false,
  },
];
