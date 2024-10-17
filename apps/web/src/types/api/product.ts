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
  isDeleted: boolean
  deletedAt: any
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
