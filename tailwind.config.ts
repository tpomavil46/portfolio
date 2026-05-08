import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   '#0d1117',
          secondary: '#161b22',
          card:      '#1c2128',
          elevated:  '#21262d',
        },
        accent: {
          DEFAULT: '#58a6ff',
          warm:    '#f0883e',
          green:   '#3fb950',
          yellow:  '#d29922',
        },
        border: {
          DEFAULT: '#30363d',
          subtle:  '#21262d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
