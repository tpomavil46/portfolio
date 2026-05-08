import { DemoCard } from '@/components/ui/DemoCard'
import { FaStar, FaThLarge, FaFlask, FaGithub, FaChartBar } from 'react-icons/fa'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[#e6edf3] text-2xl font-semibold tracking-widest mb-2">
            PROJECTS &amp; PLATFORMS
          </h2>
          <p className="text-[#484f58] text-sm">
            Data engineering platforms and projects I&apos;m working on
          </p>
        </div>

        <h3 className="text-[#8b949e] text-sm font-medium uppercase tracking-widest mb-6 border-b border-[#21262d] pb-3">
          Data Engineering Platform
        </h3>

        <DemoCard
          icon={<FaStar />}
          title="Featured: Real-Time Streaming Data Platform"
          description="End-to-end reference architecture for manufacturing-adjacent data pipelines — events flow from Kafka through Flink into PostgreSQL, transformed by dbt, and surfaced in Metabase dashboards. Demonstrates how industrial sensor and operational data can be made queryable in near-real-time without a managed cloud data warehouse."
          links={[
            {
              label: 'View Source Code',
              href: 'https://gitlab.com/morningstareng-group/streaming_demo',
              icon: <FaGithub />,
            },
            {
              label: 'Live Dashboard',
              href: 'https://demos.tpomaville.com',
              icon: <FaChartBar />,
            },
          ]}
          tech={['Apache Kafka', 'Apache Flink', 'PostgreSQL', 'dbt', 'Apache Airflow', 'Trino', 'Metabase']}
        />

        <DemoCard
          icon={<FaThLarge />}
          title="Platform Console — Internal Developer Portal"
          description="A Next.js internal developer portal giving engineers a single pane of glass over the entire data platform. Integrates Keycloak SSO, embeds live Grafana dashboards, and surfaces direct links to JupyterHub, Airflow, MLflow, and Metabase — eliminating bookmark sprawl and reducing time-to-tool for new team members."
          tech={['Next.js', 'Keycloak SSO', 'Kubernetes', 'ArgoCD', 'Vault', 'Grafana Embed']}
        />

        <DemoCard
          icon={<FaFlask />}
          title="MLflow — Experiment Tracking &amp; Model Registry"
          description="Self-hosted MLflow deployment on Kubernetes backed by PostgreSQL and MinIO object storage. Provides a Databricks-compatible experiment tracking and model registry layer for JupyterHub workloads — enabling reproducible ML experiments and a clear path from notebook prototype to registered model artifact, without a managed cloud dependency."
          tech={['MLflow', 'PostgreSQL', 'MinIO', 'Kubernetes', 'JupyterHub', 'ArgoCD']}
        />
      </div>
    </section>
  )
}
