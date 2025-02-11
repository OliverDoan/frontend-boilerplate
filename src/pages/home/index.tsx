import { useSnackbar } from 'notistack'
import queryString from 'query-string'
import { useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { PRODUCT_LIST } from 'src/api/mock/products'
import { Filter, Product } from 'src/api/types/product.type'
import ProductList from 'src/pages/home/components/ProductList'
import SideBarFilter from 'src/pages/home/components/SideBarFilter'

export default function HomePage() {
  const loading = false
  const [products, setProducts] = useState<Product[]>(PRODUCT_LIST)
  const [noData] = useState<boolean>(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { enqueueSnackbar } = useSnackbar()

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

  const handleLoadMore = () => {}

  const handleAddToCart = (item: Product) => {
    console.log('🚀 ~ handleAddToCart ~ item:', item)
    enqueueSnackbar('Add successfully!!! 🎉', { variant: 'success' })
  }

  const handleClickCardProduct = (id: number) => {
    navigate(`/${id}`)
  }

  return (
    <div className='flex w-full min-h-screen gap-4 p-4 dark:bg-gray-900'>
      <SideBarFilter onFiltersChange={handleFiltersChange} currentCategory={searchParams.get('categoryId') || ''} />
      <ProductList
        loading={loading}
        noData={noData}
        products={products}
        onClickLoadMore={handleLoadMore}
        onAddToCart={handleAddToCart}
        onClickCard={handleClickCardProduct}
      />
    </div>
  )
}
