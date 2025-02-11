import { Button, Label } from 'flowbite-react'
import { Product } from 'src/api/types/product.type'
import CardProduct from 'src/components/card-product'
import CardProductSkeletons from 'src/components/card-product-skeletons'

export default function ProductList({
  products,
  loading,
  noData,
  onClickLoadMore,
  onAddToCart,
  onClickCard
}: {
  products: Product[]
  loading: boolean
  noData: boolean
  onClickLoadMore: () => void
  onAddToCart: (item: Product) => void
  onClickCard: (id: number) => void
}) {
  return (
    <div className='w-full'>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((item) => (
          <CardProduct
            key={item.id}
            item={item}
            onClick={() => {
              onClickCard(item.id)
            }}
            onAddToCart={() => {
              onAddToCart(item)
            }}
          />
        ))}
        {loading && Array.from({ length: 4 }).map((_, i) => <CardProductSkeletons key={i} />)}
      </div>
      {!loading && noData && products.length === 0 ? (
        <Label htmlFor='no-data' value='No data' />
      ) : (
        <div className='flex justify-center mt-4'>
          {!noData && <Button onClick={onClickLoadMore}>Load more</Button>}
        </div>
      )}
    </div>
  )
}
