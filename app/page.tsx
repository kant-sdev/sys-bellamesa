import FloatButton from '@/components/layout/Elements/FloatButton'
import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import AboutSection from '@/components/layout/Sections/AboutSection'
import ContactSection from '@/components/layout/Sections/ContactSection'
import HeroSection from '@/components/layout/Sections/HeroSection'
import MenuSection from '@/components/layout/Sections/MenuSection'
import TestimonialsSection from '@/components/layout/Sections/TestemonialSection'
import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
      <FloatButton/>
    </main>
  )
}
