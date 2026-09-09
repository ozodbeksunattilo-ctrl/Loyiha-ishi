import React from 'react'
import { useStore } from '../store/useStore'
import { useT, pick } from '../i18n'
import { FaLaptopCode, FaUserCheck, FaGamepad, FaAward, FaCertificate, FaProjectDiagram } from 'react-icons/fa'

function WhyChooseUs() {
  const { t, lang } = useT()
  const advantages = useStore((state) => state.advantages)

  const icons = [
    <FaLaptopCode key="laptop" />,
    <FaUserCheck key="user" />,
    <FaGamepad key="game" />,
    <FaAward key="award" />,
    <FaCertificate key="cert" />,
    <FaProjectDiagram key="project" />
  ]

  return (
    <section className="py-16 lg:py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-widest">
            {t('why.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            {t('why.title1')}{' '}
            <span className="text-orange-500">{t('why.title2')}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {advantages.map((a, idx) => (
            <div
              key={a.id || idx}
              className="rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-lg">
                  {icons[idx % icons.length]}
                </div>
                <span className="text-xs font-black text-zinc-600">0{idx + 1}</span>
              </div>
              <h3 className="font-bold text-white leading-snug">{pick(a.title, lang)}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{pick(a.desc, lang)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
