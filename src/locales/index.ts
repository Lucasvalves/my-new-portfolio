import en from './en'
import pt from './pt'

export const translations = {
  en,
  pt
}
export function getTranslation(lang: keyof typeof translations) {
  return translations[lang]
}

export type Language = keyof typeof translations
