import { Button } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Product } from 'src/api/types/product.type'
import CardProduct from 'src/components/card-product'
import CardProductSkeletons from 'src/components/card-product-skeletons'
import SideBarFilter from 'src/pages/home/components/SideBarFilter'
import { getAllProduct } from 'src/redux/reducer/product.reducer'
import { RootState, useAppDispatch } from 'src/redux/store'

export default function HomePage() {
  const loading = useSelector((state: RootState) => state.product.loading)
  const [offset, setOffset] = useState(0)
  const [products, setProducts] = useState<Product[]>([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    const promise = dispatch(getAllProduct({ limit: 8, offset: offset }))
    promise.unwrap().then((newProducts) => {
      setProducts((prev) => [...prev, ...newProducts])
    })
    // cleanup function
    return () => {
      promise.abort()
    }
  }, [dispatch, offset])

  return (
    <div className='flex w-full min-h-screen gap-4 p-4 dark:bg-gray-900'>
      <SideBarFilter />
      <div>
        <div className='grid gap-4 mb-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((item) => (
            <CardProduct key={item.id} item={item} />
          ))}
        </div>
        {loading ? (
          <div className='grid gap-4 mb-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
            <CardProductSkeletons />
            <CardProductSkeletons />
            <CardProductSkeletons />
            <CardProductSkeletons />
          </div>
        ) : (
          <>
            {offset < 32 && (
              <div className='flex justify-center'>
                <Button onClick={() => setOffset((prev) => prev + 8)}>Load more</Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
