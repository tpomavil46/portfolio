import type { ReactNode } from 'react'
import { FaFilePdf } from 'react-icons/fa'

interface CertCardProps {
  icon: ReactNode
  title: string
  institution?: string
  date?: string
  statusLabel: string
  statusType: 'completed' | 'in-progress'
  pdfHref?: string
  pdfLabel?: string
  currentGpa?: string
  coursework?: { name: string; result: string }[]
}

export function CertCard({
  icon,
  title,
  institution,
  date,
  statusLabel,
  statusType,
  pdfHref,
  pdfLabel,
  currentGpa,
  coursework,
}: CertCardProps) {
  const statusColor =
    statusType === 'completed' ? 'text-accent-green' : 'text-accent-yellow'

  return (
    <div className="relative border-2 border-[#30363d] pt-12 pb-8 px-5 text-center h-full [border-top:none]
      before:content-[''] before:absolute before:top-0 before:right-0 before:w-[30%] before:border-t-2 before:border-[#30363d]
      after:content-[''] after:absolute after:top-0 after:left-0 after:w-[30%] after:border-t-2 after:border-[#30363d]">
      <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-12 h-12 flex items-center justify-center text-2xl text-[#58a6ff] bg-[#0d1117]">
        {icon}
      </div>
      <h4 className="text-[#e6edf3] text-sm font-bold mb-2 leading-snug">{title}</h4>
      {institution && (
        <p className="text-[#484f58] text-xs mb-1">{institution}</p>
      )}
      {date && (
        <p className="text-[#484f58] text-xs mb-2">{date}</p>
      )}
      <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${statusColor}`}>
        {statusLabel}
      </p>
      {currentGpa && (
        <p className="text-[#c9d1d9] text-xs font-semibold mb-3">
          Current GPA: {currentGpa}
        </p>
      )}
      {coursework && coursework.length > 0 && (
        <div className="mt-4 pt-4 border-t border-[#30363d] text-left">
          <p className="text-[#8b949e] text-[11px] font-semibold uppercase tracking-wide mb-2">
            Selected Coursework
          </p>
          <ul className="space-y-2">
            {coursework.map((course) => (
              <li key={course.name} className="flex items-start justify-between gap-3 text-xs">
                <span className="text-[#8b949e]">{course.name}</span>
                <span className="text-[#e6edf3] font-semibold text-right shrink-0">
                  {course.result}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {pdfHref && pdfLabel && (
        <a
          href={pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-[#8b949e] border-b border-[#30363d] hover:text-[#58a6ff] hover:border-[#58a6ff] transition-colors pb-0.5"
        >
          <FaFilePdf className="text-[10px]" />
          {pdfLabel}
        </a>
      )}
    </div>
  )
}
