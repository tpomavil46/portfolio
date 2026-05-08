'use client'

import CountUp from 'react-countup'
import type { ReactNode } from 'react'

interface StatCounterProps {
  value: number
  label: string
  icon: ReactNode
}

export function StatCounter({ value, label, icon }: StatCounterProps) {
  return (
    <div className="relative mt-8">
      <div className="relative border-2 border-[#30363d] pt-12 pb-8 px-6 text-center [border-top:none]
        before:content-[''] before:absolute before:top-0 before:right-0 before:w-[30%] before:border-t-2 before:border-[#30363d]
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-[30%] after:border-t-2 after:border-[#30363d]">
        <div className="absolute left-1/2 -translate-x-1/2 -top-7 w-14 h-14 flex items-center justify-center text-3xl text-[#58a6ff] bg-[#0d1117]">
          {icon}
        </div>
        <CountUp
          end={value}
          enableScrollSpy
          scrollSpyOnce
          className="font-mono text-5xl font-light text-[#e6edf3] block mb-2"
        />
        <p className="text-[#8b949e] text-xs font-medium uppercase tracking-wider leading-snug">
          {label}
        </p>
      </div>
    </div>
  )
}
