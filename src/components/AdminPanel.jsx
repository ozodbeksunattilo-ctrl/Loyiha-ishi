import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import ImageUploader from './ImageUploader'
import { getYouTubeThumbnail } from '../utils/media'
import admins from '../data/admins.json'
import {
  FaInbox,
  FaCog,
  FaBook,
  FaUserTie,
  FaComments,
  FaCertificate,
  FaQuestionCircle,
  FaTrash,
  FaEdit,
  FaPlus,
  FaArrowLeft,
  FaPhoneAlt,
  FaSyncAlt,
  FaLock,
  FaUserShield,
  FaKey,
  FaSignOutAlt,
  FaClock,
  FaListOl,
  FaExclamationTriangle,
  FaEye,
  FaEyeSlash,
  FaBars,
  FaHome,
  FaSpinner,
  FaGoogle,
  FaBell,
  FaCheckDouble,
  FaTimes
} from 'react-icons/fa'

function AdminPanel() {
  const store = useStore()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('applications')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileSidebar, setMobileSidebar] = useState(false)

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [gmailOpen, setGmailOpen] = useState(false)
  const [gmailStep, setGmailStep] = useState('email')
  const [gmailEmail, setGmailEmail] = useState('')
  const [gmailPass, setGmailPass] = useState('')
  const [showGmailPass, setShowGmailPass] = useState(false)
  const [gmailLogging, setGmailLogging] = useState(false)
  const [authError, setAuthError] = useState('')
  const [isLogging, setIsLogging] = useState(false)

  const [siteForm, setSiteForm] = useState(store.siteInfo)
  const [advForm, setAdvForm] = useState(null)
  const [courseForm, setCourseForm] = useState(null)
  const [teacherForm, setTeacherForm] = useState(null)
  const [reviewForm, setReviewForm] = useState(null)
  const [certForm, setCertForm] = useState(null)
  const [faqForm, setFaqForm] = useState(null)
  const [statusFilter, setStatusFilter] = useState('Barchasi')
  const [notifOpen, setNotifOpen] = useState(false)
  const [toasts, setToasts] = useState([])
  const lastAppIdRef = useRef(store.applications[0]?.id || null)

  const dismissToast = (id) => setToasts((prev) => prev.filter((t) => t.id !== id))

  useEffect(() => {
    const first = store.applications[0]
    if (first && lastAppIdRef.current && first.id !== lastAppIdRef.current) {
      const toast = { id: Date.now() + Math.random(), name: first.name, course: first.course, phone: first.phone }
      setToasts((prev) => [toast, ...prev].slice(0, 4))
      setNotifOpen(false)
    }
    if (first) lastAppIdRef.current = first.id
  }, [store.applications])

  useEffect(() => {
    if (toasts.length === 0) return
    const timers = toasts.map((t) => setTimeout(() => dismissToast(t.id), 8000))
    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [toasts])

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setAuthError('')
    setIsLogging(true)
    setTimeout(() => {
      const result = store.loginAdmin(loginEmail, loginPassword)
      if (!result.success) {
        setAuthError(result.message)
      }
      setIsLogging(false)
    }, 800)
  }

  const handleGmailEmailSubmit = (e) => {
    e.preventDefault()
    setAuthError('')
    const found = admins.find((a) => a.email.toLowerCase() === gmailEmail.trim().toLowerCase())
    if (!found) {
      setAuthError("Bu Gmail hisobi ruxsat etilmagan.")
      return
    }
    setGmailStep('password')
  }

  const handleGmailPasswordSubmit = (e) => {
    e.preventDefault()
    setAuthError('')
    setGmailLogging(true)
    setTimeout(() => {
      const result = store.loginAdmin(gmailEmail, gmailPass)
      if (!result.success) {
        setAuthError(result.message)
      }
      setGmailLogging(false)
    }, 800)
  }

  const handleLogout = () => {
    store.logoutAdmin()
    setLoginEmail('')
    setLoginPassword('')
  }

  const newLeadsCount = store.applications.filter((a) => a.status === 'Yangi').length

  const handleSaveSiteInfo = (e) => {
    e.preventDefault()
    store.updateSiteInfo(siteForm)
    alert("Sayt sozlamalari muvaffaqiyatli saqlandi!")
  }

  const handleSaveAdvantage = (e) => {
    e.preventDefault()
    if (advForm.id) { store.updateAdvantage(advForm.id, advForm) } else { store.addAdvantage(advForm) }
    setAdvForm(null)
  }
  const handleSaveCourse = (e) => {
    e.preventDefault()
    if (courseForm.id) { store.updateCourse(courseForm.id, courseForm) } else { store.addCourse(courseForm) }
    setCourseForm(null)
  }
  const handleSaveTeacher = (e) => {
    e.preventDefault()
    if (teacherForm.id) { store.updateTeacher(teacherForm.id, teacherForm) } else { store.addTeacher(teacherForm) }
    setTeacherForm(null)
  }
  const handleSaveReview = (e) => {
    e.preventDefault()
    if (reviewForm.id) { store.updateReview(reviewForm.id, reviewForm) } else { store.addReview(reviewForm) }
    setReviewForm(null)
  }
  const handleSaveCert = (e) => {
    e.preventDefault()
    if (certForm.id) { store.updateCertificate(certForm.id, certForm) } else { store.addCertificate(certForm) }
    setCertForm(null)
  }
  const handleSaveFaq = (e) => {
    e.preventDefault()
    if (faqForm.id) { store.updateFaq(faqForm.id, faqForm) } else { store.addFaq(faqForm) }
    setFaqForm(null)
  }

  const filteredApplications = statusFilter === 'Barchasi'
    ? store.applications
    : store.applications.filter((a) => a.status === statusFilter)

  // ======== LOGIN PAGE ========
  if (!store.auth.isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center mx-auto text-2xl">
                <FaUserShield />
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Admin Panelga Kirish</h2>
              <p className="text-xs text-zinc-400">Faqat ruxsat berilgan admin hisoblari</p>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold flex items-center gap-2">
                <FaExclamationTriangle className="flex-shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            {/* Gmail login */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => { setGmailOpen(!gmailOpen); setAuthError('') }}
                disabled={gmailLogging}
                className="w-full py-3 rounded-2xl bg-white text-zinc-800 font-bold text-sm flex items-center justify-center gap-2.5 hover:bg-zinc-100 transition-all disabled:opacity-50 cursor-pointer border border-zinc-200"
              >
                <FaGoogle className="text-red-500 text-base" />
                <span>{gmailLogging ? (<><FaSpinner className="animate-spin" /> Tekshirilmoqda...</>) : 'Gmail bilan kirish'}</span>
              </button>

              {gmailOpen && (
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
                  <p className="px-4 py-3 text-[11px] text-zinc-500 font-semibold border-b border-zinc-800">
                    Google hisobingiz bilan kirish
                  </p>

                  {gmailStep === 'email' ? (
                    <form onSubmit={handleGmailEmailSubmit} className="p-4 space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-zinc-400 mb-1.5">Gmail manzilingiz</label>
                        <input
                          type="email"
                          required
                          autoFocus
                          placeholder="megaedu.admin@gmail.com"
                          value={gmailEmail}
                          onChange={(e) => { setGmailEmail(e.target.value); setAuthError('') }}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-semibold text-white outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-sm transition-colors cursor-pointer"
                      >
                        Davom etish
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleGmailPasswordSubmit} className="p-4 space-y-3">
                      <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                        <span className="block text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">Hisob</span>
                        <span className="block text-sm font-bold text-white truncate">{gmailEmail}</span>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-400 mb-1.5">Parol</label>
                        <div className="relative">
                          <input
                            type={showGmailPass ? 'text' : 'password'}
                            required
                            autoFocus
                            placeholder="••••••••"
                            value={gmailPass}
                            onChange={(e) => { setGmailPass(e.target.value); setAuthError('') }}
                            className="w-full px-4 pr-12 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-semibold text-white outline-none focus:border-orange-500 transition-colors"
                          />
                          <button
                            type="button"
                            onClick={() => setShowGmailPass(!showGmailPass)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-white transition-colors cursor-pointer"
                          >
                            {showGmailPass ? <FaEyeSlash className="text-xs" /> : <FaEye className="text-xs" />}
                          </button>
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={gmailLogging}
                        className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-sm transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        Kirish
                      </button>
                      <button
                        type="button"
                        onClick={() => { setGmailStep('email'); setGmailPass(''); setAuthError('') }}
                        className="w-full text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        ← Boshqa hisob
                      </button>
                    </form>
                  )}
                </div>
              )}

              <div className="flex items-center gap-3 py-1">
                <span className="flex-1 h-px bg-zinc-800" />
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">yoki</span>
                <span className="flex-1 h-px bg-zinc-800" />
              </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5">Email Manzili</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                    <FaKey className="text-xs" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="admin@megaedu.uz"
                    value={loginEmail}
                    onChange={(e) => { setLoginEmail(e.target.value); setAuthError('') }}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-sm font-semibold text-white outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5">Parol</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                    <FaLock className="text-xs" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => { setLoginPassword(e.target.value); setAuthError('') }}
                    className="w-full pl-10 pr-12 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-sm font-semibold text-white outline-none focus:border-orange-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-white transition-colors cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash className="text-xs" /> : <FaEye className="text-xs" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLogging}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 font-black text-sm uppercase tracking-wider shadow-lg active:scale-98 transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {isLogging ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Tekshirilmoqda...</span>
                  </>
                ) : (
                  <span>Tizimga Kirish</span>
                )}
              </button>
            </form>

            <div className="pt-2">
              <button
                onClick={() => navigate('/')}
                className="w-full py-2 text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <FaArrowLeft />
                <span>Landing Page ga qaytish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ======== ADMIN LAYOUT WITH SIDEBAR + TOPBAR ========
  const sidebarItems = [
    { id: 'applications', label: 'Arizalar', icon: <FaInbox />, badge: newLeadsCount, desc: "Landing sahifadan kelgan arizalarni ko'rish va holatini boshqarish" },
    { id: 'site', label: 'Sayt Matnlari', icon: <FaCog />, desc: "Bosh sahifadagi matnlar, rasm va kontaktlarni o'zgartirish" },
    { id: 'advantages', label: 'Nega Biz?', icon: <FaListOl />, count: store.advantages.length, desc: "\u201CNega aynan MEGA EDU?\u201D bo'limidagi afzallik kartochkalari" },
    { id: 'courses', label: 'Kurslar', icon: <FaBook />, count: store.courses.length, desc: "Saytdagi ta'lim kurslarini qo'shish, o'zgartirish va o'chirish" },
    { id: 'teachers', label: "O'qituvchilar", icon: <FaUserTie />, count: store.teachers.length, desc: "Ustozlar ro'yxati, rasmlari va tajribasini boshqarish" },
    { id: 'reviews', label: 'Otzivlar', icon: <FaComments />, count: store.reviews.length, desc: "Ota-onalar fikrlari va YouTube video otzivlar" },
    { id: 'certs', label: 'Sertifikatlar', icon: <FaCertificate />, count: store.certificates.length, desc: "Bitiruvchilar sertifikatlarini boshqarish" },
    { id: 'faq', label: 'Savol-Javob', icon: <FaQuestionCircle />, count: store.faqs.length, desc: "Ko'p so'raladigan savollar va ularning javoblari" },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">

      {/* Mobile sidebar overlay */}
      {mobileSidebar && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={() => setMobileSidebar(false)} />
      )}

      {/* SIDEBAR */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen z-50 bg-zinc-900 border-r border-zinc-800 transition-all duration-300 flex flex-col ${
        sidebarOpen ? 'w-64' : 'w-20'
      } ${mobileSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

        {/* Sidebar header */}
        <div className={`h-16 flex items-center border-b border-zinc-800 px-4 flex-shrink-0 ${sidebarOpen ? 'justify-between' : 'justify-center'}`}>
          {sidebarOpen && (
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-zinc-950 text-sm font-black">
                M
              </div>
              <div>
                <p className="font-extrabold text-sm text-white leading-none">MEGA EDU</p>
                <p className="text-[10px] text-zinc-500 font-medium">Admin Panel</p>
              </div>
            </div>
          )}
          <button
            onClick={() => { setSidebarOpen(!sidebarOpen); setMobileSidebar(false) }}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer hidden lg:flex"
          >
            <FaBars className="text-xs" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-3 px-2.5 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMobileSidebar(false) }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === item.id
                  ? 'bg-orange-500 text-zinc-950 shadow-lg shadow-orange-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <span className="text-sm flex-shrink-0">{item.icon}</span>
              {sidebarOpen && (
                <>
                  <span className="flex-1 text-left truncate">{item.label}</span>
                  {item.badge > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-black min-w-[20px] text-center">
                      {item.badge}
                    </span>
                  )}
                  {item.count !== undefined && item.badge === undefined && (
                    <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-[10px] font-bold">
                      {item.count}
                    </span>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="p-2.5 border-t border-zinc-800 space-y-1.5 flex-shrink-0">
          <button
            onClick={() => navigate('/')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer ${!sidebarOpen ? 'justify-center' : ''}`}
          >
            <FaHome className="text-sm flex-shrink-0" />
            {sidebarOpen && <span>Landing Page</span>}
          </button>
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all cursor-pointer ${!sidebarOpen ? 'justify-center' : ''}`}
          >
            <FaSignOutAlt className="text-sm flex-shrink-0" />
            {sidebarOpen && <span>Chiqish</span>}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* TOPBAR */}
        <header className="sticky top-0 z-30 h-16 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between px-4 sm:px-6 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebar(true)}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white lg:hidden cursor-pointer"
            >
              <FaBars />
            </button>
            <div>
              <h1 className="font-extrabold text-base sm:text-lg text-white">
                {sidebarItems.find(i => i.id === activeTab)?.label || 'Admin'}
              </h1>
              <p className="text-[10px] text-zinc-500 font-medium hidden sm:block">
                {sidebarItems.find((i) => i.id === activeTab)?.desc || 'MEGA EDU Boshqaruv Tizimi'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 relative">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-300">
              <FaUserShield className="text-orange-400" />
              <span>{store.auth.currentUser?.name || "Admin"}</span>
            </div>

            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-zinc-300 transition-colors cursor-pointer"
              title="Arizalar"
            >
              <FaBell />
              {newLeadsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-black flex items-center justify-center">
                  {newLeadsCount}
                </span>
              )}
            </button>

            {notifOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setNotifOpen(false)} />
                <div className="absolute top-14 right-0 z-40 w-80 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                    <p className="text-sm font-bold text-white">Yangi Arizalar</p>
                    <button
                      onClick={() => { setActiveTab('applications'); setNotifOpen(false) }}
                      className="text-[11px] text-orange-400 hover:text-orange-300 font-semibold cursor-pointer"
                    >
                      Barchasini ko'rish →
                    </button>
                  </div>
                  <div className="max-h-80 overflow-y-auto divide-y divide-zinc-800/70">
                    {store.applications.length === 0 ? (
                      <p className="px-4 py-6 text-center text-xs text-zinc-500">Hozircha arizalar yo'q</p>
                    ) : (
                      store.applications.slice(0, 6).map((app) => (
                        <div key={app.id} className="flex items-start gap-3 px-4 py-3">
                          <span className={`mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center text-xs flex-shrink-0 ${app.status === 'Yangi' ? 'bg-red-500/15 text-red-400' : 'bg-emerald-500/15 text-emerald-400'}`}>
                            <FaInbox />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-white truncate">{app.name}</p>
                            <p className="text-xs text-zinc-400 truncate">{app.course}</p>
                            <p className="text-[11px] text-zinc-500">{app.phone}</p>
                            <p className="text-[10px] text-zinc-600">{app.createdAt}</p>
                          </div>
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold flex-shrink-0 ${app.status === 'Yangi' ? 'bg-red-500/15 text-red-400' : 'bg-zinc-800 text-zinc-400'}`}>
                            {app.status}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                  {newLeadsCount > 0 && (
                    <div className="px-4 py-2.5 border-t border-zinc-800 bg-zinc-950">
                      <p className="text-[11px] text-zinc-500 flex items-center gap-1.5">
                        <FaCheckDouble className="text-zinc-600" />
                        Arizalar sahifasida holatini yangilashingiz mumkin
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}

            <button
              onClick={() => {
                if (window.confirm("Barcha ma'lumotlarni boshlang'ich holatga qaytarishni xohlaysizmi?")) {
                  store.resetToDefault()
                  setSiteForm(useStore.getState().siteInfo)
                }
              }}
              className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs transition-colors cursor-pointer"
              title="Reset"
            >
              <FaSyncAlt />
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">

          {/* TAB: ARIZALAR */}
          {activeTab === 'applications' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black uppercase text-white">Kelib tushgan Arizalar</h2>
                  <p className="text-xs text-zinc-400 mt-1">Landing page dan yuborilgan barcha konsultatsiya so'rovlari</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Barchasi', 'Yangi', "Bog'lanildi", 'Qabul qilindi', 'Bekor qilindi'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        statusFilter === st
                          ? 'bg-orange-500 text-zinc-950'
                          : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {filteredApplications.length === 0 ? (
                <div className="p-16 text-center bg-zinc-900/50 rounded-3xl border border-zinc-800 text-zinc-400 text-sm">
                  Arizalar mavjud emas.
                </div>
              ) : (
                <div className="grid gap-4">
                  {filteredApplications.map((app) => (
                    <div key={app.id} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-extrabold text-base text-white">{app.name}</span>
                          <span className="text-xs text-orange-400 font-bold px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">{app.course}</span>
                          <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                            app.status === 'Yangi' ? 'bg-red-500 text-white' :
                            app.status === "Bog'lanildi" ? 'bg-amber-500 text-zinc-950' :
                            app.status === 'Qabul qilindi' ? 'bg-emerald-500 text-white' : 'bg-zinc-700 text-zinc-300'
                          }`}>
                            {app.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-zinc-300">
                          <span className="flex items-center gap-1 font-bold text-emerald-400">
                            <FaPhoneAlt /> {app.phone}
                          </span>
                          <span className="text-zinc-500 flex items-center gap-1">
                            <FaClock /> {app.createdAt}
                          </span>
                        </div>
                        {app.note && <p className="text-xs text-zinc-400 italic">"{app.note}"</p>}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <select
                          value={app.status}
                          onChange={(e) => store.updateApplicationStatus(app.id, e.target.value)}
                          className="px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-700 text-xs font-bold text-white outline-none cursor-pointer"
                        >
                          <option value="Yangi">Yangi</option>
                          <option value="Bog'lanildi">Bog'lanildi</option>
                          <option value="Qabul qilindi">Qabul qilindi</option>
                          <option value="Bekor qilindi">Bekor qilindi</option>
                        </select>
                        <button onClick={() => store.deleteApplication(app.id)} className="p-2.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors cursor-pointer" title="O'chirish">
                          <FaTrash className="text-xs" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB: SAYT SOZLAMALARI */}
          {activeTab === 'site' && (
            <form onSubmit={handleSaveSiteInfo} className="max-w-4xl space-y-6 bg-zinc-900 p-6 sm:p-8 rounded-3xl border border-zinc-800">
              <div>
                <h2 className="text-xl font-black uppercase text-white border-b border-zinc-800 pb-3">Sayt Matnlari</h2>
                <p className="text-xs text-zinc-500 mt-2">Bu bo'limdagi matnlar landing sahifada ko'rinadi. Har bir maydon ostida nima yozish kerakligi ko'rsatilgan.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">O'quv Markazi Nomi</label>
                  <input type="text" value={siteForm.title || ''} onChange={(e) => setSiteForm({ ...siteForm, title: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm font-bold text-white outline-none focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-orange-400 mb-1">Asosiy Telefon Raqami</label>
                  <input type="text" value={siteForm.headerPhone || ''} onChange={(e) => setSiteForm({ ...siteForm, headerPhone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-orange-500 text-sm font-extrabold text-orange-400 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">O'quvchilar soni matni</label>
                  <input type="text" value={siteForm.studentCountText || ''} onChange={(e) => setSiteForm({ ...siteForm, studentCountText: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm font-semibold text-white outline-none focus:border-orange-500" />
                </div>
                <div className="md:col-span-2">
                  <ImageUploader
                    value={siteForm.heroImageUrl || ''}
                    onChange={(img) => setSiteForm({ ...siteForm, heroImageUrl: img })}
                    label="Hero (Banner) Rasmi"
                    aspectClass="h-28"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-orange-400 mb-1">Telefon (xalqaro ko'rinish)</label>
                  <input type="text" value={siteForm.rawPhone || ''} onChange={(e) => setSiteForm({ ...siteForm, rawPhone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-orange-500 text-sm font-extrabold text-orange-400 outline-none" placeholder="998770272300" />
                  <p className="text-[10px] text-zinc-500 mt-1">Bosish orqali qo'ng'iroq qilish uchun: 998770272300</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">Manzil</label>
                  <input type="text" value={siteForm.address || ''} onChange={(e) => setSiteForm({ ...siteForm, address: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm font-semibold text-white outline-none focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">Ish vaqti</label>
                  <input type="text" value={siteForm.workingHours || ''} onChange={(e) => setSiteForm({ ...siteForm, workingHours: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm font-semibold text-white outline-none focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-red-400 mb-1">Promo YouTube Video Link</label>
                  <input type="text" placeholder="https://www.youtube.com/watch?v=..." value={siteForm.promoYoutubeUrl || ''} onChange={(e) => setSiteForm({ ...siteForm, promoYoutubeUrl: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm font-semibold text-white outline-none focus:border-orange-500" />
                </div>
              </div>
              <div className="space-y-4 pt-2">
                <p className="text-xs font-bold text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5">
                  Bosh sahifa sarlavhasi 3 qismdan iborat: 1-qism (oq matn) — 2-qism (to'q sariq matn) — 3-qism (oq matn). Uchasi birlashib bitta gap hosil qiladi.
                </p>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">Hero Sarlavha (1-qism)</label>
                  <input type="text" value={siteForm.heroTitleStart || ''} onChange={(e) => setSiteForm({ ...siteForm, heroTitleStart: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm font-bold text-white outline-none focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">Hero Rangli Sarlavha (2-qism)</label>
                  <input type="text" value={siteForm.heroTitleHighlight || ''} onChange={(e) => setSiteForm({ ...siteForm, heroTitleHighlight: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm font-bold text-amber-400 outline-none focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">Hero Subtitle</label>
                  <textarea rows="2" value={siteForm.heroSubtitle || ''} onChange={(e) => setSiteForm({ ...siteForm, heroSubtitle: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white outline-none focus:border-orange-500" />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-cyan-400 mb-1">Telegram Link</label>
                  <input type="text" value={siteForm.telegramUrl || ''} onChange={(e) => setSiteForm({ ...siteForm, telegramUrl: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-medium text-white outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-fuchsia-400 mb-1">Instagram Link</label>
                  <input type="text" value={siteForm.instagramUrl || ''} onChange={(e) => setSiteForm({ ...siteForm, instagramUrl: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-medium text-white outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-red-400 mb-1">YouTube Link</label>
                  <input type="text" value={siteForm.youtubeUrl || ''} onChange={(e) => setSiteForm({ ...siteForm, youtubeUrl: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-medium text-white outline-none" />
                </div>
              </div>
              <button type="submit" className="px-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-black text-sm uppercase tracking-wider transition-colors cursor-pointer">Sozlamalarni Saqlash</button>
            </form>
          )}

          {/* TAB: AFZALLIKLAR */}
          {activeTab === 'advantages' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black uppercase text-white">Afzalliklar Boshqaruvi</h2>
                <button onClick={() => setAdvForm({ num: `0${store.advantages.length + 1}`, title: '', desc: '' })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> Yangi Qo'shish
                </button>
              </div>
              {advForm && (
                <form onSubmit={handleSaveAdvantage} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-xl">
                  <h3 className="text-lg font-black text-orange-400">{advForm.id ? "Tahrirlash" : "Yangi Qo'shish"}</h3>
                  <div className="grid md:grid-cols-4 gap-3">
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold text-zinc-400 mb-1">Raqam</label>
                      <input type="text" value={advForm.num} onChange={(e) => setAdvForm({ ...advForm, num: e.target.value })} className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" />
                    </div>
                    <div className="md:col-span-3">
                      <label className="block text-xs font-bold text-zinc-400 mb-1">Sarlavha</label>
                      <input type="text" required value={advForm.title} onChange={(e) => setAdvForm({ ...advForm, title: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-1">Tavsifi</label>
                    <textarea rows="2" value={advForm.desc} onChange={(e) => setAdvForm({ ...advForm, desc: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white outline-none" />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-5 py-2 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">Saqlash</button>
                    <button type="button" onClick={() => setAdvForm(null)} className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">Bekor</button>
                  </div>
                </form>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {store.advantages.map((adv) => (
                  <div key={adv.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex justify-between gap-4">
                    <div>
                      <span className="text-orange-400 font-black text-xs mr-2">[{adv.num}]</span>
                      <span className="font-extrabold text-sm text-white">{adv.title}</span>
                      <p className="text-xs text-zinc-400 mt-1">{adv.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button onClick={() => setAdvForm(adv)} className="p-2 rounded bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"><FaEdit className="text-xs" /></button>
                      <button onClick={() => store.deleteAdvantage(adv.id)} className="p-2 rounded bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white cursor-pointer"><FaTrash className="text-xs" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: KURSLAR */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black uppercase text-white">Kurslar Boshqaruvi</h2>
                <button onClick={() => setCourseForm({ category: 'IT', title: '', ageRange: '9-17 yosh', subtitle: '', description: '', duration: '6 oy', lessonsPerWeek: 'Haftada 3 kun', price: "500 000 so'm / oy", popular: false, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80' })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> Yangi Kurs Qo'shish
                </button>
              </div>
              {courseForm && (
                <form onSubmit={handleSaveCourse} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-2xl">
                  <h3 className="text-lg font-black text-orange-400">{courseForm.id ? "Kursni Tahrirlash" : "Yangi Kurs"}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 mb-1">Kategoriya</label>
                      <select value={courseForm.category} onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none">
                        <option value="IT">IT</option>
                        <option value="Ingliz tili">Ingliz tili</option>
                        <option value="Rus tili">Rus tili</option>
                        <option value="Biologiya">Biologiya</option>
                        <option value="Fizika">Fizika</option>
                        <option value="Kimyo">Kimyo</option>
                        <option value="Tarix">Tarix</option>
                        <option value="Huquq">Huquq</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 mb-1">Kurs Nomi</label>
                      <input type="text" required value={courseForm.title} onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 mb-1">Yosh Chegarasi</label>
                      <input type="text" value={courseForm.ageRange} onChange={(e) => setCourseForm({ ...courseForm, ageRange: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 mb-1">Narxi</label>
                      <input type="text" value={courseForm.price} onChange={(e) => setCourseForm({ ...courseForm, price: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" />
                    </div>
                  </div>
                  <div><label className="block text-xs font-bold text-zinc-400 mb-1">Sub-sarlavha</label><input type="text" value={courseForm.subtitle} onChange={(e) => setCourseForm({ ...courseForm, subtitle: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-semibold text-white outline-none" /></div>
                  <div><label className="block text-xs font-bold text-zinc-400 mb-1">Batafsil Tavsifi</label><textarea rows="3" value={courseForm.description} onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white outline-none" /></div>
                  <ImageUploader
                    value={courseForm.image || ''}
                    onChange={(img) => setCourseForm({ ...courseForm, image: img })}
                    label="Kurs Rasmi (URL yoki fayl)"
                    aspectClass="h-28"
                  />
                  <div className="flex items-center gap-3">
                    <button type="submit" className="px-5 py-2.5 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">Saqlash</button>
                    <button type="button" onClick={() => setCourseForm(null)} className="px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">Bekor</button>
                  </div>
                </form>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {store.courses.map((c) => (
                  <div key={c.id} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between space-y-4">
                    <div>
                      {c.image && (
                        <img src={c.image} alt={c.title} className="w-full h-28 object-cover rounded-xl mb-3" />
                      )}
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded bg-orange-500/20 text-orange-400 font-bold text-xs">{c.category}</span>
                        <span className="text-xs text-purple-400 font-bold">{c.ageRange}</span>
                      </div>
                      <h3 className="font-extrabold text-base text-white">{c.title}</h3>
                      <p className="text-xs text-amber-400 font-bold mt-1">{c.price}</p>
                      <p className="text-xs text-zinc-400 line-clamp-2 mt-2">{c.description}</p>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
                      <button onClick={() => setCourseForm(c)} className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold flex items-center gap-1 cursor-pointer"><FaEdit /> Tahrirlash</button>
                      <button onClick={() => store.deleteCourse(c.id)} className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold flex items-center gap-1 cursor-pointer"><FaTrash /> O'chirish</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: O'QITUVCHILAR */}
          {activeTab === 'teachers' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black uppercase text-white">O'qituvchilar Boshqaruvi</h2>
                <button onClick={() => setTeacherForm({ name: '', role: '', subject: 'IT', experience: '5 yillik tajriba', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> Yangi Ustoz
                </button>
              </div>
              {teacherForm && (
                <form onSubmit={handleSaveTeacher} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-xl">
                  <h3 className="text-lg font-black text-orange-400">{teacherForm.id ? "Tahrirlash" : "Yangi Ustoz"}</h3>
                  <ImageUploader
                    value={teacherForm.image || ''}
                    onChange={(img) => setTeacherForm({ ...teacherForm, image: img })}
                    label="Ustoz Rasmi (URL yoki fayl)"
                    aspectClass="h-24"
                  />
                  <div className="space-y-3">
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">F.I.Sh</label><input type="text" required value={teacherForm.name} onChange={(e) => setTeacherForm({ ...teacherForm, name: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">Lavozimi</label><input type="text" value={teacherForm.role} onChange={(e) => setTeacherForm({ ...teacherForm, role: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 mb-1">Fan</label>
                      <select value={teacherForm.subject} onChange={(e) => setTeacherForm({ ...teacherForm, subject: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none">
                        <option value="IT">IT</option>
                        <option value="Ingliz tili">Ingliz tili</option>
                        <option value="Rus tili">Rus tili</option>
                        <option value="Biologiya">Biologiya</option>
                        <option value="Fizika">Fizika</option>
                        <option value="Kimyo">Kimyo</option>
                        <option value="Tarix">Tarix</option>
                        <option value="Huquq">Huquq</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-5 py-2 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">Saqlash</button>
                    <button type="button" onClick={() => setTeacherForm(null)} className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">Bekor</button>
                  </div>
                </form>
              )}
              <div className="grid md:grid-cols-3 gap-5">
                {store.teachers.map((t) => (
                  <div key={t.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-extrabold text-sm text-white truncate">{t.name}</p>
                      <p className="text-xs text-orange-400 font-semibold truncate">{t.role}</p>
                      <span className="text-[10px] text-zinc-400">{t.subject} • {t.experience}</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button onClick={() => setTeacherForm(t)} className="p-2 rounded bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"><FaEdit className="text-xs" /></button>
                      <button onClick={() => store.deleteTeacher(t.id)} className="p-2 rounded bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white cursor-pointer"><FaTrash className="text-xs" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: OTZIVLAR */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black uppercase text-white">Otzivlar Boshqaruvi</h2>
                <button onClick={() => setReviewForm({ parentName: '', studentName: '', course: 'IT Kids', comment: '', rating: 5, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', videoThumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80', youtubeUrl: '' })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> Yangi Otziv
                </button>
              </div>
              {reviewForm && (
                <form onSubmit={handleSaveReview} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-xl">
                  <h3 className="text-lg font-black text-orange-400">{reviewForm.id ? "Tahrirlash" : "Yangi Otziv"}</h3>
                  <div className="space-y-3">
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">Ota-ona Ismi</label><input type="text" required value={reviewForm.parentName} onChange={(e) => setReviewForm({ ...reviewForm, parentName: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">O'quvchi ismi va yoshi</label><input type="text" value={reviewForm.studentName} onChange={(e) => setReviewForm({ ...reviewForm, studentName: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <div><label className="block text-xs font-bold text-red-400 mb-1">YouTube Video Link</label><input type="text" placeholder="https://www.youtube.com/watch?v=..." value={reviewForm.youtubeUrl || ''} onChange={(e) => { const url = e.target.value; const thumb = getYouTubeThumbnail(url); setReviewForm({ ...reviewForm, youtubeUrl: url, videoThumbnail: thumb || reviewForm.videoThumbnail }) }} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <p className="text-[10px] text-zinc-500 -mt-1">Video qo'yilganda thumbnail avtomatik yuklanadi</p>
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">Fikr</label><textarea rows="3" value={reviewForm.comment} onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white outline-none" /></div>
                  </div>
                  <ImageUploader
                    value={reviewForm.videoThumbnail || reviewForm.avatar || ''}
                    onChange={(img) => setReviewForm({ ...reviewForm, videoThumbnail: img })}
                    label="Video Preview Rasmi (URL yoki fayl)"
                    aspectClass="h-24"
                  />
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-5 py-2 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">Saqlash</button>
                    <button type="button" onClick={() => setReviewForm(null)} className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">Bekor</button>
                  </div>
                </form>
              )}
              <div className="grid md:grid-cols-2 gap-5">
                {store.reviews.map((r) => (
                  <div key={r.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-4 items-center">
                    <img src={r.videoThumbnail || r.avatar} alt={r.parentName} className="w-20 h-14 rounded-xl object-cover flex-shrink-0 bg-zinc-950" />
                    <div className="flex-1 min-w-0">
                      <p className="font-extrabold text-sm text-white truncate">{r.parentName}</p>
                      <p className="text-xs text-sky-400 font-semibold truncate">O'quvchi: {r.studentName}</p>
                      <p className="text-[11px] text-zinc-500 mt-0.5 truncate">{r.youtubeUrl ? "Video biriktirilgan" : "Video link yo'q"}</p>
                      <p className="text-xs text-zinc-300 italic mt-1 font-medium line-clamp-2">"{r.comment}"</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button onClick={() => setReviewForm(r)} className="p-2 rounded bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"><FaEdit className="text-xs" /></button>
                      <button onClick={() => store.deleteReview(r.id)} className="p-2 rounded bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white cursor-pointer"><FaTrash className="text-xs" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SERTIFIKATLAR */}
          {activeTab === 'certs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black uppercase text-white">Sertifikatlar Boshqaruvi</h2>
                <button onClick={() => setCertForm({ title: '', course: 'Web Dasturlash', issuedTo: '', badge: 'Rasmiy Sertifikat', image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80', description: '' })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> Yangi Sertifikat
                </button>
              </div>
              {certForm && (
                <form onSubmit={handleSaveCert} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-xl">
                  <h3 className="text-lg font-black text-orange-400">{certForm.id ? "Tahrirlash" : "Yangi Sertifikat"}</h3>
                  <ImageUploader
                    value={certForm.image || ''}
                    onChange={(img) => setCertForm({ ...certForm, image: img })}
                    label="Sertifikat Rasmi (URL yoki fayl)"
                    aspectClass="h-24"
                  />
                  <div className="space-y-3">
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">Nomi</label><input type="text" required value={certForm.title} onChange={(e) => setCertForm({ ...certForm, title: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">Egasi</label><input type="text" value={certForm.issuedTo} onChange={(e) => setCertForm({ ...certForm, issuedTo: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">Kurs</label><input type="text" value={certForm.course} onChange={(e) => setCertForm({ ...certForm, course: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-5 py-2 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">Saqlash</button>
                    <button type="button" onClick={() => setCertForm(null)} className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">Bekor</button>
                  </div>
                </form>
              )}
              <div className="grid md:grid-cols-3 gap-5">
                {store.certificates.map((cert) => (
                  <div key={cert.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-3 items-center">
                    {cert.image && <img src={cert.image} alt={cert.title} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />}
                    <div className="flex-1 min-w-0">
                      <p className="font-extrabold text-sm text-white truncate">{cert.title}</p>
                      <p className="text-xs text-orange-400 font-semibold truncate">{cert.issuedTo}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button onClick={() => setCertForm(cert)} className="p-2 rounded bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"><FaEdit className="text-xs" /></button>
                      <button onClick={() => store.deleteCertificate(cert.id)} className="p-2 rounded bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white cursor-pointer"><FaTrash className="text-xs" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: FAQ */}
          {activeTab === 'faq' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black uppercase text-white">FAQ (Savol-Javoblar)</h2>
                <button onClick={() => setFaqForm({ question: '', answer: '' })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> Yangi Savol
                </button>
              </div>
              {faqForm && (
                <form onSubmit={handleSaveFaq} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-xl">
                  <h3 className="text-lg font-black text-orange-400">{faqForm.id ? "Tahrirlash" : "Yangi Savol"}</h3>
                  <div className="space-y-3">
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">Savol</label><input type="text" required value={faqForm.question} onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">Javob</label><textarea rows="3" required value={faqForm.answer} onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white outline-none" /></div>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-5 py-2 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">Saqlash</button>
                    <button type="button" onClick={() => setFaqForm(null)} className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">Bekor</button>
                  </div>
                </form>
              )}
              <div className="space-y-4">
                {store.faqs.map((f) => (
                  <div key={f.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-extrabold text-sm text-white">{f.question}</p>
                      <p className="text-xs text-zinc-400 mt-1">{f.answer}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button onClick={() => setFaqForm(f)} className="p-2 rounded bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"><FaEdit className="text-xs" /></button>
                      <button onClick={() => store.deleteFaq(f.id)} className="p-2 rounded bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white cursor-pointer"><FaTrash className="text-xs" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Toast notifications (new ariza) */}
      <div className="fixed top-20 right-4 z-[70] space-y-3 w-[340px] max-w-[calc(100vw-2rem)]">
        {toasts.map((t) => (
          <div key={t.id} className="animate-toast-in rounded-2xl bg-zinc-900 border border-orange-500/50 shadow-2xl shadow-orange-500/10 overflow-hidden">
            <div className="flex items-start gap-3 p-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center flex-shrink-0">
                <FaBell />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-black text-orange-400 uppercase tracking-wide">Yangi Ariza</p>
                <p className="text-sm font-bold text-white truncate mt-0.5">{t.name}</p>
                <p className="text-xs text-zinc-400 truncate">{t.course}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5 flex items-center gap-1.5">
                  <FaPhoneAlt className="text-orange-400" /> {t.phone}
                </p>
              </div>
              <button
                onClick={() => dismissToast(t.id)}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer flex-shrink-0"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPanel
