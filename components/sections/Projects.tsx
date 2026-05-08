'use client'

import { useState } from 'react'
import { TechBadge } from '@/components/ui/TechBadge'
import { FaChevronDown, FaChevronUp, FaGithub, FaChartBar, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectLink {
  label: string
  href: string
  icon?: React.ReactNode
}

interface Project {
  title: string
  employer?: string
  period?: string
  summary: string
  outcome?: string
  tech: string[]
  details?: string[]
  links?: ProjectLink[]
}

const PROFESSIONAL: Project[] = [
  {
    title: 'Flare Gas Optimization',
    employer: 'Dow Chemical, Plaquemine',
    period: '2015',
    summary:
      'Chronic flare gas losses with no reliable instrumentation or data pipeline to quantify or control them. Mined a decade of OSI PI historian data to establish baselines, instrumented an inline gas chromatograph, and wrote steam-to-hydrocarbon ratio control logic directly into the process control system.',
    outcome:
      'Delivered a measurable, controllable process improvement. Bridged raw plant instrumentation to operational decision-making. Earned Six Sigma Green Belt credential for the project.',
    tech: ['OSI PI', 'Process Control Systems', 'Data Pipeline Engineering', 'Six Sigma'],
    details: [
      'Extracted and cleaned 10+ years of historian data from OSI PI to establish pre-intervention process baselines.',
      'Instrumented an inline gas chromatograph to provide real-time composition data that had previously been unavailable.',
      'Wrote steam-to-hydrocarbon ratio logic into the DCS, creating a closed-loop control response to flare events.',
      'Demonstrated what this work looks like when domain expertise and data engineering are combined by the same person.',
    ],
  },
  {
    title: 'IFF Data Platform and Kubernetes Migration',
    employer: 'IFF (International Flavors and Fragrances)',
    summary:
      'Architected and led the migration of the analytics team data platform from a legacy environment to a containerized Kubernetes infrastructure. Built Python/SQL ETL and ELT pipelines and Flask/FastAPI data services supporting multiple ML and analytics teams.',
    outcome:
      'Infrastructure migration contributed to cost savings in the millions. Administered global OSI PI historian supporting process and quality data across manufacturing sites.',
    tech: ['Python', 'Kubernetes', 'Docker', 'FastAPI', 'Flask', 'OSI PI', 'GitLab CI/CD', 'SQL'],
    details: [
      'Designed and implemented Kubernetes-native deployment architecture for the data platform, replacing a fragile legacy setup.',
      'Built Python and SQL ETL/ELT pipelines connecting source systems to analytics and ML consumers.',
      'Developed FastAPI and Flask data services consumed by multiple ML and analytics teams.',
      'Administered global OSI PI historian, managing historian health and data quality across manufacturing sites.',
      'Established GitLab CI/CD pipelines for automated testing and deployment of data services.',
    ],
  },
  {
    title: 'Enterprise Seeq Integration Framework',
    employer: 'IT Vizion',
    summary:
      'Designed a modular, template-driven Python framework for enterprise-scale industrial data integration with Seeq. Architected for reuse and extensibility across multi-site deployments. Established SOLID design principles as the architectural foundation.',
    outcome:
      'Framework reduced per-deployment implementation time and created a repeatable pattern for enterprise clients across multiple manufacturing verticals.',
    tech: ['Python', 'Seeq', 'OSI PI', 'FastAPI', 'Flask'],
    details: [
      'Architected a template-driven framework enabling consistent, repeatable Seeq integrations at enterprise scale.',
      'Applied SOLID design principles throughout, making the framework extensible without modification to core components.',
      'Refactored legacy one-off implementations into Seeq-native Data Lab Functions, improving maintainability and performance.',
      'Designed for multi-site deployments where the same integration pattern needed to work across different OSI PI server configurations.',
    ],
  },
  {
    title: 'DCS Migration Requirements Engineering',
    employer: 'DuPont',
    period: '2019 to 2020',
    summary:
      'Served as requirements lead for a plant-wide DCS migration. Authored and managed the full system requirements baseline from top-level process specifications down to component-level control logic across engineering and operations stakeholders.',
    outcome:
      'Delivered a complete, traceable requirements baseline for a complex multi-system migration, maintaining formal change control through the full project lifecycle.',
    tech: ['DCS', 'Requirements Engineering', 'Systems Engineering', 'Process Control'],
    details: [
      'Authored the full system requirements baseline from top-level process requirements through component-level control logic specifications.',
      'Maintained end-to-end requirements traceability across the migration scope.',
      'Managed formal change control with engineering and operations stakeholders throughout the project.',
      'Bridged the gap between plant operations knowledge and the technical requirements that control system engineers needed to implement.',
    ],
  },
  {
    title: 'Industrial Data Observatory (Homelab)',
    summary:
      'Full medallion-architecture data platform running on Proxmox (Lenovo P52) with Kafka, Spark, Delta Lake, Unity Catalog OSS, Airflow, Metabase, Keycloak, Vault, Prometheus, and Grafana. Synthetic manufacturing sensor data demonstrates OT/IT integration patterns.',
    outcome:
      'End-to-end production-grade infrastructure I can architect and operate solo. Used as a development environment for exploring new patterns before recommending them to clients.',
    tech: ['Apache Kafka', 'Apache Spark', 'Delta Lake', 'Kubernetes', 'Docker', 'Terraform', 'Airflow', 'Grafana', 'Prometheus', 'Keycloak', 'Vault'],
    details: [
      'Proxmox hypervisor on a Lenovo P52 running a multi-node Kubernetes cluster via Talos Linux.',
      'Full medallion architecture: raw ingest from Kafka, bronze/silver/gold layers via Spark and Delta Lake.',
      'Unity Catalog OSS for data governance and access control across the platform.',
      'GitOps via ArgoCD with Vault and External Secrets Operator for zero-secret-in-repo secret management.',
      'Keycloak SSO with Google Workspace as upstream IdP for single login across all platform tools.',
      'Prometheus and Grafana for cluster and application observability.',
    ],
  },
]

const DEMOS: Project[] = [
  {
    title: 'Real-Time Streaming Data Platform',
    summary:
      'End-to-end reference architecture for manufacturing-adjacent data pipelines. Events flow from Kafka through Flink into PostgreSQL, transformed by dbt, and surfaced in Metabase dashboards.',
    tech: ['Apache Kafka', 'Apache Flink', 'PostgreSQL', 'dbt', 'Apache Airflow', 'Trino', 'Metabase'],
    links: [
      { label: 'Source Code', href: 'https://gitlab.com/morningstareng-group/streaming_demo', icon: <FaGithub /> },
      { label: 'Live Dashboard', href: 'https://demos.tpomaville.com', icon: <FaChartBar /> },
    ],
  },
  {
    title: 'Platform Console',
    summary:
      'Next.js internal developer portal integrating Keycloak SSO, embedded Grafana dashboards, and direct links to JupyterHub, Airflow, MLflow, and Metabase. Single pane of glass over a full data platform.',
    tech: ['Next.js', 'Keycloak SSO', 'Kubernetes', 'ArgoCD', 'Vault', 'Grafana Embed'],
    links: [
      { label: 'Live', href: 'https://platform-console.morningstareng.com/', icon: <FaExternalLinkAlt /> },
    ],
  },
  {
    title: 'MLflow Experiment Tracking and Model Registry',
    summary:
      'Self-hosted MLflow on Kubernetes backed by PostgreSQL and MinIO. Provides a Databricks-compatible experiment tracking and model registry layer for JupyterHub workloads.',
    tech: ['MLflow', 'PostgreSQL', 'MinIO', 'Kubernetes', 'JupyterHub', 'ArgoCD'],
  },
]

function ProjectCard({ project, defaultOpen = false }: { project: Project; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="bg-[#1c2128] border border-[#30363d] rounded-xl overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-[#e6edf3] text-base font-semibold leading-snug">{project.title}</h3>
            {(project.employer || project.period) && (
              <p className="text-[#58a6ff] text-xs font-mono mt-1">
                {project.employer}
                {project.employer && project.period && ' / '}
                {project.period}
              </p>
            )}
          </div>
          {project.details && (
            <button
              onClick={() => setOpen(!open)}
              className="flex-shrink-0 flex items-center gap-1.5 text-xs text-[#8b949e] hover:text-[#e6edf3] transition-colors pt-0.5"
            >
              {open ? <><FaChevronUp size={10} /> Less</> : <><FaChevronDown size={10} /> Details</>}
            </button>
          )}
        </div>

        <p className="text-[#8b949e] text-sm leading-relaxed mb-4">{project.summary}</p>

        {project.outcome && (
          <p className="text-[#3fb950] text-xs leading-relaxed mb-4 border-l-2 border-[#3fb950]/40 pl-3">
            {project.outcome}
          </p>
        )}

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-[#21262d] border border-[#30363d] rounded text-[#58a6ff] hover:border-[#58a6ff] transition-colors"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => <TechBadge key={t} label={t} />)}
        </div>
      </div>

      {open && project.details && (
        <div className="border-t border-[#30363d] bg-[#161b22] px-6 py-5">
          <ul className="space-y-2">
            {project.details.map((d) => (
              <li key={d} className="text-[#8b949e] text-xs leading-relaxed flex gap-2">
                <span className="text-[#484f58] flex-shrink-0 mt-1">+</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[#e6edf3] text-2xl font-semibold tracking-widest mb-2">
            PROJECTS &amp; WORK
          </h2>
          <p className="text-[#484f58] text-sm">
            Professional engagements and personal builds
          </p>
        </div>

        <h3 className="text-[#8b949e] text-xs font-medium uppercase tracking-widest mb-5 border-b border-[#21262d] pb-3">
          Professional Work
        </h3>
        <div className="space-y-4 mb-14">
          {PROFESSIONAL.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <h3 className="text-[#8b949e] text-xs font-medium uppercase tracking-widest mb-5 border-b border-[#21262d] pb-3">
          Open Source &amp; Demos
        </h3>
        <div className="space-y-4">
          {DEMOS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
