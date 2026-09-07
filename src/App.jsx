import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useStore } from './store/useStore'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import WhyChooseUs from './components/WhyChooseUs'
import Certificates from './components/Certificates'
import Reviews from './components/Reviews'
import Teachers from './components/Teachers'
import Faq from './components/Faq'
import Footer from './components/Footer'
import ConsultationModal from './components/ConsultationModal'
import AdminPanel from './components/AdminPanel'

function LangApp() {
  const siteLang = useStore((state) => state.siteLang)
  React.useEffect(() => {
    document.documentElement.setAttribute('lang', siteLang)
  }, [siteLang])
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/*" element={<AdminPanel />} />
    </Routes>
  )
}

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Teachers />
        <Certificates />
        <Reviews />
        <Faq />
      </main>
      <Footer />
      <ConsultationModal />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-orange-500 selection:text-zinc-950">
        <LangApp />
      </div>
    </BrowserRouter>
  )
}

export default App