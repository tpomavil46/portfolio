'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

interface SkillGaugeProps {
  name: string
  percent: number
  description?: string
}

export function SkillGauge({ name, percent, description }: SkillGaugeProps) {
  const { ref, isInView } = useInView(0.3)

  const SIZE = 130
  const STROKE = 5
  const RADIUS = (SIZE - STROKE * 2) / 2
  const CENTER = SIZE / 2
  const circumference = 2 * Math.PI * RADIUS
  const targetOffset = circumference * (1 - percent / 100)

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 px-5 min-w-[150px]">
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="#21262d"
            strokeWidth={STROKE}
          />
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="#58a6ff"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isInView ? targetOffset : circumference }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
            transform={`rotate(-90 ${CENTER} ${CENTER})`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xl font-semibold text-[#e6edf3]">
            {percent}
            <span className="text-xs text-[#8b949e]">%</span>
          </span>
        </div>
      </div>
      <h4 className="text-[#e6edf3] font-semibold text-sm text-center leading-tight">
        {name}
      </h4>
      {description && (
        <p className="text-[#484f58] text-xs text-center">{description}</p>
      )}
    </div>
  )
}
