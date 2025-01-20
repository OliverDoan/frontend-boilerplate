import { Sidebar } from 'flowbite-react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllCategory } from 'src/redux/reducer/category.reducer'
import { RootState, useAppDispatch } from 'src/redux/store'

export default function FilterByCategory() {
  const loading = useSelector((state: RootState) => state.category.loading)
  const categoryList = useSelector((state: RootState) => state.category.categoryList)

  const dispatch = useAppDispatch()
  useEffect(() => {
    const promise = dispatch(getAllCategory())
    // cleanup function
    return () => {
      promise.abort()
    }
  }, [dispatch])
  return (
    <Sidebar.Collapse label='CATEGORY' open={true}>
      {loading ? (
        <>
          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mx-5'></div>
          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mx-5'></div>
        </>
      ) : (
        <>
          {[{ id: 0, name: 'All', image: '' }, ...categoryList].map((item) => (
            <Sidebar.Item href='#' key={item.id}>
              {item.name}
            </Sidebar.Item>
          ))}
        </>
      )}
    </Sidebar.Collapse>
  )
}
