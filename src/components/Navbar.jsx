import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { FaPhoneAlt, FaUserCog, FaGraduationCap } from 'react-icons/fa'

function Navbar() {
  const navigate = useNavigate()
  const siteInfo = useStore((state) => state.siteInfo)
  const openConsultationModal = useStore((state) => state.openConsultationModal)

  const links = [
    { href: '#courses', label: 'Kurslar' },
    { href: '#about', label: 'Biz haqimizda' },
    { href: '#certificates', label: 'Sertifikatlar' },
    { href: '#reviews', label: 'Otzivlar' },
    { href: '#teachers', label: 'Jamoa' },
    { href: '#faq', label: 'Savol-javob' }
  ]

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">

        <a href="/" className="flex items-center gap-3 cursor-pointer group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-zinc-950 shadow-lg shadow-orange-500/20">
            <FaGraduationCap className="text-xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl leading-none tracking-wide">
              MEGA<span className="text-orange-500">EDU</span>
            </span>
            <span className="text-[10px] text-zinc-500 font-medium tracking-[0.2em] uppercase mt-1">
              O'quv Markazi
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors border-b border-transparent hover:border-orange-500 pb-0.5">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">

          <button
            onClick={() => navigate('/admin')}
            className="p-2.5 rounded-xl text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 transition-all cursor-pointer"
            title="Admin Panel"
          >
            <FaUserCog className="text-sm" />
          </button>

          <a
            href={`tel:${siteInfo.rawPhone || "998770272300"}`}
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-orange-400 transition-colors"
          >
            <FaPhoneAlt className="text-xs text-orange-500" />
            {siteInfo.headerPhone || "+998 (77) 027 23 00"}
          </a>

          <button
            onClick={() => openConsultationModal()}
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-sm shadow-lg shadow-orange-500/20 transition-all active:scale-95 cursor-pointer"
          >
            Ro'yxatdan o'tish
          </button>
        </div>

      </div>
    </header>
  )
}

export default Navbar
