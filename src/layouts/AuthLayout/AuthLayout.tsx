import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

interface Props {
  children?: React.ReactNode
}
function AuthLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
}

export default AuthLayout
