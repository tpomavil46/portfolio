const SKILL_GROUPS = [
  {
    label: 'Data Engineering',
    skills: [
      'Python', 'PySpark', 'SQL', 'Apache Spark', 'Delta Lake',
      'Databricks', 'Apache Kafka', 'Apache Airflow', 'dbt',
      'Great Expectations', 'Unity Catalog',
    ],
  },
  {
    label: 'Infrastructure & DevOps',
    skills: [
      'Kubernetes', 'Docker', 'Terraform', 'Ansible',
      'GitLab CI/CD', 'GitHub Actions', 'ArgoCD', 'Linux',
    ],
  },
  {
    label: 'Industrial / OT',
    skills: [
      'OSI PI', 'Aspen IP.21', 'Seeq', 'MES Systems',
      'Process Control', 'SCADA',
    ],
  },
  {
    label: 'APIs & Backend',
    skills: ['FastAPI', 'Flask', 'RESTful API Design'],
  },
  {
    label: 'Cloud',
    skills: ['AWS', 'Azure', 'GCP'],
  },
  {
    label: 'Analytics & ML',
    skills: ['MLflow', 'Grafana', 'Prometheus', 'Metabase', 'Machine Learning'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#161b22] border-y border-[#30363d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[#e6edf3] text-2xl font-semibold tracking-widest mb-2">
            TECHNICAL SKILLS
          </h2>
          <p className="text-[#484f58] text-sm">Organized by domain</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="text-[#e6edf3] text-xs font-semibold uppercase tracking-widest mb-4 pb-2 border-b border-[#30363d]">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 text-xs font-mono border border-[#30363d] rounded text-[#8b949e] bg-[#1c2128] hover:border-[#58a6ff] hover:text-[#c9d1d9] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
