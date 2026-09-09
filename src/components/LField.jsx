import React, { useState } from 'react'
import { LANGS } from '../i18n'
import { useStore } from '../store/useStore'

function LField({ value, onChange, label, className = '', textarea = false, required = false, placeholder = '', hint = null }) {
  const adminLang = useStore((state) => state.adminLang)
  const [active, setActive] = useState(adminLang || 'uz')
  const [prevLang, setPrevLang] = useState(adminLang)
  if (adminLang !== prevLang && LANGS.some((l) => l.code === adminLang)) {
    setPrevLang(adminLang)
    setActive(adminLang)
  }
  const current = value && typeof value === 'object' ? (value[active] ?? '') : (typeof value === 'string' ? value : '')

  const update = (v) => {
    const base = (value && typeof value === 'object') ? value : { uz: '', tg: '', ru: '', en: '' }
    onChange({ ...base, [active]: v })
  }

  const baseInput = `w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-semibold text-white outline-none focus:border-orange-500 ${className}`

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between mb-1">
          <label className="block text-xs font-bold text-zinc-400">{label}{required ? ' *' : ''}</label>
          <div className="flex items-center gap-1">
            {LANGS.map((l) => {
              const filled = value && typeof value === 'object' ? Boolean(value[l.code]) : false
              return (
                <button
                  type="button"
                  key={l.code}
                  onClick={() => setActive(l.code)}
                  title={l.name}
                  className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase transition-colors cursor-pointer ${
                    active === l.code ? 'bg-orange-500 text-zinc-950' : (filled ? 'bg-emerald-500/30 text-emerald-400 hover:bg-emerald-500/50' : 'bg-zinc-800 text-zinc-400 hover:text-white')
                  }`}
                >
                  {l.code}
                </button>
              )
            })}
          </div>
        </div>
      )}
      {textarea ? (
        <textarea
          rows={3}
          required={required}
          value={current}
          onChange={(e) => update(e.target.value)}
          placeholder={placeholder}
          lang={active}
          spellCheck={active === 'en' || active === 'ru'}
          className={baseInput}
        />
      ) : (
        <input
          type="text"
          required={required}
          value={current}
          onChange={(e) => update(e.target.value)}
          placeholder={placeholder}
          lang={active}
          spellCheck={active === 'en' || active === 'ru'}
          className={baseInput}
        />
      )}
      {hint && <p className="text-[10px] text-zinc-500 mt-1">{hint}</p>}
    </div>
  )
}

export default LField
