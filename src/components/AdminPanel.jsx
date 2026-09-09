import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { useT, pick } from '../i18n'
import ImageUploader from './ImageUploader'
import LField from './LField'
import LanguageSwitcher from './LanguageSwitcher'
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
  const { t, lang } = useT('admin')
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
  const [statusFilter, setStatusFilter] = useState('all')
  const [notifOpen, setNotifOpen] = useState(false)
  const [toasts, setToasts] = useState([])
  const lastAppIdRef = useRef(store.applications[0]?.id || null)

  const statusLabels = {
    all: t('admin.statusAll'),
    new: t('admin.statusNew'),
    contacted: t('admin.statusContacted'),
    accepted: t('admin.statusAccepted'),
    cancelled: t('admin.statusCancelled')
  }
  const STATUS_OPTIONS = [
    { code: 'all', label: statusLabels.all },
    { code: 'new', label: statusLabels.new },
    { code: 'contacted', label: statusLabels.contacted },
    { code: 'accepted', label: statusLabels.accepted },
    { code: 'cancelled', label: statusLabels.cancelled }
  ]
  const statusClass = (code) => {
    if (code === 'new') return 'bg-red-500 text-white'
    if (code === 'contacted') return 'bg-amber-500 text-zinc-950'
    if (code === 'accepted') return 'bg-emerald-500 text-white'
    return 'bg-zinc-700 text-zinc-300'
  }

  const dismissToast = (id) => setToasts((prev) => prev.filter((tt) => tt.id !== id))

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
    const timers = toasts.map((tt) => setTimeout(() => dismissToast(tt.id), 8000))
    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [toasts])

  const loginErrorMessage = (result) => {
    if (result.code === 'blocked') return t('store.blockMessage')
    return t('store.wrongCreds') + result.remaining
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setAuthError('')
    setIsLogging(true)
    setTimeout(() => {
      const result = store.loginAdmin(loginEmail, loginPassword)
      if (!result.success) {
        setAuthError(loginErrorMessage(result))
      }
      setIsLogging(false)
    }, 800)
  }

  const handleGmailEmailSubmit = (e) => {
    e.preventDefault()
    setAuthError('')
    const found = admins.find((a) => a.email.toLowerCase() === gmailEmail.trim().toLowerCase())
    if (!found) {
      setAuthError(t('admin.gmailNotAllowed'))
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
        setAuthError(loginErrorMessage(result))
      }
      setGmailLogging(false)
    }, 800)
  }

  const handleLogout = () => {
    store.logoutAdmin()
    setLoginEmail('')
    setLoginPassword('')
  }

  const newLeadsCount = store.applications.filter((a) => a.status === 'new').length

  const handleSaveSiteInfo = (e) => {
    e.preventDefault()
    store.updateSiteInfo(siteForm)
    alert(t('admin.saved'))
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

  const filteredApplications = statusFilter === 'all'
    ? store.applications
    : store.applications.filter((a) => a.status === statusFilter)

  // ======== LOGIN PAGE ========
  if (!store.auth.isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4">
        <div className="w-full max-w-md absolute top-4 right-4 flex justify-end">
          <LanguageSwitcher scope="admin" />
        </div>
        <div className="max-w-md w-full space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center mx-auto text-2xl">
                <FaUserShield />
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">{t('admin.loginTitle')}</h2>
              <p className="text-xs text-zinc-400">{t('admin.loginSubtitle')}</p>
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
                <span>{gmailLogging ? (<><FaSpinner className="animate-spin" /> {t('admin.checking')}</>) : t('admin.gmailLogin')}</span>
              </button>

              {gmailOpen && (
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
                  <p className="px-4 py-3 text-[11px] text-zinc-500 font-semibold border-b border-zinc-800">
                    {t('admin.gmailSubtitle')}
                  </p>

                  {gmailStep === 'email' ? (
                    <form onSubmit={handleGmailEmailSubmit} className="p-4 space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-zinc-400 mb-1.5">{t('admin.gmailAddress')}</label>
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
                        {t('admin.continue')}
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleGmailPasswordSubmit} className="p-4 space-y-3">
                      <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                        <span className="block text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">{t('admin.account')}</span>
                        <span className="block text-sm font-bold text-white truncate">{gmailEmail}</span>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-400 mb-1.5">{t('admin.password')}</label>
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
                        {t('admin.signIn')}
                      </button>
                      <button
                        type="button"
                        onClick={() => { setGmailStep('email'); setGmailPass(''); setAuthError('') }}
                        className="w-full text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {t('admin.backToLogin')}
                      </button>
                    </form>
                  )}
                </div>
              )}

              <div className="flex items-center gap-3 py-1">
                <span className="flex-1 h-px bg-zinc-800" />
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{t('admin.or')}</span>
                <span className="flex-1 h-px bg-zinc-800" />
              </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5">{t('admin.emailLabel')}</label>
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
                <label className="block text-xs font-bold text-zinc-400 mb-1.5">{t('admin.password')}</label>
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
                    <span>{t('admin.checking')}</span>
                  </>
                ) : (
                  <span>{t('admin.signIn')}</span>
                )}
              </button>
            </form>

            <div className="pt-2">
              <button
                onClick={() => navigate('/')}
                className="w-full py-2 text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <FaArrowLeft />
                <span>{t('admin.backToLanding')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ======== ADMIN LAYOUT WITH SIDEBAR + TOPBAR ========
  const sidebarItems = [
    { id: 'applications', label: t('admin.tabs.applications'), icon: <FaInbox />, badge: newLeadsCount, desc: t('admin.tabs.applicationsDesc') },
    { id: 'site', label: t('admin.tabs.site'), icon: <FaCog />, desc: t('admin.tabs.siteDesc') },
    { id: 'advantages', label: t('admin.tabs.advantages'), icon: <FaListOl />, count: store.advantages.length, desc: t('admin.tabs.advantagesDesc') },
    { id: 'courses', label: t('admin.tabs.courses'), icon: <FaBook />, count: store.courses.length, desc: t('admin.tabs.coursesDesc') },
    { id: 'teachers', label: t('admin.tabs.teachers'), icon: <FaUserTie />, count: store.teachers.length, desc: t('admin.tabs.teachersDesc') },
    { id: 'reviews', label: t('admin.tabs.reviews'), icon: <FaComments />, count: store.reviews.length, desc: t('admin.tabs.reviewsDesc') },
    { id: 'certs', label: t('admin.tabs.certs'), icon: <FaCertificate />, count: store.certificates.length, desc: t('admin.tabs.certsDesc') },
    { id: 'faq', label: t('admin.tabs.faq'), icon: <FaQuestionCircle />, count: store.faqs.length, desc: t('admin.tabs.faqDesc') },
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
                <p className="text-[10px] text-zinc-500 font-medium">{t('admin.adminPanel')}</p>
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
            {sidebarOpen && <span>{t('admin.landingPage')}</span>}
          </button>
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all cursor-pointer ${!sidebarOpen ? 'justify-center' : ''}`}
          >
            <FaSignOutAlt className="text-sm flex-shrink-0" />
            {sidebarOpen && <span>{t('admin.logout')}</span>}
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
                {sidebarItems.find((i) => i.id === activeTab)?.desc || 'MEGA EDU'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 relative">
            <LanguageSwitcher light scope="admin" />
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-300">
              <FaUserShield className="text-orange-400" />
              <span>{store.auth.currentUser?.name || 'Admin'}</span>
            </div>

            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-zinc-300 transition-colors cursor-pointer"
              title={t('admin.tabs.applications')}
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
                    <p className="text-sm font-bold text-white">{t('admin.title')}</p>
                    <button
                      onClick={() => { setActiveTab('applications'); setNotifOpen(false) }}
                      className="text-[11px] text-orange-400 hover:text-orange-300 font-semibold cursor-pointer"
                    >
                      {t('admin.viewAll')}
                    </button>
                  </div>
                  <div className="max-h-80 overflow-y-auto divide-y divide-zinc-800/70">
                    {store.applications.length === 0 ? (
                      <p className="px-4 py-6 text-center text-xs text-zinc-500">{t('admin.noApps')}</p>
                    ) : (
                      store.applications.slice(0, 6).map((app) => (
                        <div key={app.id} className="flex items-start gap-3 px-4 py-3">
                          <span className={`mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center text-xs flex-shrink-0 ${app.status === 'new' ? 'bg-red-500/15 text-red-400' : 'bg-emerald-500/15 text-emerald-400'}`}>
                            <FaInbox />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-white truncate">{app.name}</p>
                            <p className="text-xs text-zinc-400 truncate">{app.course}</p>
                            <p className="text-[11px] text-zinc-500">{app.phone}</p>
                            <p className="text-[10px] text-zinc-600">{app.createdAt}</p>
                          </div>
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold flex-shrink-0 ${app.status === 'new' ? 'bg-red-500/15 text-red-400' : 'bg-zinc-800 text-zinc-400'}`}>
                            {statusLabels[app.status] || app.status}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                  {newLeadsCount > 0 && (
                    <div className="px-4 py-2.5 border-t border-zinc-800 bg-zinc-950">
                      <p className="text-[11px] text-zinc-500 flex items-center gap-1.5">
                        <FaCheckDouble className="text-zinc-600" />
                        {t('admin.updateStatus')}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}

            <button
              onClick={() => {
                if (window.confirm(t('admin.resetConfirm'))) {
                  store.resetToDefault()
                  setSiteForm(useStore.getState().siteInfo)
                }
              }}
              className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs transition-colors cursor-pointer"
              title={t('admin.reset')}
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
                  <h2 className="text-xl font-black uppercase text-white">{t('admin.appsTitle')}</h2>
                  <p className="text-xs text-zinc-400 mt-1">{t('admin.appsDesc')}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {STATUS_OPTIONS.map((st) => (
                    <button
                      key={st.code}
                      onClick={() => setStatusFilter(st.code)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        statusFilter === st.code
                          ? 'bg-orange-500 text-zinc-950'
                          : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              {filteredApplications.length === 0 ? (
                <div className="p-16 text-center bg-zinc-900/50 rounded-3xl border border-zinc-800 text-zinc-400 text-sm">
                  {t('admin.noAppsTitle')}
                </div>
              ) : (
                <div className="grid gap-4">
                  {filteredApplications.map((app) => (
                    <div key={app.id} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-extrabold text-base text-white">{app.name}</span>
                          <span className="text-xs text-orange-400 font-bold px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">{app.course}</span>
                          <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${statusClass(app.status)}`}>
                            {statusLabels[app.status] || app.status}
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
                          {STATUS_OPTIONS.filter((o) => o.code !== 'all').map((o) => (
                            <option key={o.code} value={o.code}>{o.label}</option>
                          ))}
                        </select>
                        <button onClick={() => store.deleteApplication(app.id)} className="p-2.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors cursor-pointer" title={t('admin.titleAttr')}>
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
                <h2 className="text-xl font-black uppercase text-white border-b border-zinc-800 pb-3">{t('admin.siteTitle')}</h2>
                <p className="text-xs text-zinc-500 mt-2">{t('admin.siteHint')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">{t('admin.formCenterName')}</label>
                  <input type="text" value={siteForm.title || ''} onChange={(e) => setSiteForm({ ...siteForm, title: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm font-bold text-white outline-none focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-orange-400 mb-1">{t('admin.formMainPhone')}</label>
                  <input type="text" value={siteForm.headerPhone || ''} onChange={(e) => setSiteForm({ ...siteForm, headerPhone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-orange-500 text-sm font-extrabold text-orange-400 outline-none" />
                </div>
                <div className="md:col-span-2">
                  <LField value={siteForm.tagline} onChange={(v) => setSiteForm({ ...siteForm, tagline: v })} label={t('admin.formTagline')} textarea />
                </div>
                <div className="md:col-span-2">
                  <LField value={siteForm.studentCountText} onChange={(v) => setSiteForm({ ...siteForm, studentCountText: v })} label={t('admin.formStudentCount')} />
                </div>
                <div className="md:col-span-2">
                  <ImageUploader
                    value={siteForm.heroImageUrl || ''}
                    onChange={(img) => setSiteForm({ ...siteForm, heroImageUrl: img })}
                    label={t('admin.formHeroImage')}
                    aspectClass="h-28"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-orange-400 mb-1">{t('admin.formPhoneIntl')}</label>
                  <input type="text" value={siteForm.rawPhone || ''} onChange={(e) => setSiteForm({ ...siteForm, rawPhone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-orange-500 text-sm font-extrabold text-orange-400 outline-none" placeholder="998770272300" />
                  <p className="text-[10px] text-zinc-500 mt-1">{t('admin.formPhoneHint')}998770272300</p>
                </div>
                <div>
                  <LField value={siteForm.address} onChange={(v) => setSiteForm({ ...siteForm, address: v })} label={t('admin.formAddress')} />
                </div>
                <div>
                  <LField value={siteForm.workingHours} onChange={(v) => setSiteForm({ ...siteForm, workingHours: v })} label={t('admin.formWorkingHours')} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-red-400 mb-1">{t('admin.formPromoYoutube')}</label>
                  <input type="text" placeholder="https://www.youtube.com/watch?v=..." value={siteForm.promoYoutubeUrl || ''} onChange={(e) => setSiteForm({ ...siteForm, promoYoutubeUrl: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm font-semibold text-white outline-none focus:border-orange-500" />
                </div>
              </div>
              <div className="space-y-4 pt-2">
                <p className="text-xs font-bold text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5">
                  {t('admin.formHeroHint')}
                </p>
                <LField value={siteForm.heroTitleStart} onChange={(v) => setSiteForm({ ...siteForm, heroTitleStart: v })} label={t('admin.formHeroTitle1')} />
                <LField value={siteForm.heroTitleHighlight} onChange={(v) => setSiteForm({ ...siteForm, heroTitleHighlight: v })} label={t('admin.formHeroTitle2')} />
                <LField value={siteForm.heroTitleEnd} onChange={(v) => setSiteForm({ ...siteForm, heroTitleEnd: v })} label={t('admin.formHeroTitle3')} />
                <LField value={siteForm.heroSubtitle} onChange={(v) => setSiteForm({ ...siteForm, heroSubtitle: v })} label={t('admin.formHeroSubtitle')} textarea />
              </div>
              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-cyan-400 mb-1">{t('admin.formTelegramLink')}</label>
                  <input type="text" value={siteForm.telegramUrl || ''} onChange={(e) => setSiteForm({ ...siteForm, telegramUrl: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-medium text-white outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-fuchsia-400 mb-1">{t('admin.formInstagramLink')}</label>
                  <input type="text" value={siteForm.instagramUrl || ''} onChange={(e) => setSiteForm({ ...siteForm, instagramUrl: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-medium text-white outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-red-400 mb-1">{t('admin.formYouTubeLink')}</label>
                  <input type="text" value={siteForm.youtubeUrl || ''} onChange={(e) => setSiteForm({ ...siteForm, youtubeUrl: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-medium text-white outline-none" />
                </div>
              </div>
              <button type="submit" className="px-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-black text-sm uppercase tracking-wider transition-colors cursor-pointer">{t('admin.save')}</button>
            </form>
          )}

          {/* TAB: AFZALLIKLAR */}
          {activeTab === 'advantages' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black uppercase text-white">{t('admin.tabs.advantages')}</h2>
                <button onClick={() => setAdvForm({ num: `0${store.advantages.length + 1}`, title: { uz: '', tg: '', ru: '', en: '' }, desc: { uz: '', tg: '', ru: '', en: '' } })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> {t('admin.add')}
                </button>
              </div>
              {advForm && (
                <form onSubmit={handleSaveAdvantage} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-xl">
                  <h3 className="text-lg font-black text-orange-400">{advForm.id ? t('admin.edit') : t('admin.add')}</h3>
                  <div className="grid md:grid-cols-4 gap-3">
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold text-zinc-400 mb-1">{t('admin.formNumber')}</label>
                      <input type="text" value={advForm.num} onChange={(e) => setAdvForm({ ...advForm, num: e.target.value })} className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" />
                    </div>
                    <div className="md:col-span-3">
                      <LField value={advForm.title} onChange={(v) => setAdvForm({ ...advForm, title: v })} label={t('admin.formAdvTitle')} />
                    </div>
                  </div>
                  <LField value={advForm.desc} onChange={(v) => setAdvForm({ ...advForm, desc: v })} label={t('admin.formAdvDesc')} textarea />
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-5 py-2 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">{t('admin.save')}</button>
                    <button type="button" onClick={() => setAdvForm(null)} className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">{t('admin.cancel')}</button>
                  </div>
                </form>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {store.advantages.map((adv) => (
                  <div key={adv.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex justify-between gap-4">
                    <div>
                      <span className="text-orange-400 font-black text-xs mr-2">[{adv.num}]</span>
                      <span className="font-extrabold text-sm text-white">{pick(adv.title, lang)}</span>
                      <p className="text-xs text-zinc-400 mt-1">{pick(adv.desc, lang)}</p>
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
                <h2 className="text-xl font-black uppercase text-white">{t('admin.tabs.courses')}</h2>
                <button onClick={() => setCourseForm({ category: { uz: 'IT', tg: 'IT', ru: 'IT', en: 'IT' }, title: { uz: '', tg: '', ru: '', en: '' }, ageRange: { uz: '', tg: '', ru: '', en: '' }, subtitle: { uz: '', tg: '', ru: '', en: '' }, description: { uz: '', tg: '', ru: '', en: '' }, duration: { uz: '', tg: '', ru: '', en: '' }, lessonsPerWeek: { uz: '', tg: '', ru: '', en: '' }, price: { uz: '', tg: '', ru: '', en: '' }, popular: false, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80' })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> {t('admin.add')}
                </button>
              </div>
              {courseForm && (
                <form onSubmit={handleSaveCourse} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-2xl">
                  <h3 className="text-lg font-black text-orange-400">{courseForm.id ? t('admin.edit') : t('admin.add')}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <LField value={courseForm.category} onChange={(v) => setCourseForm({ ...courseForm, category: v })} label={t('admin.formCategory')} />
                    <LField value={courseForm.title} onChange={(v) => setCourseForm({ ...courseForm, title: v })} label={t('admin.formCourseName')} required />
                    <LField value={courseForm.ageRange} onChange={(v) => setCourseForm({ ...courseForm, ageRange: v })} label={t('admin.formAgeRange')} />
                    <LField value={courseForm.price} onChange={(v) => setCourseForm({ ...courseForm, price: v })} label={t('admin.formPrice')} />
                    <LField value={courseForm.duration} onChange={(v) => setCourseForm({ ...courseForm, duration: v })} label={t('admin.formDuration')} />
                    <LField value={courseForm.lessonsPerWeek} onChange={(v) => setCourseForm({ ...courseForm, lessonsPerWeek: v })} label={t('admin.formSchedule')} />
                  </div>
                  <LField value={courseForm.subtitle} onChange={(v) => setCourseForm({ ...courseForm, subtitle: v })} label={t('admin.formSubtitle')} />
                  <LField value={courseForm.description} onChange={(v) => setCourseForm({ ...courseForm, description: v })} label={t('admin.formDescription')} textarea />
                  <ImageUploader
                    value={courseForm.image || ''}
                    onChange={(img) => setCourseForm({ ...courseForm, image: img })}
                    label={t('admin.formCourseImage')}
                    aspectClass="h-28"
                  />
                  <label className="flex items-center gap-2 text-xs font-bold text-zinc-400 cursor-pointer">
                    <input type="checkbox" checked={!!courseForm.popular} onChange={(e) => setCourseForm({ ...courseForm, popular: e.target.checked })} className="accent-orange-500" />
                    {t('admin.formPopular')}
                  </label>
                  <div className="flex items-center gap-3">
                    <button type="submit" className="px-5 py-2.5 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">{t('admin.save')}</button>
                    <button type="button" onClick={() => setCourseForm(null)} className="px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">{t('admin.cancel')}</button>
                  </div>
                </form>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {store.courses.map((c) => (
                  <div key={c.id} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between space-y-4">
                    <div>
                      {c.image && (
                        <img src={c.image} alt={pick(c.title, lang)} className="w-full h-28 object-cover rounded-xl mb-3" />
                      )}
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded bg-orange-500/20 text-orange-400 font-bold text-xs">{pick(c.category, lang)}</span>
                        <span className="text-xs text-purple-400 font-bold">{pick(c.ageRange, lang)}</span>
                      </div>
                      <h3 className="font-extrabold text-base text-white">{pick(c.title, lang)}</h3>
                      <p className="text-xs text-amber-400 font-bold mt-1">{pick(c.price, lang)}</p>
                      <p className="text-xs text-zinc-400 line-clamp-2 mt-2">{pick(c.description, lang)}</p>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
                      <button onClick={() => setCourseForm(c)} className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold flex items-center gap-1 cursor-pointer"><FaEdit /> {t('admin.edit')}</button>
                      <button onClick={() => store.deleteCourse(c.id)} className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold flex items-center gap-1 cursor-pointer"><FaTrash /> {t('admin.delete')}</button>
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
                <h2 className="text-xl font-black uppercase text-white">{t('admin.tabs.teachers')}</h2>
                <button onClick={() => setTeacherForm({ name: '', role: { uz: '', tg: '', ru: '', en: '' }, subject: { uz: 'IT', tg: 'IT', ru: 'IT', en: 'IT' }, experience: { uz: '', tg: '', ru: '', en: '' }, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> {t('admin.add')}
                </button>
              </div>
              {teacherForm && (
                <form onSubmit={handleSaveTeacher} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-xl">
                  <h3 className="text-lg font-black text-orange-400">{teacherForm.id ? t('admin.edit') : t('admin.add')}</h3>
                  <ImageUploader
                    value={teacherForm.image || ''}
                    onChange={(img) => setTeacherForm({ ...teacherForm, image: img })}
                    label={t('admin.formTeacherImage')}
                    aspectClass="h-24"
                  />
                  <div className="space-y-3">
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">{t('admin.formFullName')}</label><input type="text" required value={teacherForm.name} onChange={(e) => setTeacherForm({ ...teacherForm, name: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <LField value={teacherForm.role} onChange={(v) => setTeacherForm({ ...teacherForm, role: v })} label={t('admin.formRole')} />
                    <LField value={teacherForm.subject} onChange={(v) => setTeacherForm({ ...teacherForm, subject: v })} label={t('admin.formSubject')} />
                    <LField value={teacherForm.experience} onChange={(v) => setTeacherForm({ ...teacherForm, experience: v })} label={t('admin.formExperience')} />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-5 py-2 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">{t('admin.save')}</button>
                    <button type="button" onClick={() => setTeacherForm(null)} className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">{t('admin.cancel')}</button>
                  </div>
                </form>
              )}
              <div className="grid md:grid-cols-3 gap-5">
                {store.teachers.map((tch) => (
                  <div key={tch.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
                    <img src={tch.image} alt={tch.name} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-extrabold text-sm text-white truncate">{tch.name}</p>
                      <p className="text-xs text-orange-400 font-semibold truncate">{pick(tch.role, lang)}</p>
                      <span className="text-[10px] text-zinc-400">{pick(tch.subject, lang)} • {pick(tch.experience, lang)}</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button onClick={() => setTeacherForm(tch)} className="p-2 rounded bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"><FaEdit className="text-xs" /></button>
                      <button onClick={() => store.deleteTeacher(tch.id)} className="p-2 rounded bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white cursor-pointer"><FaTrash className="text-xs" /></button>
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
                <h2 className="text-xl font-black uppercase text-white">{t('admin.tabs.reviews')}</h2>
                <button onClick={() => setReviewForm({ parentName: '', studentName: { uz: '', tg: '', ru: '', en: '' }, course: { uz: '', tg: '', ru: '', en: '' }, comment: { uz: '', tg: '', ru: '', en: '' }, rating: 5, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', videoThumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80', youtubeUrl: '' })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> {t('admin.add')}
                </button>
              </div>
              {reviewForm && (
                <form onSubmit={handleSaveReview} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-xl">
                  <h3 className="text-lg font-black text-orange-400">{reviewForm.id ? t('admin.edit') : t('admin.add')}</h3>
                  <div className="space-y-3">
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">{t('admin.formParentName')}</label><input type="text" required value={reviewForm.parentName} onChange={(e) => setReviewForm({ ...reviewForm, parentName: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <LField value={reviewForm.studentName} onChange={(v) => setReviewForm({ ...reviewForm, studentName: v })} label={t('admin.formStudentName')} />
                    <LField value={reviewForm.course} onChange={(v) => setReviewForm({ ...reviewForm, course: v })} label={t('admin.tabs.courses')} />
                    <div><label className="block text-xs font-bold text-red-400 mb-1">{t('admin.formYouTubeVideo')}</label><input type="text" placeholder="https://www.youtube.com/watch?v=..." value={reviewForm.youtubeUrl || ''} onChange={(e) => { const url = e.target.value; const thumb = getYouTubeThumbnail(url); setReviewForm({ ...reviewForm, youtubeUrl: url, videoThumbnail: thumb || reviewForm.videoThumbnail }) }} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <LField value={reviewForm.comment} onChange={(v) => setReviewForm({ ...reviewForm, comment: v })} label={t('admin.formComment')} textarea />
                  </div>
                  <ImageUploader
                    value={reviewForm.videoThumbnail || reviewForm.avatar || ''}
                    onChange={(img) => setReviewForm({ ...reviewForm, videoThumbnail: img })}
                    label={t('admin.formVideoPreview')}
                    aspectClass="h-24"
                  />
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-5 py-2 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">{t('admin.save')}</button>
                    <button type="button" onClick={() => setReviewForm(null)} className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">{t('admin.cancel')}</button>
                  </div>
                </form>
              )}
              <div className="grid md:grid-cols-2 gap-5">
                {store.reviews.map((r) => (
                  <div key={r.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-4 items-center">
                    <img src={r.videoThumbnail || r.avatar} alt={r.parentName} className="w-20 h-14 rounded-xl object-cover flex-shrink-0 bg-zinc-950" />
                    <div className="flex-1 min-w-0">
                      <p className="font-extrabold text-sm text-white truncate">{r.parentName}</p>
                      <p className="text-xs text-sky-400 font-semibold truncate">{t('reviews.student')} {pick(r.studentName, lang)}</p>
                      <p className="text-[11px] text-zinc-500 mt-0.5 truncate">{r.youtubeUrl ? t('admin.formVideo') : "—"}</p>
                      <p className="text-xs text-zinc-300 italic mt-1 font-medium line-clamp-2">"{pick(r.comment, lang)}"</p>
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
                <h2 className="text-xl font-black uppercase text-white">{t('admin.tabs.certs')}</h2>
                <button onClick={() => setCertForm({ title: { uz: '', tg: '', ru: '', en: '' }, course: { uz: '', tg: '', ru: '', en: '' }, issuedTo: '', badge: { uz: '', tg: '', ru: '', en: '' }, image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80', description: { uz: '', tg: '', ru: '', en: '' } })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> {t('admin.add')}
                </button>
              </div>
              {certForm && (
                <form onSubmit={handleSaveCert} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-xl">
                  <h3 className="text-lg font-black text-orange-400">{certForm.id ? t('admin.edit') : t('admin.add')}</h3>
                  <ImageUploader
                    value={certForm.image || ''}
                    onChange={(img) => setCertForm({ ...certForm, image: img })}
                    label={t('admin.formCertImage')}
                    aspectClass="h-24"
                  />
                  <div className="space-y-3">
                    <LField value={certForm.title} onChange={(v) => setCertForm({ ...certForm, title: v })} label={t('admin.formTitle')} required />
                    <div><label className="block text-xs font-bold text-zinc-400 mb-1">{t('admin.formCertOwner')}</label><input type="text" value={certForm.issuedTo} onChange={(e) => setCertForm({ ...certForm, issuedTo: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-white outline-none" /></div>
                    <LField value={certForm.course} onChange={(v) => setCertForm({ ...certForm, course: v })} label={t('admin.tabs.courses')} />
                    <LField value={certForm.badge} onChange={(v) => setCertForm({ ...certForm, badge: v })} label={t('admin.formBadge')} />
                    <LField value={certForm.description} onChange={(v) => setCertForm({ ...certForm, description: v })} label={t('admin.formAdvDesc')} textarea />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-5 py-2 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">{t('admin.save')}</button>
                    <button type="button" onClick={() => setCertForm(null)} className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">{t('admin.cancel')}</button>
                  </div>
                </form>
              )}
              <div className="grid md:grid-cols-3 gap-5">
                {store.certificates.map((cert) => (
                  <div key={cert.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-3 items-center">
                    {cert.image && <img src={cert.image} alt={pick(cert.title, lang)} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />}
                    <div className="flex-1 min-w-0">
                      <p className="font-extrabold text-sm text-white truncate">{pick(cert.title, lang)}</p>
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
                <h2 className="text-xl font-black uppercase text-white">FAQ ({t('admin.tabs.faq')})</h2>
                <button onClick={() => setFaqForm({ question: { uz: '', tg: '', ru: '', en: '' }, answer: { uz: '', tg: '', ru: '', en: '' } })} className="px-4 py-2 rounded-xl bg-orange-500 text-zinc-950 font-extrabold text-xs flex items-center gap-2 cursor-pointer">
                  <FaPlus /> {t('admin.add')}
                </button>
              </div>
              {faqForm && (
                <form onSubmit={handleSaveFaq} className="p-6 bg-zinc-900 rounded-3xl border border-orange-500/50 space-y-4 max-w-xl">
                  <h3 className="text-lg font-black text-orange-400">{faqForm.id ? t('admin.edit') : t('admin.add')}</h3>
                  <div className="space-y-3">
                    <LField value={faqForm.question} onChange={(v) => setFaqForm({ ...faqForm, question: v })} label={t('admin.formQuestion')} required />
                    <LField value={faqForm.answer} onChange={(v) => setFaqForm({ ...faqForm, answer: v })} label={t('admin.formAnswer')} textarea required />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-5 py-2 rounded-xl bg-orange-500 text-zinc-950 font-black text-xs">{t('admin.save')}</button>
                    <button type="button" onClick={() => setFaqForm(null)} className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs">{t('admin.cancel')}</button>
                  </div>
                </form>
              )}
              <div className="space-y-4">
                {store.faqs.map((f) => (
                  <div key={f.id} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-extrabold text-sm text-white">{pick(f.question, lang)}</p>
                      <p className="text-xs text-zinc-400 mt-1">{pick(f.answer, lang)}</p>
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
        {toasts.map((tt) => (
          <div key={tt.id} className="animate-toast-in rounded-2xl bg-zinc-900 border border-orange-500/50 shadow-2xl shadow-orange-500/10 overflow-hidden">
            <div className="flex items-start gap-3 p-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center flex-shrink-0">
                <FaBell />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-black text-orange-400 uppercase tracking-wide">{t('admin.toastNew')}</p>
                <p className="text-sm font-bold text-white truncate mt-0.5">{tt.name}</p>
                <p className="text-xs text-zinc-400 truncate">{tt.course}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5 flex items-center gap-1.5">
                  <FaPhoneAlt className="text-orange-400" /> {tt.phone}
                </p>
              </div>
              <button
                onClick={() => dismissToast(tt.id)}
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
