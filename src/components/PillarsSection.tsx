'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 6v36M6 24h36M10.5 10.5l27 27M37.5 10.5l-27 27" />
      </svg>
    ),
    title: 'Strategic Investment',
    desc: 'Deploying capital with precision across high-growth African markets, building long-term value through disciplined investment strategies.',
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
        <path d="M6 42h36M10 42V20l14-12 14 12v22" />
        <rect x="19" y="30" width="10" height="12" />
        <rect x="14" y="24" width="6" height="6" />
        <rect x="28" y="24" width="6" height="6" />
      </svg>
    ),
    title: 'Building Infrastructure',
    desc: "Transforming Tanzania's skyline through premium real estate and infrastructure that connects communities and drives economic growth.",
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
        <path d="M8 40 Q16 20 24 32 Q32 44 40 24" />
        <path d="M8 28 Q16 12 24 20 Q32 28 40 12" />
        <circle cx="24" cy="10" r="4" />
      </svg>
    ),
    title: 'Food Security',
    desc: "Supporting East Africa's agricultural value chain to ensure food availability, affordability, and national self-reliance for generations to come.",
  },
  {
    number: '04',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
        <polygon points="24,6 42,38 6,38" />
        <circle cx="24" cy="28" r="5" />
        <line x1="24" y1="6" x2="24" y2="16" />
      </svg>
    ),
    title: 'Mining & Resources',
    desc: "Unlocking Tanzania's mineral wealth through responsible and innovative mining operations that generate sustainable economic value.",
  },
  {
    number: '05',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
        <path d="M24 8 Q34 18 34 28 a10 10 0 0 1-20 0 Q14 18 24 8z" />
        <path d="M24 42v-6M18 36l6-6 6 6" />
      </svg>
    ),
    title: 'Sustainability',
    desc: 'Embedding ESG principles into every investment decision — investing in a future that is environmentally sound and socially responsible.',
  },
  {
    number: '06',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="32" height="32">
        <rect x="8" y="8" width="13" height="13" rx="1" />
        <rect x="27" y="8" width="13" height="13" rx="1" />
        <rect x="8" y="27" width="13" height="13" rx="1" />
        <rect x="27" y="27" width="13" height="13" rx="1" />
      </svg>
    ),
    title: 'Innovation & Growth',
    desc: 'Embracing technology and innovative thinking to create new pathways for African businesses and global investors to thrive together.',
  },
]

export default function PillarsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 px-6" style={{ background: 'var(--gray-light)' }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Header ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-px w-8" style={{ background: 'var(--red)' }} />
              <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--red)' }}>
                WHAT WE STAND FOR
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-none" style={{ color: 'var(--navy)' }}>
              Our Core<br />
              <span style={{ color: 'var(--red)' }}>Pillars</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--text-muted)' }}>
            Six principles that guide every investment, partnership, and business decision Nexone Group makes across Africa.
          </p>
        </motion.div>

        {/* ── Cards Grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--gray-mid)' }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.05 + i * 0.1 }}
              className="group relative bg-white p-8 flex flex-col gap-5 overflow-hidden cursor-default transition-all duration-300"
              style={{ minHeight: '280px' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--navy)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff'
              }}
            >
              {/* Large number watermark */}
              <span
                className="absolute top-4 right-5 text-7xl font-black leading-none select-none transition-all duration-300"
                style={{ color: 'rgba(13,27,75,0.06)', fontVariantNumeric: 'tabular-nums' }}
              >
                {pillar.number}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center transition-all duration-300 shrink-0"
                style={{ border: '1.5px solid var(--red)', color: 'var(--red)' }}
              >
                {pillar.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 relative z-10">
                <h3
                  className="text-lg font-black leading-tight transition-colors duration-300 group-hover:text-white"
                  style={{ color: 'var(--navy)' }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom red line — slides in on hover */}
              <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
                style={{ background: 'var(--red)', width: '0%' }}
                ref={el => {
                  if (!el) return
                  const parent = el.parentElement
                  if (!parent) return
                  parent.addEventListener('mouseenter', () => (el.style.width = '100%'))
                  parent.addEventListener('mouseleave', () => (el.style.width = '0%'))
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
