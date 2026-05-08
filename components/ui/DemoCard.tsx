import type { ReactNode } from 'react'
import { TechBadge } from './TechBadge'

interface DemoLink {
  label: string
  href: string
  icon?: ReactNode
}

interface DemoCardProps {
  icon: ReactNode
  title: string
  description: string
  links?: DemoLink[]
  tech: string[]
}

export function DemoCard({ icon, title, description, links, tech }: DemoCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#1c2128] to-[#0d1117] border border-[#30363d] rounded-xl p-6 mb-6">
      <h4 className="text-[#e6edf3] text-base font-semibold mb-3 flex items-center gap-2">
        <span className="text-[#58a6ff]">{icon}</span>
        {title}
      </h4>
      <p className="text-[#8b949e] text-sm leading-relaxed mb-4">{description}</p>
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-[#21262d] border border-[#30363d] rounded text-[#58a6ff] hover:border-[#58a6ff] hover:bg-[#161b22] transition-colors"
            >
              {link.icon && <span>{link.icon}</span>}
              {link.label}
            </a>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </div>
  )
}
