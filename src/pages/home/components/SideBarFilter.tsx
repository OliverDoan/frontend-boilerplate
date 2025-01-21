import { Sidebar } from 'flowbite-react'
import { Filter } from 'src/api/types/product.type'
import FilterByCategory from 'src/pages/home/components/FilterByCategory'
import FilterByPrice from 'src/pages/home/components/FilterByPrice'

export default function SideBarFilter({
  onFiltersChange,
  currentCategory
}: {
  onFiltersChange: (data: Filter) => void
  currentCategory: string
}) {
  const handleCategoryChange = (newCategoryId: string) => {
    if (!onFiltersChange) return

    const newFilters = {
      categoryId: newCategoryId === '0' ? undefined : newCategoryId
    }
    onFiltersChange(newFilters)
  }

  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <FilterByCategory onChange={handleCategoryChange} currentCategory={currentCategory} />
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <FilterByPrice />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
