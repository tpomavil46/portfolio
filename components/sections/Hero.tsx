'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
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

      <div className="absolute inset-0 bg-black/55 z-10" />

      <div className="relative z-20 text-center px-4">
        <p className="text-white text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] mb-5">
          TIM POMAVILLE
        </p>
        <TypeAnimation
          sequence={[
            'Software Engineer',    2000,
            'Solution Architect',   2000,
            'Chemical Engineer',    2000,
            'DevOps Engineer',      2000,
            'Data Engineer',        2000,
          ]}
          wrapper="p"
          speed={60}
          className="text-white/80 text-lg sm:text-xl md:text-2xl font-light tracking-widest font-mono"
          repeat={Infinity}
          cursor={false}
        />
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
