import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  buyPrice: number;
  price: number;
  stock: number;
  barcode: string;
  sku: string;
  isAvailable: boolean;
  rating: number;
  coverImage: string;
  images: string[];
  productType: string;
  state: string;
  localPickup: boolean;
  numberOfSales: number;
  numberOfViews: number;
  numberOfViewsInLastWeek: number;
  createdAt: string;
  updatedAt: string;
  recommendationId: string;
}

async function getProductBySlug(slug: string): Promise<Product> {
  const res = await api.get(`/products/get-product-by-slug/${slug}`);
  return res.data;
}

export function useQueryGetProductBySlug(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlug(slug),
  });
}
