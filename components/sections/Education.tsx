import { CertCard } from '@/components/ui/CertCard'
import {
  FaFlask, FaCode, FaTerminal, FaTree,
  FaDatabase, FaCertificate, FaChartLine,
} from 'react-icons/fa'

const CERTS = [
  {
    icon: <FaFlask />,
    title: 'Bachelor of Science -- Chemical Engineering',
    institution: 'University of Michigan Ann Arbor, 2011',
    statusLabel: 'GPA: 3.0 / 4.0',
    statusType: 'completed' as const,
  },
  {
    icon: <FaCode />,
    title: 'Master of Science -- Software Engineering',
    institution: 'California State University Fullerton, 2022-2024',
    statusLabel: 'GPA 3.9 / 4.0',
    statusType: 'completed' as const,
    pdfHref: '/img/certifications/1663965_eDiploma.pdf',
    pdfLabel: 'View Diploma',
  },
  {
    icon: <FaTerminal />,
    title: 'MCS, Computer Science -- Artificial Intelligence Track',
    institution: 'University of Illinois Urbana-Champaign',
    date: 'Expected: 2026',
    statusLabel: 'In Progress',
    statusType: 'in-progress' as const,
  },
  {
    icon: <FaDatabase />,
    title: 'Databricks Certified Data Engineer Associate',
    date: '2025',
    statusLabel: 'Completed',
    statusType: 'completed' as const,
    pdfHref: '/img/certifications/databricks-certificate-associate.pdf',
    pdfLabel: 'View Certificate',
  },
  {
    icon: <FaDatabase />,
    title: 'Databricks Certified Data Engineer Professional',
    statusLabel: 'In Progress',
    statusType: 'in-progress' as const,
  },
  {
    icon: <FaCertificate />,
    title: 'Advanced Analytics Engineer -- Seeq',
    date: '2024',
    statusLabel: 'Completed',
    statusType: 'completed' as const,
    pdfHref: '/img/certifications/Certified Analytics Engineer Certificate.pdf',
    pdfLabel: 'View Certificate',
  },
  {
    icon: <FaTree />,
    title: 'Machine Learning Specialization',
    institution: 'Stanford / DeepLearning.AI',
    date: '2024',
    statusLabel: 'Completed',
    statusType: 'completed' as const,
    pdfHref: '/img/certifications/MachineLearning.pdf',
    pdfLabel: 'View Certificate',
  },
  {
    icon: <FaChartLine />,
    title: 'Six Sigma Green Belt Project Leader',
    date: '2015',
    statusLabel: 'Completed',
    statusType: 'completed' as const,
  },
]

export default function Education() {
  return (
    <section id="certifications" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[#e6edf3] text-2xl font-semibold tracking-widest mb-2">
            EDUCATION &amp; CERTIFICATIONS
          </h2>
          <p className="text-[#484f58] text-sm">Education &amp; Professional Certifications</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-6">
          {CERTS.map((cert) => (
            <div key={cert.title} className="mt-6">
              <CertCard {...cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
