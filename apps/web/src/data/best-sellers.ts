import { IProductCard } from "@/app/components/product-card";
import { cuid } from "@/utils/cuid";

type Product = IProductCard;

function createFakeLink() {
  return "/produto/" + cuid();
}

export const products: Product[] = [
  {
    name: "Molho ketchup junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: true,
    numberOfInstallments: 3,
    fees: 1,
  },
  {
    name: "Molho barbecue junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_636639-MLU77839654916_072024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: false,
    fees: 5.5,
  },
  {
    name: "Molho ketchup junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: true,
    numberOfInstallments: 3,
    fees: 5.5,
  },
  {
    name: "Molho ketchup junior 380g",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_623362-MLA76151912404_052024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: true,
    numberOfInstallments: 3,
    fees: 5.5,
  },
  {
    name: "Maionese Alho 190g - Cepêra",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_733039-MLB77070535049_062024-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: false,
    fees: 5.5,
  },
  {
    name: "Pepinos Em Conserva - Tipo Picles 550g - Cepêra",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_848410-MLB49232733922_022022-O.webp",
    price: 16.5,
    productLink: createFakeLink(),
    isPayable: false,
    fees: 5.5,
  },
];
