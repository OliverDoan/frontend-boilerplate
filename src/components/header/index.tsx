import { Button, DarkThemeToggle, Navbar, Select } from 'flowbite-react'
import { useTranslation } from 'react-i18next'
import { Link, useMatch } from 'react-router-dom'
import { LANGUAGES } from 'src/constants/languages'
import { MdLanguage } from 'react-icons/md'

export default function HeaderMain() {
  const rootMatch = useMatch('/')
  const isHomePage = Boolean(rootMatch)
  const { i18n } = useTranslation()

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value
    i18n.changeLanguage(lang_code)
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
        {isHomePage && (
          <Button>
            <Link to={'/login'}>
              <span>Đăng nhập</span>
            </Link>
          </Button>
        )}
      </div>
    </Navbar>
  )
}
