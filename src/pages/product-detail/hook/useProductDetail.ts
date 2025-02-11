import { useEffect, useState } from 'react'
import { Product } from 'src/api/types/product.type'

export default function useProductDetail(productId: number) {
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    category: 0,
    images: []
  })
  const loading = false

  useEffect(() => {
    setProduct({
      id: 3,
      title: 'Classic Heather Gray Hoodie',
      price: 1,
      description:
        'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
      images: [
        'https://i.imgur.com/cHddUCu.jpeg',
        'https://i.imgur.com/CFOjAgK.jpeg',
        'https://i.imgur.com/wbIMMme.jpeg'
      ],
      category: 0
    })
    // cleanup function
  }, [productId])

  return { product, loading }
}
