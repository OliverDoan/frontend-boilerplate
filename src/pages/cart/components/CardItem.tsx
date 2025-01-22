import { Product } from 'src/api/types/product.type'
import { THUMBNAIL_PLACEHOLDER } from 'src/constants/common'
import { formatMoney } from 'src/utils/format'
import { isValidHttpUrl } from 'src/utils/valid'

export default function CardItem({
  item,
  onRemove,
  onSetQuantity
}: {
  item: Product & { quantity: number }
  onRemove: (id: number) => void
  onSetQuantity: (id: number, quantity: number) => void
}) {
  const imgUrl = isValidHttpUrl(item.images?.[0]) ? item.images?.[0] : THUMBNAIL_PLACEHOLDER

  return (
    <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6'>
      <div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
        <a href='#' className='shrink-0 md:order-1'>
          <img className='w-20 h-20 dark:block' src={imgUrl} alt={item.title} />
        </a>
        <label htmlFor='counter-input' className='sr-only'>
          Choose quantity:
        </label>
        <div className='flex items-center justify-between md:order-3 md:justify-end'>
          <div className='flex items-center'>
            <button
              onClick={() => onSetQuantity(item.id, item.quantity - 1)}
              type='button'
              id='decrement-button'
              data-input-counter-decrement='counter-input'
              className='inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
            >
              <svg
                className='h-2.5 w-2.5 text-gray-900 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 2'
              >
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M1 1h16' />
              </svg>
            </button>
            <input
              type='text'
              id='counter-input'
              data-input-counter
              className='w-10 text-sm font-medium text-center text-gray-900 bg-transparent border-0 shrink-0 focus:outline-none focus:ring-0 dark:text-white'
              value={item.quantity}
              required
            />
            <button
              onClick={() => onSetQuantity(item.id, item.quantity + 1)}
              type='button'
              id='increment-button'
              data-input-counter-increment='counter-input'
              className='inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
            >
              <svg
                className='h-2.5 w-2.5 text-gray-900 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </button>
          </div>
          <div className='text-end md:order-4 md:w-32'>
            <p className='text-base font-bold text-gray-900 dark:text-white'>{formatMoney(item.price)}</p>
          </div>
        </div>
        <div className='flex-1 w-full min-w-0 space-y-4 md:order-2 md:max-w-md'>
          <a href='#' className='text-base font-medium text-gray-900 hover:underline dark:text-white'>
            {item.title}
          </a>
          <div className='flex items-center gap-4'>
            <button
              type='button'
              className='inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white'
            >
              <svg
                className='me-1.5 h-5 w-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z'
                />
              </svg>
              Add to Favorites
            </button>
            <button
              onClick={() => onRemove(item.id)}
              type='button'
              className='inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500'
            >
              <svg
                className='me-1.5 h-5 w-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18 17.94 6M18 18 6.06 6'
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
