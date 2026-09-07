import React from 'react'
import { useStore } from '../store/useStore'
import { useT, pick } from '../i18n'
import { FaBriefcase, FaBookOpen } from 'react-icons/fa'

function Teachers() {
  const { t, lang } = useT()
  const teachers = useStore((state) => state.teachers)

  return (
    <section id="teachers" className="py-16 lg:py-24 bg-zinc-900 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-sky-500 text-xs font-bold uppercase tracking-widest">
            {t('teachers.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            {t('teachers.title1')}{' '}
            <span className="text-orange-500">{t('teachers.title2')}</span>{' '}
            {t('teachers.title3')}
          </h2>
          <p className="text-zinc-400 text-sm">
            {t('teachers.desc')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-12">
          {teachers.map((tch) => (
            <div
              key={tch.id}
              className="group rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-orange-500/40 overflow-hidden transition-colors"
            >
              <div className="relative h-56 overflow-hidden bg-zinc-800">
                <img
                  src={tch.image}
                  alt={tch.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur text-orange-400 text-[11px] font-bold border border-zinc-800">
                  {tch.subject}
                </span>
              </div>

              <div className="p-4 space-y-2.5">
                <h3 className="font-bold text-white leading-snug text-[15px]">{tch.name}</h3>
                <div className="flex items-start gap-2 text-xs text-zinc-400">
                  <FaBookOpen className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>{pick(tch.role, lang)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <FaBriefcase className="text-orange-500" />
                  {pick(tch.experience, lang) || t('teachers.experienceDefault')}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Teachers
