import React, { useState, useRef, useEffect } from 'react'
import { useStore } from '../store/useStore'
import { LANGS } from '../i18n'

function LanguageSwitcher({ light = false, scope = 'site' }) {
  const isAdminScope = scope === 'admin'
  const lang = useStore((state) => (isAdminScope ? state.adminLang : state.siteLang))
  const setLang = useStore((state) => (isAdminScope ? state.setAdminLang : state.setSiteLang))
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = LANGS.find((l) => l.code === lang) || LANGS[0]

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
          light
            ? 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:text-white'
            : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
        }`}
        title="Language / Til"
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span className="uppercase">{current.code}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl bg-zinc-900 border border-zinc-700 shadow-2xl overflow-hidden z-50">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => { setLang(l.code); setOpen(false) }}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-bold transition-colors cursor-pointer ${
                l.code === lang ? 'bg-orange-500/15 text-orange-400' : 'text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              <span className="text-sm leading-none">{l.flag}</span>
              <span>{l.name}</span>
              {l.code === lang && <span className="ml-auto text-[10px]">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
