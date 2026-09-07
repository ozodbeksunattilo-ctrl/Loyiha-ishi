import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { useT, pick } from '../i18n'
import { getYouTubeEmbed, getYouTubeThumbnail } from '../utils/media'
import { FaPlay, FaStar, FaTimes, FaQuoteLeft } from 'react-icons/fa'

function Reviews() {
  const { t, lang } = useT()
  const reviews = useStore((state) => state.reviews)
  const [activeVideoUrl, setActiveVideoUrl] = useState(null)

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-zinc-900 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-widest">
            {t('reviews.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
          {t('reviews.title1')}{' '}
          <span className="text-orange-500">{t('reviews.title2')}</span>
          </h2>
          <p className="text-zinc-400 text-sm">
            {t('reviews.desc')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="group flex flex-col rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-orange-500/40 overflow-hidden transition-colors"
            >
              <div className="relative h-48 bg-zinc-800 overflow-hidden cursor-pointer" onClick={() => setActiveVideoUrl(r.youtubeUrl || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>
                <img
                  src={r.videoThumbnail || getYouTubeThumbnail(r.youtubeUrl) || r.avatar}
                  alt={r.parentName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-white/15 backdrop-blur border border-white/30 text-white flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <FaPlay className="ml-0.5" />
                  </span>
                </div>
                <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-950/80 text-amber-400 text-xs font-bold">
                  <FaStar /> {r.rating || 5}.0
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <FaQuoteLeft className="text-orange-500/60 text-xl" />
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed italic">"{pick(r.comment, lang)}"</p>

                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">{r.parentName}</p>
                    <p className="text-xs text-zinc-500">{t('reviews.student')} {pick(r.studentName, lang)}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-orange-500/15 text-orange-400 text-xs font-semibold">
                    {pick(r.course, lang)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-orange-500 text-zinc-300 hover:text-zinc-950 transition-colors z-10 cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>
            <div className="rounded-xl overflow-hidden aspect-video w-full bg-black">
              <iframe
                src={`${getYouTubeEmbed(activeVideoUrl) || 'https://www.youtube.com/embed/dQw4w9WgXcQ'}?autoplay=1`}
                title="YouTube Video Player"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Reviews
