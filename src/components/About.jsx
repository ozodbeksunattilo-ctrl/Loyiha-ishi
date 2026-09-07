import React from 'react'
import { useT } from '../i18n'
import { FaAward, FaUserGraduate, FaChalkboardTeacher, FaSmile } from 'react-icons/fa'

function About() {
  const { t } = useT()

  const stats = [
    { icon: <FaUserGraduate />, value: '2500+', label: t('about.stat1') },
    { icon: <FaChalkboardTeacher />, value: '25+', label: t('about.stat2') },
    { icon: <FaAward />, value: '98%', label: t('about.stat3') },
    { icon: <FaSmile />, value: '60+', label: t('about.stat4') }
  ]

  return (
    <section id="about" className="py-16 lg:py-20 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-5">
            <span className="inline-block px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-widest">
              {t('about.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {t('about.title1')}{' '}
              <span className="text-orange-500">{t('about.title2')}</span>{' '}
              {t('about.title3')}
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              {t('about.desc')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="mt-0.5 w-5 h-5 rounded-md bg-orange-500/15 text-orange-500 flex items-center justify-center flex-shrink-0"><span className="text-[10px] font-bold">1</span></span>
                {t('about.item1')}
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="mt-0.5 w-5 h-5 rounded-md bg-orange-500/15 text-orange-500 flex items-center justify-center flex-shrink-0"><span className="text-[10px] font-bold">2</span></span>
                {t('about.item2')}
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="mt-0.5 w-5 h-5 rounded-md bg-orange-500/15 text-orange-500 flex items-center justify-center flex-shrink-0"><span className="text-[10px] font-bold">3</span></span>
                {t('about.item3')}
              </li>
            </ul>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors"
            >
              {t('about.link')}
              <span className="text-base">→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 text-center hover:border-orange-500/40 transition-colors">
                <div className="mx-auto w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-xl mb-3">
                  {s.icon}
                </div>
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="text-xs text-zinc-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
