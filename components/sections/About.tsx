import Image from 'next/image'
import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-2/5 flex-shrink-0">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-[#30363d]">
              <Image
                src="/img/slide_about.jpg"
                alt="Timothy Pomaville"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="mt-5 space-y-2">
              <h4 className="text-[#e6edf3] text-lg font-semibold">Timothy Pomaville</h4>
              <p className="text-[#8b949e] text-sm">Principal Solutions Architect &amp; Data Engineer</p>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://linkedin.com/in/timothy-pomaville"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a
                  href="https://morningstareng.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                >
                  <FaExternalLinkAlt className="text-[10px]" />
                  morningstareng.com
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-3/5">
            <p className="text-[#c9d1d9] text-sm leading-relaxed mb-4 border-l-2 border-[#58a6ff]/50 pl-4">
              I&apos;m currently pursuing graduate computer science studies at the University of
              Illinois Urbana-Champaign with a 4.0 GPA. I completed Artificial Intelligence with
              an A+ and am currently studying Applied Machine Learning.
            </p>

            <p className="text-[#8b949e] text-sm leading-relaxed mb-4">
              I&apos;m a multidisciplinary engineer with roots in Chemical Engineering and a career
              that&apos;s run through automotive, chemical, and aerospace manufacturing. That
              operational background isn&apos;t incidental. It shapes how I build data systems. I
              understand the processes the data describes, not just the pipelines that move it. I
              know what it means when a sensor goes offline, or a batch job fails, because I&apos;ve
              been in the plant when it happens. This perspective drives me to build data platforms
              that aren&apos;t just technically robust, but operationally resilient and aligned with
              the realities of manufacturing environments.
            </p>

            <p className="text-[#8b949e] text-sm leading-relaxed mb-4">
              Over the past six years I&apos;ve moved deeper into platform and data engineering,
              designing and operating Kubernetes-native infrastructure for data-intensive workloads.
              My stack spans GitOps with ArgoCD, secrets management with Vault, SSO with Keycloak,
              and a full ML/data platform: Spark, Airflow, MLflow, Trino, JupyterHub, Metabase,
              deployed on self-hosted Kubernetes and secured end-to-end. I care about the layer that
              lets teams move fast without breaking things: reproducible deployments, automated
              security scanning, experiment tracking, and self-service tooling that doesn&apos;t
              require a platform ticket to use.
            </p>

            <p className="text-[#8b949e] text-sm leading-relaxed mb-7">
              Most of my recent work sits at the intersection of manufacturing operations and modern
              data engineering: the space where OT historians, process data, and ML pipelines
              finally start talking to each other. I run Morning Star Engineering, a consultancy
              focused on that problem, and I&apos;m always open to interesting work in the same vein.
            </p>

            <h5 className="text-[#e6edf3] text-base font-semibold mb-3">My Take On AI</h5>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              AI makes me faster. It doesn&apos;t make me smarter. That part is still on me. The
              real work in data/software engineering has never been writing code. It&apos;s
              understanding what the data represents, why a process behaves the way it does, and
              what the system actually needs. That requires domain knowledge and engineering judgment
              built over years, not tokens. I use AI as a tool, the same way I&apos;d use any
              other. The thinking, the architecture decisions, the trade-offs: those are still mine.
              And in manufacturing and other domains, where bad assumptions don&apos;t just create
              bugs but can affect safety, quality, and yield, that distinction matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
