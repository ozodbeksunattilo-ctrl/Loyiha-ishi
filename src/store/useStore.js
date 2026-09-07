import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import {
  initialSiteInfo,
  initialAdvantages,
  initialCourses,
  initialCertificates,
  initialReviews,
  initialTeachers,
  initialFaqs,
  initialApplications
} from '../data/initialData'
import admins from '../data/admins.json'

const LOGIN_ATTEMPT_KEY = 'mega_edu_login_attempts'
const LOGIN_BLOCK_KEY = 'mega_edu_login_block'
const MAX_ATTEMPTS = 5
const BLOCK_DURATION = 5 * 60 * 1000

function getLoginAttempts() {
  try {
    const data = JSON.parse(localStorage.getItem(LOGIN_ATTEMPT_KEY) || '0')
    return data
  } catch { return 0 }
}

function isBlocked() {
  try {
    const blockData = JSON.parse(localStorage.getItem(LOGIN_BLOCK_KEY) || 'null')
    if (!blockData) return false
    if (Date.now() > blockData.until) {
      localStorage.removeItem(LOGIN_BLOCK_KEY)
      localStorage.removeItem(LOGIN_ATTEMPT_KEY)
      return false
    }
    return true
  } catch { return false }
}

function blockLogin() {
  localStorage.setItem(LOGIN_BLOCK_KEY, JSON.stringify({ until: Date.now() + BLOCK_DURATION }))
}

function clearAttempts() {
  localStorage.removeItem(LOGIN_ATTEMPT_KEY)
  localStorage.removeItem(LOGIN_BLOCK_KEY)
}

export const useStore = create(
  persist(
    (set) => ({
      siteInfo: initialSiteInfo,
      advantages: initialAdvantages,
      courses: initialCourses,
      certificates: initialCertificates,
      reviews: initialReviews,
      teachers: initialTeachers,
      faqs: initialFaqs,
      applications: initialApplications,

      lang: 'uz',
      siteLang: 'uz',
      adminLang: 'uz',

      setLang: (lang) => set({ lang }),
      setSiteLang: (lang) => set({ siteLang: lang }),
      setAdminLang: (lang) => set({ adminLang: lang }),

      auth: {
        isAuthenticated: false,
        currentUser: null,
      },

      isConsultationModalOpen: false,
      selectedCourseForModal: '',

      loginAdmin: (email, password) => {
        if (isBlocked()) {
          const remaining = Math.ceil((JSON.parse(localStorage.getItem(LOGIN_BLOCK_KEY)).until - Date.now()) / 60000)
          return { success: false, messageKey: 'blocked', code: 'blocked', remaining }
        }

        const found = admins.find(
          (a) => a.email.toLowerCase() === email.toLowerCase() && a.password === password
        )

        if (found) {
          clearAttempts()
          set({ auth: { isAuthenticated: true, currentUser: { email: found.email, name: found.name, role: found.role } } })
          return { success: true }
        }

        const attempts = getLoginAttempts() + 1
        localStorage.setItem(LOGIN_ATTEMPT_KEY, JSON.stringify(attempts))

        if (attempts >= MAX_ATTEMPTS) {
          blockLogin()
          return { success: false, messageKey: 'blocked', code: 'blocked' }
        }

        return { success: false, messageKey: 'wrongCreds', code: 'wrongCreds', remaining: MAX_ATTEMPTS - attempts }
      },

      logoutAdmin: () => {
        set({ auth: { isAuthenticated: false, currentUser: null } })
      },

      openConsultationModal: (courseName = '') => set({
        isConsultationModalOpen: true,
        selectedCourseForModal: courseName
      }),
      closeConsultationModal: () => set({
        isConsultationModalOpen: false,
        selectedCourseForModal: ''
      }),

      updateSiteInfo: (newInfo) => set((state) => ({
        siteInfo: { ...state.siteInfo, ...newInfo }
      })),

      addAdvantage: (adv) => set((state) => ({
        advantages: [...state.advantages, { ...adv, id: 'adv_' + Date.now() }]
      })),
      updateAdvantage: (id, updated) => set((state) => ({
        advantages: state.advantages.map((a) => (a.id === id ? { ...a, ...updated } : a))
      })),
      deleteAdvantage: (id) => set((state) => ({
        advantages: state.advantages.filter((a) => a.id !== id)
      })),

      addCourse: (course) => set((state) => ({
        courses: [...state.courses, { ...course, id: 'c_' + Date.now() }]
      })),
      updateCourse: (id, updatedCourse) => set((state) => ({
        courses: state.courses.map((c) => (c.id === id ? { ...c, ...updatedCourse } : c))
      })),
      deleteCourse: (id) => set((state) => ({
        courses: state.courses.filter((c) => c.id !== id)
      })),

      addCertificate: (cert) => set((state) => ({
        certificates: [...state.certificates, { ...cert, id: 'cert_' + Date.now() }]
      })),
      updateCertificate: (id, updatedCert) => set((state) => ({
        certificates: state.certificates.map((c) => (c.id === id ? { ...c, ...updatedCert } : c))
      })),
      deleteCertificate: (id) => set((state) => ({
        certificates: state.certificates.filter((c) => c.id !== id)
      })),

      addReview: (review) => set((state) => ({
        reviews: [...state.reviews, { ...review, id: 'r_' + Date.now() }]
      })),
      updateReview: (id, updatedReview) => set((state) => ({
        reviews: state.reviews.map((r) => (r.id === id ? { ...r, ...updatedReview } : r))
      })),
      deleteReview: (id) => set((state) => ({
        reviews: state.reviews.filter((r) => r.id !== id)
      })),

      addTeacher: (teacher) => set((state) => ({
        teachers: [...state.teachers, { ...teacher, id: 't_' + Date.now() }]
      })),
      updateTeacher: (id, updatedTeacher) => set((state) => ({
        teachers: state.teachers.map((t) => (t.id === id ? { ...t, ...updatedTeacher } : t))
      })),
      deleteTeacher: (id) => set((state) => ({
        teachers: state.teachers.filter((t) => t.id !== id)
      })),

      addFaq: (faq) => set((state) => ({
        faqs: [...state.faqs, { ...faq, id: 'f_' + Date.now() }]
      })),
      updateFaq: (id, updatedFaq) => set((state) => ({
        faqs: state.faqs.map((f) => (f.id === id ? { ...f, ...updatedFaq } : f))
      })),
      deleteFaq: (id) => set((state) => ({
        faqs: state.faqs.filter((f) => f.id !== id)
      })),

      addApplication: (appData) => set((state) => ({
        applications: [
          {
            id: 'app_' + Date.now(),
            name: appData.name,
            phone: appData.phone,
            course: appData.course || "Umumiy konsultatsiya",
            note: appData.note || "",
            status: "Yangi",
            createdAt: new Date().toLocaleString("uz-UZ", {
              year: 'numeric', month: '2-digit', day: '2-digit',
              hour: '2-digit', minute: '2-digit'
            })
          },
          ...state.applications
        ]
      })),
      updateApplicationStatus: (id, status) => set((state) => ({
        applications: state.applications.map((app) =>
          app.id === id ? { ...app, status } : app
        )
      })),
      deleteApplication: (id) => set((state) => ({
        applications: state.applications.filter((app) => app.id !== id)
      })),

      resetToDefault: () => set({
        siteInfo: initialSiteInfo,
        advantages: initialAdvantages,
        courses: initialCourses,
        certificates: initialCertificates,
        reviews: initialReviews,
        teachers: initialTeachers,
        faqs: initialFaqs,
        applications: initialApplications
      })
    }),
    {
      name: 'mega_edu_store_v6',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
