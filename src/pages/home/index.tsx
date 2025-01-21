import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { Filter, Product } from 'src/api/types/product.type'
import ProductList from 'src/pages/home/components/ProductList'
import SideBarFilter from 'src/pages/home/components/SideBarFilter'
import { getAllProduct } from 'src/redux/reducer/product.reducer'
import { RootState, useAppDispatch } from 'src/redux/store'

export default function HomePage() {
  const loading = useSelector((state: RootState) => state.product.loading)
  const [offset, setOffset] = useState(0)
  const [products, setProducts] = useState<Product[]>([])
  const [noData, setNoData] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const handleFiltersChange = (newFilters: Filter) => {
    const filters = {
      ...searchParams,
      ...newFilters
    }

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters)
    })

    setProducts([])
  }

  const handleLoadMore = () => {
    setOffset((prev) => prev + 8)
  }

  useEffect(() => {
    setOffset(0)
    setProducts([])
  }, [searchParams])

  useEffect(() => {
    const promise = dispatch(
      getAllProduct({ limit: 8, offset: offset, categoryId: Number(searchParams.get('categoryId')) })
    )
    promise.unwrap().then((newProducts) => {
      setNoData(newProducts.length === 0)
      setProducts((prev) => [...prev, ...newProducts])
    })
    // cleanup function
    return () => {
      promise.abort()
    }
  }, [dispatch, offset, searchParams])

  return (
    <div className='flex w-full min-h-screen gap-4 p-4 dark:bg-gray-900'>
      <SideBarFilter onFiltersChange={handleFiltersChange} currentCategory={searchParams.get('categoryId') || ''} />
      <ProductList loading={loading} noData={noData} products={products} onClickLoadMore={handleLoadMore} />
    </div>
  )
}
