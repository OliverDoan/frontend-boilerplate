import { Sidebar } from 'flowbite-react'
import { CATEGORIES } from 'src/api/mock/category'

export default function FilterByCategory({
  onChange,
  currentCategory
}: {
  onChange: (idCategory: string) => void
  currentCategory: string
}) {
  const categoryList = CATEGORIES

  const handleCategoryClick = (idCategory: number) => {
    if (onChange) {
      onChange(idCategory.toString())
    }
  }

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
