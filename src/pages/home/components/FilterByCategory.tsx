import { Sidebar } from 'flowbite-react'

export default function FilterByCategory() {
  return (
    <Sidebar.Collapse label='CATEGORY' open={true}>
      <Sidebar.Item href='#'>Products</Sidebar.Item>
      <Sidebar.Item href='#'>Sales</Sidebar.Item>
      <Sidebar.Item href='#'>Refunds</Sidebar.Item>
      <Sidebar.Item href='#'>Shipping</Sidebar.Item>
    </Sidebar.Collapse>
  )
}
