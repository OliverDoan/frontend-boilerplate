import { Card } from 'flowbite-react'

export default function CardProduct() {
  return (
    <Card imgAlt='Apple Watch Series 7 in colors pink, silver, and black' className='max-w-sm h-fit'>
      <div className=''>
        <img src='https://flowbite-react.com/images/products/apple-watch.png' alt='' />
      </div>
      <a href='#'>
        <h5 className='font-semibold tracking-tight text-gray-900 dark:text-white'>
          Apple Watch Series 7 GPS, Aluminium Case
        </h5>
      </a>
      <div className='flex items-center justify-between'>
        <span className='text-xl font-bold text-gray-900 dark:text-white'>$599</span>
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
