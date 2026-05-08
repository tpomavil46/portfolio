'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = ['/img/slide3.jpg', '/img/slide4.jpg', '/img/slide6.jpg']

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  function scrollToContact() {
    const el = document.querySelector('#contact')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <Image
            src={SLIDES[current]}
            alt=""
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <p className="font-mono text-[#58a6ff] text-xs sm:text-sm tracking-[0.3em] uppercase mb-5">
          Principal Solutions Architect &amp; Data Engineer
        </p>

        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-light tracking-wide mb-7">
          Timothy Pomaville
        </h1>

        <p className="text-white/90 text-xl sm:text-2xl font-light max-w-2xl mx-auto mb-4 leading-relaxed">
          I bridge the plant floor and the data platform.
        </p>

        <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          25 years in manufacturing operations across chemicals, automotive, and oil and gas.
          6 years building data and software infrastructure that works in industrial environments.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://morningstareng.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#58a6ff] text-[#0d1117] text-sm font-semibold tracking-wide rounded hover:bg-[#79b8ff] transition-colors"
          >
            Consulting Inquiries
          </a>
          <button
            onClick={scrollToContact}
            className="px-7 py-3.5 border border-white/50 text-white text-sm font-medium tracking-wide rounded hover:border-white hover:bg-white/10 transition-colors"
          >
            Available for Hire
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
