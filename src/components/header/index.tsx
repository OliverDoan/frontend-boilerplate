import { Avatar, Button, DarkThemeToggle, Dropdown, Navbar, Select } from 'flowbite-react'
import { useTranslation } from 'react-i18next'
import { MdLanguage } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LANGUAGES } from 'src/constants/languages'
import { logout } from 'src/redux/reducer/user.reducer'
import { RootState, useAppDispatch } from 'src/redux/store'

export default function HeaderMain() {
  const token = useSelector((state: RootState) => state.user.token)
  const userEmail = useSelector((state: RootState) => state.user.userEmail)
  const dispatch = useAppDispatch()

  const isLogin = Boolean(token)
  const { i18n } = useTranslation()

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value
    i18n.changeLanguage(lang_code)
  }

  const onLogout = () => {
    dispatch(logout())
  }

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
