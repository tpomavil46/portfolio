import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import CaseStudy from '@/components/sections/CaseStudy'
import LivePlatforms from '@/components/sections/LivePlatforms'
import Books from '@/components/sections/Books'
import Contact from '@/components/sections/Contact'
import Portfolio from '@/components/sections/Portfolio'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <CaseStudy />
      <LivePlatforms />
      <Books />
      <Contact />
      <Portfolio />
      <Footer />
    </main>
  )
}
