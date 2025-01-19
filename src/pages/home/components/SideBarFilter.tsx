import { Sidebar } from 'flowbite-react'

export default function SideBarFilter() {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse label='DANH MỤC S N PH M' open={true}>
            <Sidebar.Item href='#'>Products</Sidebar.Item>
            <Sidebar.Item href='#'>Sales</Sidebar.Item>
            <Sidebar.Item href='#'>Refunds</Sidebar.Item>
            <Sidebar.Item href='#'>Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse label='KHOẢNG GIÁ' open={true}>
            <Sidebar.Item href='#'>Products</Sidebar.Item>
            <Sidebar.Item href='#'>Sales</Sidebar.Item>
            <Sidebar.Item href='#'>Refunds</Sidebar.Item>
            <Sidebar.Item href='#'>Shipping</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
