import { Card } from 'flowbite-react'
import { Product } from 'src/api/types/product.type'
import { THUMBNAIL_PLACEHOLDER } from 'src/constants/common'
import { formatMoney } from 'src/utils/format'
import { isValidHttpUrl } from 'src/utils/valid'

export default function CardProduct({ item, onClick }: { item: Product; onClick?: () => void }) {
  const imgUrl = isValidHttpUrl(item.images[0]) ? item.images[0] : THUMBNAIL_PLACEHOLDER

  return (
    <Card imgAlt={item.title} className='max-w-sm h-fit' onClick={onClick}>
      <div className=''>
        <img src={imgUrl} alt='' />
      </div>
      <a href='#'>
        <h5 className='font-semibold tracking-tight text-gray-900 dark:text-white'>{item.title}</h5>
      </a>
      <div className='flex items-center justify-between'>
        <span className='text-xl font-bold text-gray-900 dark:text-white'>{formatMoney(item.price)}</span>
        <a
          href='#'
          className='rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
        >
          Add to cart
        </a>
      </div>
    </Card>
  )
}
