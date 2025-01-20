import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from 'src/components/card-product'
import CardProductSkeletons from 'src/components/card-product-skeletons'
import SideBarFilter from 'src/pages/home/components/SideBarFilter'
import { getAllProduct } from 'src/redux/reducer/product.reducer'
import { RootState, useAppDispatch } from 'src/redux/store'

export default function HomePage() {
  const productList = useSelector((state: RootState) => state.product.productList)
  const loading = useSelector((state: RootState) => state.product.loading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const promise = dispatch(getAllProduct({ limit: 10, offset: 0 }))
    // cleanup function
    return () => {
      promise.abort()
    }
  }, [dispatch])

  return (
    <div className='flex w-full min-h-screen gap-4 p-4 dark:bg-gray-900'>
      <SideBarFilter />
      <div className='grid gap-4 mb-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
        {!loading ? productList.map((item) => <CardProduct key={item.id} />) : <CardProductSkeletons />}
      </div>
    </div>
  )
}
