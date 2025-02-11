import { Avatar, Button, DarkThemeToggle, Dropdown, Navbar, Select } from 'flowbite-react'
import { useTranslation } from 'react-i18next'
import { MdLanguage } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { LANGUAGES } from 'src/constants/languages'

export default function HeaderMain() {
  const token = ''
  const userEmail = ''

  const isLogin = Boolean(token)
  const { i18n } = useTranslation()

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value
    i18n.changeLanguage(lang_code)
  }

  const onLogout = () => {}

  return (
    <Navbar fluid className='bg-gray-700 dark:bg-gray-900'>
      <Link to={'/'}>
        <span className='self-center text-xl font-semibold text-white whitespace-nowrap'>Logo</span>
      </Link>
      <div className='flex gap-4 md:order-2'>
        <DarkThemeToggle />
        <Select id='languages' defaultValue={i18n.language} onChange={onChangeLang} icon={MdLanguage}>
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </Select>
        <Button>
          <Link to={'/cart'}>
            <svg
              className='w-5 h-5 me-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6'
              />
            </svg>
          </Link>
        </Button>
        {!isLogin ? (
          <Button>
            <Link to={'/login'}>
              <span>Đăng nhập</span>
            </Link>
          </Button>
        ) : (
          <div className='flex md:order-2'>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt='User settings'
                  img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className='block text-sm font-medium truncate'>{userEmail}</span>
              </Dropdown.Header>
              <Dropdown.Item onClick={onLogout}>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        )}
      </div>
    </Navbar>
  )
}
