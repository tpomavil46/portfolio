'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { SkillGauge } from '@/components/ui/SkillGauge'

const SKILLS = [
  { name: 'Python',      percent: 90, description: 'Used in most of my work' },
  { name: 'Javascript',  percent: 70, description: 'Used in most of my work' },
  { name: 'SQL',         percent: 75, description: 'Used in most of my work' },
  { name: 'HTML',        percent: 50, description: 'Used in most of my work' },
  { name: 'CSS',         percent: 50, description: 'Used in most of my work' },
  { name: 'Kubernetes',  percent: 75, description: 'Used in most of my work' },
  { name: 'Terraform',   percent: 65, description: 'Used in most of my work' },
  { name: 'Linux/Unix',  percent: 85, description: 'Used in most of my work' },
  { name: 'GitOps',      percent: 75, description: 'Used in most of my work' },
]

export default function Skills() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: 'start',
  })

  return (
    <section id="skills" className="py-24 bg-[#161b22] border-y border-[#30363d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#e6edf3] text-2xl font-semibold tracking-widest mb-2">
            TECHNICAL SKILLS
          </h2>
          <p className="text-[#484f58] text-sm">My proficiency in each skill (drag to scroll)</p>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-2">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="flex-none">
                <SkillGauge
                  name={skill.name}
                  percent={skill.percent}
                  description={skill.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
