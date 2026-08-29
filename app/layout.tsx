import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tim Pomaville | Platform & Data Engineer',
  description:
    'Tim Pomaville, Platform & Data Engineer specializing in manufacturing-adjacent data systems, Kubernetes-native data platforms, and AI/ML infrastructure.',
  openGraph: {
    title: 'Tim Pomaville | Platform & Data Engineer',
    description:
      'Platform & Data Engineer with a chemical engineering background, building Kubernetes-native data platforms for manufacturing and industrial operations.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
