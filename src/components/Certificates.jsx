import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { useT, pick } from '../i18n'
import { FaExpand, FaTimes, FaUser } from 'react-icons/fa'

function Certificates() {
  const { t, lang } = useT()
  const certificates = useStore((state) => state.certificates)
  const [activeCert, setActiveCert] = useState(null)

  return (
    <section id="certificates" className="py-16 lg:py-24 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 text-xs font-bold uppercase tracking-widest">
            {t('certs.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            {t('certs.title1')}{' '}
            <span className="text-orange-500">{t('certs.title2')}</span>
          </h2>
          <p className="text-zinc-400 text-sm">
            {t('certs.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 overflow-hidden transition-colors"
            >
              <div
                onClick={() => setActiveCert(cert)}
                className="relative h-52 bg-zinc-950 overflow-hidden cursor-pointer"
              >
                <img
                  src={cert.image}
                  alt={pick(cert.title, lang)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 text-zinc-950 text-sm font-bold">
                    <FaExpand /> {t('certs.viewLarge')}
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-white leading-snug text-[15px]">{pick(cert.title, lang)}</h3>
                  <span className="shrink-0 px-2 py-0.5 rounded bg-orange-500/15 text-orange-500 text-[11px] font-bold">
                    {pick(cert.badge, lang) || t('certs.certBadge')}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <FaUser className="text-orange-500" />
                  <span className="font-semibold text-zinc-300">{cert.issuedTo}</span>
                  <span className="text-zinc-600">&middot;</span>
                  <span>{pick(cert.course, lang)}</span>
                </div>
                <p className="text-sm text-zinc-400 line-clamp-2">{pick(cert.description, lang)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-3xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-orange-500 text-zinc-300 hover:text-zinc-950 transition-colors cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>
            <h3 className="text-xl font-extrabold text-white pr-10">{pick(activeCert.title, lang)}</h3>
            <div className="rounded-xl overflow-hidden max-h-[58vh]">
              <img src={activeCert.image} alt={pick(activeCert.title, lang)} className="w-full h-full object-contain bg-zinc-950" />
            </div>
            <div className="text-sm text-zinc-300 space-y-1">
              <p><strong className="text-zinc-100">{t('certs.owner')}</strong> {activeCert.issuedTo}</p>
              <p><strong className="text-zinc-100">{t('certs.course')}</strong> {pick(activeCert.course, lang)}</p>
              <p className="text-zinc-400 text-xs mt-2">{pick(activeCert.description, lang)}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
