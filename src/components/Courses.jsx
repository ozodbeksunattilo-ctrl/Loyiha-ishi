import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { useT, pick } from '../i18n'
import { FaClock, FaCalendarAlt, FaArrowRight, FaUsers } from 'react-icons/fa'

function Courses() {
  const { t, lang } = useT()
  const courses = useStore((state) => state.courses)
  const openConsultationModal = useStore((state) => state.openConsultationModal)
  const [selectedCategory, setSelectedCategory] = useState('Barchasi')
  const allLabel = t('courses.all')

  const categories = [allLabel, ...courses.map((c) => c.category).filter((v, i, arr) => arr.indexOf(v) === i)]

  const filteredCourses = selectedCategory === allLabel
    ? courses
    : courses.filter((c) => c.category === selectedCategory)

  return (
    <section id="courses" className="py-16 lg:py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/25 text-orange-500 text-xs font-bold uppercase tracking-widest">
              {t('courses.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {t('courses.title1')}{' '}
              <span className="text-orange-500">{t('courses.title2')}</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              {t('courses.desc')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-zinc-950'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative flex flex-col rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-orange-500/50 overflow-hidden transition-colors"
            >
              <div className="relative h-44 overflow-hidden bg-zinc-800">
                <img
                  src={course.image}
                  alt={pick(course.title, lang)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-orange-500 text-zinc-950 text-xs font-extrabold">
                  {course.category}
                </span>
                {course.popular && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-amber-500 text-zinc-950 text-[11px] font-bold">
                    {t('courses.popular')}
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs text-zinc-500 font-semibold">{pick(course.ageRange, lang)}</span>
                <h3 className="mt-1 text-lg font-extrabold text-white leading-snug group-hover:text-orange-400 transition-colors">
                  {pick(course.title, lang)}
                </h3>
                <p className="mt-1.5 text-xs text-orange-400/90 font-medium">{pick(course.subtitle, lang)}</p>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {pick(course.description, lang)}
                </p>

                <div className="mt-4 space-y-2 border-t border-zinc-800 pt-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-zinc-500"><FaClock className="text-orange-500" /> {t('courses.duration')}</span>
                    <span className="font-semibold text-white">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-zinc-500"><FaCalendarAlt className="text-orange-500" /> {t('courses.schedule')}</span>
                    <span className="font-semibold text-white text-xs text-right">{pick(course.lessonsPerWeek, lang)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-zinc-500"><FaUsers className="text-orange-500" /> {t('courses.group')}</span>
                    <span className="font-semibold text-white">{t('courses.groupSize')}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] text-zinc-500">{t('courses.price')}</p>
                    <p className="text-lg font-black text-amber-400">{course.price}</p>
                  </div>
                  <button
                    onClick={() => openConsultationModal(pick(course.title, lang))}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-zinc-950 text-sm font-bold transition-colors cursor-pointer"
                  >
                    {t('courses.enroll')} <FaArrowRight className="text-[10px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Courses
