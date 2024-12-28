import HOME_VI from 'src/i18n/locales/vi/home.json'
import HOME_EN from 'src/i18n/locales/en/home.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const resources = {
  en: {
    home: HOME_EN
  },
  vi: {
    home: HOME_VI
  }
} as const

export const defaultNS = 'home'

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  ns: ['home'], // String or array of namespaces to load
  fallbackLng: 'vi', // Language to use if translations in user language are not available.
  defaultNS, // Default namespace used if not passed to translation function
  interpolation: {
    // Escape passed in values to avoid xss injection
    escapeValue: false // react already safes from xss
  }
})
