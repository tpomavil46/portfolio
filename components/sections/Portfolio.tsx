'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaSearch, FaLink } from 'react-icons/fa'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

type Filter = 'all' | 'apps' | 'me' | 'demos'

const ITEMS = [
  {
    category: 'apps' as const,
    thumb: '/img/portfolio/thumbnails/itv-asset-tree-proj.jpg',
    full:  '/img/portfolio/itv-asset-tree.jpg',
    caption: 'This is my Seeq add-on project!',
    link: 'https://seeq-asset-tree.tpomaville.com/auth',
  },
  {
    category: 'me' as const,
    thumb: '/img/portfolio/thumbnails/me.jpg',
    full:  '/img/portfolio/thumbnails/me.jpg',
    caption: 'This is me!',
    link: '',
  },
  {
    category: 'me' as const,
    thumb: '/img/portfolio/thumbnails/moi_est_ma_femme.jpg',
    full:  '/img/portfolio/thumbnails/moi_est_ma_femme.jpg',
    caption: 'This is me and my wife a week before our wedding!',
    link: '',
  },
]

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'ALL',   value: 'all' },
  { label: 'Apps',  value: 'apps' },
  { label: 'Me',    value: 'me' },
  { label: 'Demos', value: 'demos' },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered =
    activeFilter === 'all'
      ? ITEMS
      : ITEMS.filter((item) => item.category === activeFilter)

  const lightboxSlides = filtered.map((item) => ({ src: item.full, alt: item.caption }))

  function openLightbox(idx: number) {
    setLightboxIndex(idx)
    setLightboxOpen(true)
  }

  return (
    <section id="portfolio" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[#e6edf3] text-2xl font-semibold tracking-widest">PORTFOLIO</h2>
        </div>

        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 text-xs font-medium border rounded tracking-widest transition-colors ${
                activeFilter === f.value
                  ? 'border-[#58a6ff] text-[#58a6ff] bg-[#58a6ff]/10'
                  : 'border-[#30363d] text-[#8b949e] hover:border-[#484f58] hover:text-[#c9d1d9]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="flex flex-wrap gap-3 p-0 list-none">
          {filtered.map((item, idx) => (
            <li key={item.thumb} className="w-[calc(50%-6px)] sm:w-[calc(33.33%-8px)] lg:w-[calc(25%-9px)]">
              <div className="group relative overflow-hidden rounded border border-[#21262d] aspect-square">
                <Image
                  src={item.thumb}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                  <button
                    onClick={() => openLightbox(idx)}
                    className="w-10 h-10 bg-[#58a6ff] flex items-center justify-center rounded text-[#0d1117] hover:bg-[#79b8ff] transition-colors"
                    aria-label="View image"
                  >
                    <FaSearch size={14} />
                  </button>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#8b949e] flex items-center justify-center rounded text-[#0d1117] hover:bg-[#c9d1d9] transition-colors"
                      aria-label="Open project"
                    >
                      <FaLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </section>
  )
}
