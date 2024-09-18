import { IProductCard } from "@/app/components/product-card";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ProductObject {
  id: string;
  name: string;
  description: string;
  buyPrice: number;
  price: number;
  stock: number;
  barcode: string;
  sku: string
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
}
interface Product {
  message: string;
  data: ProductObject[];
}

async function getBestSellersProduct(): Promise<Product> {
  const response = await api.get(
    "http://localhost:3001/products/get-best-sellers?limit=6",
  );
  return response.data;
}

export function useQueryGetBestSellersProduct() {
  return useQuery({
    queryKey: ["best-sellers-products"],
    queryFn: getBestSellersProduct,
    refetchOnWindowFocus: false,
  });
}
