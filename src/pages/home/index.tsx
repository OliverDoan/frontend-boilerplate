import CardProduct from 'src/components/card-product'
import CardProductSkeletons from 'src/components/card-product-skeletons'
import SideBarFilter from 'src/pages/home/components/SideBarFilter'

export default function HomePage() {
  return (
    <div className='flex w-full min-h-screen gap-4 p-4 dark:bg-gray-900'>
      <SideBarFilter />
      <div className='grid gap-4 mb-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
        <CardProduct />
        <CardProductSkeletons />
      </div>
    </div>
  )
}
