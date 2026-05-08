import { FaThLarge, FaGlobe, FaCogs, FaExternalLinkAlt } from 'react-icons/fa'
import { TechBadge } from '@/components/ui/TechBadge'

const PLATFORMS = [
  {
    icon: <FaThLarge className="text-[#58a6ff]" />,
    title: 'Platform Console',
    description:
      'Internal developer portal for the Morning Star Engineering data platform. Single sign-on via Keycloak, embedded Grafana dashboards, and direct links to every platform tool — giving engineers one place to start their day.',
    href: 'https://platform-console.morningstareng.com/',
    linkLabel: 'platform-console.morningstareng.com',
    tech: ['Next.js', 'Keycloak SSO', 'Kubernetes', 'ArgoCD', 'Vault', 'Grafana Embed'],
  },
  {
    icon: <FaGlobe className="text-[#58a6ff]" />,
    title: 'morningstareng.com',
    description: 'Morning Star Engineering company website.',
    href: 'https://morningstareng.com/',
    linkLabel: 'morningstareng.com',
    tech: [],
  },
  {
    icon: <FaCogs className="text-[#58a6ff]" />,
    title: 'ERP Portal',
    description: 'Morning Star Engineering ERP portal for internal operations management.',
    href: 'https://erp.morningstareng.com/',
    linkLabel: 'erp.morningstareng.com',
    tech: [],
  },
]

export default function LivePlatforms() {
  return (
    <section id="live-platforms" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[#e6edf3] text-2xl font-semibold tracking-widest mb-2">
            LIVE PLATFORMS
          </h2>
          <p className="text-[#484f58] text-sm">Web properties and platforms I have built and operate</p>
        </div>

        <div className="space-y-6">
          {PLATFORMS.map((p) => (
            <div
              key={p.title}
              className="bg-gradient-to-br from-[#1c2128] to-[#0d1117] border border-[#30363d] rounded-xl p-6"
            >
              <h4 className="text-[#e6edf3] text-base font-semibold flex items-center gap-2 mb-3">
                {p.icon}
                {p.title}
              </h4>
              <p className="text-[#8b949e] text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-4 mb-4">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-[#21262d] border border-[#30363d] rounded text-[#58a6ff] hover:border-[#58a6ff] hover:bg-[#161b22] transition-colors"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  {p.linkLabel}
                </a>
              </div>
              {p.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
