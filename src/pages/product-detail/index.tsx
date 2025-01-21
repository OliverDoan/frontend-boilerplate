import { useParams } from 'react-router-dom'
import useProductDetail from 'src/pages/product-detail/hook/useProductDetail'
import ProductDetailSkeletons from './components/ProductDetailSkeletons'
import ProductItem from './components/ProductItem'

export default function ProductDetail() {
  const { id } = useParams()
  const { product, loading } = useProductDetail(Number(id))
  return <>{loading ? <ProductDetailSkeletons /> : <ProductItem product={product} />}</>
}
