import { useStore } from '../store/useStore'
import { uz } from './translations/uz'
import { tg } from './translations/tg'
import { ru } from './translations/ru'
import { en } from './translations/en'

export const LANGS = [
  { code: 'uz', name: "O'zbek", flag: 'UZ' },
  { code: 'tg', name: 'Тоҷикӣ', flag: 'TJ' },
  { code: 'ru', name: 'Русский', flag: 'RU' },
  { code: 'en', name: 'English', flag: 'EN' }
]

const dicts = { uz, tg, ru, en }

export function getDict(lang) {
  return dicts[lang] || uz
}

export function useT() {
  const lang = useStore((state) => state.lang)
  const setLang = useStore((state) => state.setLang)
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
  return val[lang] ?? val.uz ?? ''
}
