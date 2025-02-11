export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: number
  images: string[]
}

export interface Filter {
  price_min?: string
  price_max?: string
  categoryId?: string
}
