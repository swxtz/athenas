import type { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Category {
  href: string;
  name: string;
  image?: string | StaticImport;
}

export const navbarCategories: Category[] = [
  {
    name: "Embalagens",
    href: "/embalagens",
  },
  {
    name: "Pães",
    href: "/paes",
  },
  {
    name: "Hambúrgueres",
    href: "/hamburgueres",
  },
  {
    name: "Molhos",
    href: "/molhos",
  },
  {
    name: "Queijos",
    href: "/queijos",
  },
  {
    name: "Batatas",
    href: "/batatas",
  },
  {
    name: "Bacons",
    href: "/bacons",
  },
];
