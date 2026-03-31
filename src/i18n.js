import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

function detectLocale() {
  const saved = localStorage.getItem('afera-locale')
  if (saved === 'fr' || saved === 'en') return saved

  const browserLang = navigator.language || navigator.languages?.[0] || 'en'
  return browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { en, fr },
})

export function setLocale(lang) {
  i18n.global.locale.value = lang
  localStorage.setItem('afera-locale', lang)
}
