import { Outlet } from 'react-router-dom'
import HeaderMain from 'src/components/header'

export default function Layout() {
  return (
    <>
      <HeaderMain />
      <Outlet />
    </>
  )
}
