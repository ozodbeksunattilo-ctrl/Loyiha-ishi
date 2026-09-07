import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { useT, pick } from '../i18n'
import { getYouTubeEmbed } from '../utils/media'
import { FaPlay, FaTimes, FaCheck, FaStar, FaUsers, FaGraduationCap } from 'react-icons/fa'

function Hero() {
  const { t, lang } = useT()
  const siteInfo = useStore((state) => state.siteInfo)
  const openConsultationModal = useStore((state) => state.openConsultationModal)
  const [promoOpen, setPromoOpen] = useState(false)
  const promoUrl = getYouTubeEmbed(siteInfo.promoYoutubeUrl)

  const bullets = t('hero.bullets')

  return (
    <>
      <section className="relative bg-zinc-950 text-white border-b border-zinc-900 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[460px] h-[460px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300">
                <FaUsers className="text-orange-500 text-sm" />
                {pick(siteInfo.studentCountText, lang) || '2500+ o\u2018quvchi ta\u2019lim olmoqda'}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight leading-[1.12]">
                <span className="text-zinc-100">{pick(siteInfo.heroTitleStart, lang) || 'Farzandingizni yutuqli kelajakka'}</span>{' '}
                <span className="text-orange-500">{pick(siteInfo.heroTitleHighlight, lang) || 'kelajak kasblari va tillari'}</span>{' '}
                <span className="text-zinc-100">{pick(siteInfo.heroTitleEnd, lang) || 'bilan tayyorlang'}</span>
              </h1>

              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
                {pick(siteInfo.heroSubtitle, lang) || "7 yoshdan 20 yoshgacha bo'lgan bolalar va o'smirlar uchun IT, Ingliz tili hamda Rus tili kurslari"}
              </p>

              <ul className="space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-[10px]" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openConsultationModal()}
                  className="px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-extrabold text-sm transition-all shadow-xl shadow-orange-500/25 active:scale-95 cursor-pointer"
                >
                  {t('hero.cta')}
                </button>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-xs" />)}
                  </span>
                  <span>{t('hero.recommended')}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-[4/3] shadow-2xl">
                <img
                  src={siteInfo.heroImageUrl || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'}
                  alt="MEGA EDU o'quv jarayoni"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />

                {promoUrl && (
                  <button
                    onClick={() => setPromoOpen(true)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  >
                    <span className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      <FaPlay className="ml-0.5" />
                    </span>
                  </button>
                )}
              </div>

              <div className="absolute -bottom-5 left-6 right-6 sm:left-8 sm:right-auto sm:w-auto sm:max-w-sm rounded-2xl bg-zinc-900/95 backdrop-blur border border-zinc-800 p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-500">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t('hero.certTitle')}</p>
                    <p className="text-[11px] text-zinc-400">{t('hero.certDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {promoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <button
              onClick={() => setPromoOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-orange-500 text-zinc-300 hover:text-zinc-950 transition-colors z-10 cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>
            <div className="rounded-xl overflow-hidden aspect-video w-full bg-black">
              <iframe
                src={`${promoUrl}?autoplay=1`}
                title="Promo video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero
