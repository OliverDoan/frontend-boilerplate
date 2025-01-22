import { Button, Label, Select } from 'flowbite-react'
import { Product } from 'src/api/types/product.type'
import { THUMBNAIL_PLACEHOLDER } from 'src/constants/common'
import { formatMoney } from 'src/utils/format'
import { isValidHttpUrl } from 'src/utils/valid'

export default function ProductItem({
  product,
  onAddToCart
}: {
  product: Product
  onAddToCart: (item: Product) => void
}) {
  const imgUrl = isValidHttpUrl(product.images?.[0]) ? product.images?.[0] : THUMBNAIL_PLACEHOLDER

  return (
    <div className='dark:bg-gray-900 h-[calc(100vh-60px)]'>
      <div className='flex flex-col justify-center h-full gap-4 mx-auto'>
        <section className='py-8 antialiased md:py-16 '>
          <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16'>
              <div className='max-w-md mx-auto shrink-0 lg:max-w-lg'>
                <img className='w-full dark:block' src={imgUrl} alt={product.title} />
              </div>

              <div className='mt-6 sm:mt-8 lg:mt-0'>
                <h1 className='text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white'>{product.title}</h1>
                <div className='mt-4 sm:items-center sm:gap-4 sm:flex'>
                  <p className='text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white'>
                    {formatMoney(product.price)}
                  </p>
                </div>
                <div className='flex items-center gap-2 mt-6'>
                  <Label>Quantity</Label>
                  <Select id='countries' required>
                    {[...Array(10).keys()].map((i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </Select>
                  <Button onClick={() => onAddToCart(product)}>
                    <svg
                      className='w-5 h-5 -ms-2 me-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6'
                      />
                    </svg>
                    Add to cart
                  </Button>
                </div>

                <hr className='my-6 border-gray-200 md:my-8 dark:border-gray-800' />

                <p className='mb-6 text-gray-500 dark:text-gray-400'>{product.description}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
