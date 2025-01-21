import { Sidebar } from 'flowbite-react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllCategory } from 'src/redux/reducer/category.reducer'
import { RootState, useAppDispatch } from 'src/redux/store'

export default function FilterByCategory({
  onChange,
  currentCategory
}: {
  onChange: (idCategory: string) => void
  currentCategory: string
}) {
  const categoryList = useSelector((state: RootState) => state.category.categoryList)

  const dispatch = useAppDispatch()
  const handleCategoryClick = (idCategory: number) => {
    if (onChange) {
      onChange(idCategory.toString())
    }
  }
  useEffect(() => {
    const promise = dispatch(getAllCategory())
    // cleanup function
    return () => {
      promise.abort()
    }
  }, [dispatch])

  const checkActionSideBar = (id: number) => {
    if (id.toString() === currentCategory || (id === 0 && currentCategory === '')) {
      return true
    }
    return false
  }

  return (
    <Sidebar.Collapse label='CATEGORY' open={true}>
      {[{ id: 0, name: 'All', image: '' }, ...categoryList].map((item) => (
        <Sidebar.Item key={item.id} onClick={() => handleCategoryClick(item.id)} active={checkActionSideBar(item.id)}>
          {item.name}
        </Sidebar.Item>
      ))}
    </Sidebar.Collapse>
  )
}
