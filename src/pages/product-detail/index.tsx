import { useSnackbar } from 'notistack'
import { useParams } from 'react-router-dom'
import { Product } from 'src/api/types/product.type'
import useProductDetail from 'src/pages/product-detail/hook/useProductDetail'
import ProductDetailSkeletons from './components/ProductDetailSkeletons'
import ProductItem from './components/ProductItem'

export default function ProductDetail() {
  const { id } = useParams()
  const { product, loading } = useProductDetail(Number(id))
  const { enqueueSnackbar } = useSnackbar()

  const handleAddToCart = (item: Product) => {
    console.log('🚀 ~ handleAddToCart ~ item:', item)
    enqueueSnackbar('Add successfully!!! 🎉', { variant: 'success' })
  }
  return <>{loading ? <ProductDetailSkeletons /> : <ProductItem product={product} onAddToCart={handleAddToCart} />}</>
}
