export default function ProductDetailSkeletons() {
  return (
    <div className='dark:bg-gray-900 h-[calc(100vh-60px)] '>
      <div className='flex flex-col justify-center h-full gap-4 mx-auto'>
        <section className='py-8 antialiased md:py-16 '>
          <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 animate-pulse h-[400px]'>
              <div className='flex items-center justify-center h-full mb-4 bg-gray-300 rounded dark:bg-gray-700'>
                <svg
                  className='w-20 h-20 text-gray-200 dark:text-gray-600'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 16 20'
                >
                  <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                  <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                </svg>
              </div>
              <div className='mt-6 sm:mt-8 lg:mt-0'>
                <div className='w-full h-10 mb-4 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>

                <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>

                <hr className='my-6 border-gray-200 md:my-8 dark:border-gray-800' />
                <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
