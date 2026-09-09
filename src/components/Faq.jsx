import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { useT, pick } from '../i18n'
import { FaPlus, FaMinus } from 'react-icons/fa'

function Faq() {
  const { t, lang } = useT()
  const faqs = useStore((state) => state.faqs)
  const [openId, setOpenId] = useState(null)

  return (
    <section id="faq" className="py-16 lg:py-24 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center space-y-4 mb-12">
          <span className="inline-block px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-widest">
            {t('faq.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            {t('faq.title1')}{' '}
            <span className="text-orange-500">{t('faq.title2')}</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen ? 'border-orange-500/50 bg-zinc-900 shadow-lg shadow-orange-500/5' : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                }`}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-white leading-snug">{pick(faq.question, lang)}</span>
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-orange-500 text-zinc-950' : 'bg-zinc-800 text-orange-400'}`}>
                    {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                  </span>
                </button>
                <div className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-4">
                    {pick(faq.answer, lang)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Faq