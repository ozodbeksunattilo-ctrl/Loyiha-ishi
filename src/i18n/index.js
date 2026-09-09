import { useStore } from '../store/useStore'
import { uz } from './translations/uz'
import { ru } from './translations/ru'
import { en } from './translations/en'

export const LANGS = [
  { code: 'uz', name: "O'zbek", flag: 'UZ' },
  { code: 'ru', name: 'Русский', flag: 'RU' },
  { code: 'en', name: 'English', flag: 'EN' }
]

const dicts = { uz, ru, en }

export function getDict(lang) {
  return dicts[lang] || uz
}

export function useT(scope = 'site') {
  const isAdminScope = scope === 'admin'
  const lang = useStore((state) => (isAdminScope ? state.adminLang : state.siteLang))
  const setLang = useStore((state) => (isAdminScope ? state.setAdminLang : state.setSiteLang))
  const dict = dicts[lang] || uz

  const t = (path) => {
    const keys = path.split('.')
    let val = dict
    for (const k of keys) {
      if (val == null) return path
      val = val[k]
    }
    return val == null ? path : val
  }

  return { t, lang, setLang, dict }
}

export function pick(obj, lang, field) {
  if (obj == null) return ''
  const val = field ? obj[field] : obj
  if (val == null) return ''
  if (typeof val === 'string') return val
  if (val[lang]) return val[lang]
  if (lang === 'ru') return val.en || val.uz || ''
  if (lang === 'en') return val.ru || val.uz || ''
  return val.uz || ''
}
