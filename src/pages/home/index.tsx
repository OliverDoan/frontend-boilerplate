import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation('home')

  return <div>{t('home__page')}</div>
}
