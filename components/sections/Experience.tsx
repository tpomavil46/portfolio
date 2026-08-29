import { StatCounter } from '@/components/ui/StatCounter'
import { FaFlask, FaCode, FaCodeBranch, FaCubes } from 'react-icons/fa'

const STATS = [
  { value: 27, label: 'Years Manufacturing Operations Experience', icon: <FaFlask /> },
  { value: 7,  label: 'Years Data Engineering Experience',         icon: <FaCodeBranch /> },
  { value: 7,  label: 'Years Software Engineering Experience',     icon: <FaCode /> },
  { value: 6,  label: 'Years Platform Engineering Experience',     icon: <FaCubes /> },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#161b22] border-y border-[#30363d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[#e6edf3] text-2xl font-semibold tracking-widest mb-2">
            EXPERIENCE
          </h2>
          <p className="text-[#484f58] text-sm">Years of professional experience across disciplines</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <StatCounter key={s.label} value={s.value} label={s.label} icon={s.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
