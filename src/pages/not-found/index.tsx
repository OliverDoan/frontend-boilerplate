import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <section className='bg-white  h-screen'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white '>404</h1>
          <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl '>{" Something's missing."}</p>
          <p className='mb-4 text-lg font-light text-gray-500 '>
            {"Sorry, we can't find that page. You'll find lots to explore on the home page."}
          </p>
          <button
            type='button'
            onClick={() => {
              navigate('/')
            }}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer'
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </section>
  )
}

export default NotFound
