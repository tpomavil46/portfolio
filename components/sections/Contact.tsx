import { FaExternalLinkAlt, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#161b22] border-y border-[#30363d]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-[#e6edf3] text-2xl font-semibold tracking-widest mb-2">
            CONTACT
          </h2>
          <p className="text-[#484f58] text-sm">Two ways to work together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1c2128] border border-[#30363d] rounded-xl p-8">
            <h3 className="text-[#e6edf3] text-base font-semibold mb-2">Consulting Inquiries</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed mb-6">
              Industrial data infrastructure, OT/IT integration, platform architecture, and
              manufacturing analytics through Morning Star Engineering.
            </p>
            <a
              href="https://morningstareng.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#58a6ff] text-[#0d1117] text-sm font-semibold rounded hover:bg-[#79b8ff] transition-colors"
            >
              <FaExternalLinkAlt className="text-xs" />
              morningstareng.com/contact
            </a>
          </div>

          <div className="bg-[#1c2128] border border-[#30363d] rounded-xl p-8">
            <h3 className="text-[#e6edf3] text-base font-semibold mb-2">Engineering Roles</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed mb-6">
              Staff and principal-level data engineering, platform engineering, and solutions
              architecture roles in industrial or technical environments.
            </p>
            <a
              href="mailto:tim@morningstareng.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#58a6ff] text-[#58a6ff] text-sm font-medium rounded hover:bg-[#58a6ff] hover:text-[#0d1117] transition-all duration-200"
            >
              <FaEnvelope className="text-xs" />
              tim@morningstareng.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
