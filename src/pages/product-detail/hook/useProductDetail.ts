import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Product } from 'src/api/types/product.type'
import { getSingleProduct } from 'src/redux/reducer/product.reducer'
import { RootState, useAppDispatch } from 'src/redux/store'

export default function useProductDetail(productId: number) {
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    category: 0,
    images: []
  })
  const dispatch = useAppDispatch()
  const loading = useSelector((state: RootState) => state.product.loading)

  useEffect(() => {
    const promise = dispatch(getSingleProduct({ id: productId }))
    promise.unwrap().then((newProducts) => {
      setProduct(newProducts)
    })
    // cleanup function
    return () => {
      promise.abort()
    }
  }, [dispatch, productId])

  return { product, loading }
}
