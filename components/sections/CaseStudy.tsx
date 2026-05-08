import {
  FaServer, FaCheckCircle, FaLightbulb,
} from 'react-icons/fa'

export default function CaseStudy() {
  return (
    <section id="case-studies" className="py-24 bg-[#161b22] border-y border-[#30363d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[#e6edf3] text-2xl font-semibold tracking-widest mb-2">
            CASE STUDIES
          </h2>
          <p className="text-[#484f58] text-sm">
            Enterprise platform engineering projects and architectural decisions
          </p>
        </div>

        <div className="bg-[#1c2128] border border-[#30363d] rounded-xl p-8">
          <div className="border-b border-[#30363d] pb-6 mb-8">
            <h3 className="text-[#e6edf3] text-xl font-semibold flex items-center gap-3">
              <FaServer className="text-[#58a6ff]" />
              Enterprise Data Platform Migration
            </h3>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-[#e6edf3] text-base font-semibold mb-3">Project Overview</h4>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                Built a production-grade, self-hosted data platform on Kubernetes to eliminate
                dependence on managed cloud services for data-intensive workloads — delivering
                Databricks-class capabilities (experiment tracking, distributed compute, orchestrated
                pipelines) at a fraction of the cost, with full control over data residency and
                security posture.
              </p>
            </div>

            <div>
              <h5 className="text-[#e6edf3] text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-[#58a6ff]">&#x2665;</span> Architecture
              </h5>
              <ul className="space-y-2.5">
                {[
                  [
                    'Multi-node Kubernetes cluster',
                    'with GitOps via ArgoCD App of Apps',
                  ],
                  [
                    'Keycloak SSO',
                    'with Google Workspace as upstream IdP — single login across all platform tools',
                  ],
                  [
                    'Vault + External Secrets Operator',
                    'for zero-secret-in-repo secret management',
                  ],
                  [
                    'Prometheus + Grafana',
                    'for real-time cluster and application monitoring',
                  ],
                  [
                    'Data processing stack:',
                    'Spark, Kafka, Flink, Airflow, Trino, JupyterHub, MLflow',
                  ],
                  [
                    '12TB PostgreSQL instance',
                    'with MinIO object storage for large-scale data processing',
                  ],
                  [
                    'dbt + Metabase',
                    'for data transformation and self-service BI',
                  ],
                  [
                    'Unity Catalog',
                    'for data governance and access control',
                  ],
                  [
                    'DevSecOps pipeline',
                    'with SAST, dependency scanning, container signing, and DAST before every production deployment',
                  ],
                ].map(([bold, rest]) => (
                  <li key={bold} className="text-[#8b949e] text-sm flex gap-2">
                    <span className="text-[#30363d] mt-1.5 flex-shrink-0">—</span>
                    <span>
                      <strong className="text-[#c9d1d9]">{bold}</strong> {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-[#e6edf3] text-sm font-semibold uppercase tracking-wider mb-4">
                Key Achievements
              </h5>
              <ul className="space-y-2.5">
                {[
                  ['Zero-downtime migration', 'from Docker Compose to production Kubernetes'],
                  ['Unified SSO', 'across six platform applications via Keycloak + Google Workspace'],
                  ['Full ML lifecycle', 'from JupyterHub notebook to MLflow-registered model artifact'],
                  [
                    'Automated security gates',
                    '— no image reaches production without passing Trivy, Grype, ZAP, and Nuclei scans',
                  ],
                  [
                    'Scalable, cost-controlled architecture',
                    'supporting 12TB+ data without a managed cloud dependency',
                  ],
                ].map(([bold, rest]) => (
                  <li key={bold} className="text-[#8b949e] text-sm flex items-start gap-2">
                    <FaCheckCircle className="text-accent-green mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-[#c9d1d9]">{bold}</strong> {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-[#e6edf3] text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                <FaLightbulb className="text-[#58a6ff]" /> Business Impact
              </h5>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                Replaced a fragile, manually-managed Docker Compose environment with a fully
                declarative, GitOps-driven platform that any engineer can onboard to in minutes.
                The result is a reproducible, auditable data infrastructure that supports
                manufacturing-adjacent analytics workloads — with enterprise security controls
                typically only found in cloud-managed offerings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
