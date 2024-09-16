import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface Categories {
  type: string
  products: CategoryProduct[]
}

export interface CategoryProduct {
  ProductWrapper: ProductWrapper[]
  type: string
}

export interface ProductWrapper {
  product: Product
}

export interface Product {
  id: string
  name: string
  description: string
  slug: string
  buyPrice: number
  price: number
  stock: number
  barcode: string
  sku: any
  isAvailable: boolean
  rating: any
  coverImage: string
  images: any[]
  productType: string
  state: string
  localPickup: boolean
  numberOfSales: number
  numberOfViews: number
  numberOfViewsInLastWeek: number
  createdAt: string
  updatedAt: string
  recommendationId: any
}

async function getCategoriesProducts(): Promise<Categories[]> {
  const res = await api.get("/categories/all");
  return res.data;
}

export function useQueryGetCategoriesProducts() {
  return useQuery({
    queryKey: ["categories-products"],
    queryFn: getCategoriesProducts,
    refetchOnWindowFocus: false,
  });
}