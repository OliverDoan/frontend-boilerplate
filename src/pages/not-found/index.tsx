import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className='dark:bg-gray-700 h-[calc(100vh-60px)]'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
        <div className='max-w-screen-sm mx-auto text-center'>
          <h1 className='mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl dark:text-white'>404</h1>
          <p className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white'>
            Something's missing.
          </p>
          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
            Sorry, we can't find that page. You'll find lots to explore on the home page.{' '}
          </p>
          <Link to={'/'} className='inline-flex text-center'>
            <Button>Back to Homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
