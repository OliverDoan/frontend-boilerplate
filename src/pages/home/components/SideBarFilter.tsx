import { Sidebar } from 'flowbite-react'
import FilterByCategory from 'src/pages/home/components/FilterByCategory'
import FilterByPrice from 'src/pages/home/components/FilterByPRICE'

export default function SideBarFilter() {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <FilterByCategory />
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <FilterByPrice />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
