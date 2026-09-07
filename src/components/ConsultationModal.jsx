import React, { useState, useEffect } from 'react'
import { useStore } from '../store/useStore'
import { useT, pick } from '../i18n'
import { FaTimes, FaCheckCircle, FaUser, FaPhoneAlt, FaBookOpen, FaExclamationTriangle } from 'react-icons/fa'

function ConsultationModal() {
  const { t, lang } = useT()
  const isOpen = useStore((state) => state.isConsultationModalOpen)
  const selectedCourseForModal = useStore((state) => state.selectedCourseForModal)
  const closeModal = useStore((state) => state.closeConsultationModal)
  const addApplication = useStore((state) => state.addApplication)
  const courses = useStore((state) => state.courses)

  const [formData, setFormData] = useState({
    name: '',
    phone: '+998 ',
    course: selectedCourseForModal || pick(courses[0]?.title, lang) || 'IT Kids & Robototexnika',
    note: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const handlePhoneChange = (e) => {
    let val = e.target.value
    if (!val.startsWith('+998 ')) {
      val = '+998 '
    }
    setFormData((prev) => ({ ...prev, phone: val }))
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = t('modal.validateName')
    if (formData.phone.replace(/\s/g, '').length < 12) newErrors.phone = t('modal.validatePhone')
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    addApplication(formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      closeModal()
      setFormData({ name: '', phone: '+998 ', course: courses[0]?.title || '', note: '' })
      setErrors({})
    }, 2500)
  }

  const inputBase = "w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950 border text-sm font-medium outline-none transition-all"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md animate-fade-in">

      <div className="relative w-full max-w-lg bg-zinc-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-zinc-800">

        <button
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800 hover:bg-orange-500 text-zinc-400 hover:text-zinc-950 transition-colors cursor-pointer"
        >
          <FaTimes className="text-lg" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
              <FaCheckCircle />
            </div>
            <h3 className="text-2xl font-black text-white"> {t('modal.successTitle')}</h3>
            <p className="text-zinc-400 text-sm max-w-sm mx-auto">
              {t('modal.successDesc')}
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center space-y-2 mb-6 pr-6">
              <h3 className="text-2xl font-black text-white tracking-tight leading-snug">
                {t('modal.title')}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium max-w-sm mx-auto">
                {t('modal.subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1">{t('modal.labelName')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder={t('modal.placeholderName')}
                    value={formData.name}
                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }); if (errors.name) setErrors(p => ({...p, name: ''})) }}
                    className={`${inputBase} ${errors.name
                      ? 'border-red-500/70 focus:ring-2 focus:ring-red-500/20'
                      : 'border-zinc-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'}`}
                  />
                </div>
                {errors.name && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><FaExclamationTriangle className="text-[10px]" /> {errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1">{t('modal.labelPhone')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <FaPhoneAlt />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="+998 (77) 027 23 00"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`${inputBase} ${errors.phone
                      ? 'border-red-500/70 focus:ring-2 focus:ring-red-500/20'
                      : 'border-zinc-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'}`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><FaExclamationTriangle className="text-[10px]" /> {errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1">{t('modal.labelCourse')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                    <FaBookOpen />
                  </div>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm font-medium outline-none transition-all appearance-none cursor-pointer"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={pick(c.title, lang)}>
                        [{c.category}] {pick(c.title, lang)}
                      </option>
                    ))}
                    <option value={t('modal.generalConsultation')}>{t('modal.generalConsultation')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1">{t('modal.labelNote')}</label>
                <textarea
                  rows="2"
                  placeholder={t('modal.placeholderNote')}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm font-medium outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-zinc-950 font-extrabold text-sm uppercase tracking-wider shadow-xl transition-all cursor-pointer"
              >
                {t('modal.submit')}
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  )
}

export default ConsultationModal