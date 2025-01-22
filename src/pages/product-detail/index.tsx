import { useParams } from 'react-router-dom'
import useProductDetail from 'src/pages/product-detail/hook/useProductDetail'
import ProductDetailSkeletons from './components/ProductDetailSkeletons'
import ProductItem from './components/ProductItem'
import { Product } from 'src/api/types/product.type'
import { useAppDispatch } from 'src/redux/store'
import { useSnackbar } from 'notistack'
import { addToCart } from 'src/redux/reducer/cart.reducer'

export default function ProductDetail() {
  const { id } = useParams()
  const { product, loading } = useProductDetail(Number(id))
  const dispatch = useAppDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const handleAddToCart = (item: Product) => {
    dispatch(addToCart({ id: item.id, product: item, quantity: 1 }))
    enqueueSnackbar('Add successfully!!! 🎉', { variant: 'success' })
  }
  return <>{loading ? <ProductDetailSkeletons /> : <ProductItem product={product} onAddToCart={handleAddToCart} />}</>
}
