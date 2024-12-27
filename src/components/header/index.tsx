import { Button, DarkThemeToggle, Navbar } from 'flowbite-react'
import { useMatch } from 'react-router-dom'

export default function HeaderMain() {
  const rootMatch = useMatch('/')
  const isHomePage = Boolean(rootMatch)

  return (
    <Navbar fluid className='bg-gray-700 dark:bg-gray-900'>
      <Navbar.Brand href='/'>
        <span className='self-center text-xl font-semibold text-white whitespace-nowrap'>Logo</span>
      </Navbar.Brand>
      <div className='flex gap-4 md:order-2'>
        <DarkThemeToggle />
        {isHomePage && <Button href='/login'>Đăng nhập</Button>}
      </div>
    </Navbar>
  )
}
