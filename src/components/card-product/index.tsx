import { Button, Card } from 'flowbite-react'
import { Product } from 'src/api/types/product.type'
import { THUMBNAIL_PLACEHOLDER } from 'src/constants/common'
import { formatMoney } from 'src/utils/format'
import { isValidHttpUrl } from 'src/utils/valid'

export default function CardProduct({
  item,
  onClick,
  onAddToCart
}: {
  item: Product
  onClick?: () => void
  onAddToCart?: () => void
}) {
  const imgUrl = isValidHttpUrl(item.images[0]) ? item.images[0] : THUMBNAIL_PLACEHOLDER

  return (
    <Card imgAlt={item.title} className='max-w-sm h-fit'>
      <div className=''>
        <img src={imgUrl} alt='' />
      </div>
      <h5
        className='font-semibold tracking-tight text-gray-900 truncate cursor-pointer dark:text-white'
        onClick={onClick}
      >
        {item.title}
      </h5>
      <div className='flex items-center justify-between'>
        <span className='text-xl font-bold text-gray-900 dark:text-white'>{formatMoney(item.price)}</span>
        <Button onClick={onAddToCart}>Add to cart</Button>
      </div>
    </Card>
  )
}
