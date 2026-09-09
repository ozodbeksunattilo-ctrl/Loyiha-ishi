import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { useT, pick } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'
import { FaPhoneAlt, FaMapMarkerAlt, FaTelegramPlane, FaInstagram, FaGraduationCap, FaUserCog, FaClock, FaArrowRight } from 'react-icons/fa'

function Footer() {
  const navigate = useNavigate()
  const { t, lang } = useT()
  const siteInfo = useStore((state) => state.siteInfo)
  const openConsultationModal = useStore((state) => state.openConsultationModal)

  const quickLinks = [
    { href: '#courses', label: t('footer.quickCourses') },
    { href: '#about', label: t('footer.quickAbout') },
    { href: '#certificates', label: t('footer.quickCerts') },
    { href: '#reviews', label: t('footer.quickReviews') },
    { href: '#teachers', label: t('footer.quickTeachers') },
    { href: '#faq', label: t('footer.quickFaq') }
  ]

  const handleSectionScroll = (e, href) => {
    e.preventDefault()
    const el = document.getElementById(href.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-zinc-950">
                <FaGraduationCap className="text-lg" />
              </div>
              <span className="font-black text-xl tracking-wide">
                MEGA<span className="text-orange-500">EDU</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {pick(siteInfo.tagline, lang) || t('footer.taglineFallback')}
            </p>
            <button
              onClick={() => openConsultationModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-zinc-950 text-sm font-bold transition-colors cursor-pointer"
            >
              {t('footer.trial')} <FaArrowRight className="text-[10px]" />
            </button>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-300">{t('footer.sections')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => handleSectionScroll(e, l.href)} className="text-sm text-zinc-500 hover:text-orange-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-300">{t('footer.contact')}</h4>
            <div className="space-y-2.5 text-sm">
              <a href={`tel:${siteInfo.rawPhone || "998770272300"}`} className="flex items-center gap-2.5 text-zinc-400 hover:text-orange-400 transition-colors">
                <FaPhoneAlt className="text-orange-500 text-xs" />
                {siteInfo.headerPhone || "+998 (77) 027 23 00"}
              </a>
              <div className="flex items-start gap-2.5 text-zinc-400">
                <FaMapMarkerAlt className="text-orange-500 text-xs mt-1" />
                <span>{pick(siteInfo.address, lang) || t('footer.addressFallback')}</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-400">
                <FaClock className="text-orange-500 text-xs" />
                {pick(siteInfo.workingHours, lang) || t('footer.hoursFallback')}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-300">{t('footer.join')}</h4>
            <div className="flex items-center gap-3">
              <a href={siteInfo.telegramUrl || "https://t.me"} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-zinc-950 transition-all">
                <FaTelegramPlane className="text-base" />
              </a>
              <a href={siteInfo.instagramUrl || "https://instagram.com"} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-fuchsia-400 hover:bg-fuchsia-500 hover:text-zinc-950 transition-all">
                <FaInstagram className="text-base" />
              </a>
            </div>
            <LanguageSwitcher light />
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer"
            >
              <FaUserCog /> {t('footer.admin')}
            </button>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} MEGA EDU. {t('footer.rights')}</p>
          <p>{t('footer.bottom')}</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer