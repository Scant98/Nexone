'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const sectors = [
  {
    id: 'mining',
    title: 'Natural Resources & Mining',
    tag: 'Mining',
    desc: 'Responsible exploration, trading, value addition, and export of gemstones, industrial minerals, and strategic commodities.',
    image: '/images/Mining2.jpeg',
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Agribusiness',
    tag: 'Agriculture',
    desc: 'Modern farming, food processing, storage, distribution, and agricultural exports supporting food security across East Africa.',
    image: '/images/Agriculture2.jpeg',
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Property Development',
    tag: 'Real Estate',
    desc: 'Modern residential, commercial, hospitality, and mixed-use properties meeting growing demand for quality infrastructure.',
    image: '/images/Real estate.2.jpeg',
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    tag: 'Logistics',
    desc: 'Freight forwarding, transportation, warehousing, customs support, and end-to-end supply chain management across Africa.',
    image: '/images/logistic4.jpeg',
  },
]

function SectorCard({ sector, index }: { sector: typeof sectors[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/businesses/${sector.id}`}
        className="group relative overflow-hidden cursor-pointer block"
        style={{ height: '380px' }}
      >
        {/* Full image background */}
        <Image
          src={sector.image}
          alt={sector.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Always-visible gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-400"
          style={{ background: 'linear-gradient(to top, rgba(8,15,42,0.92) 0%, rgba(8,15,42,0.4) 55%, rgba(8,15,42,0.15) 100%)' }}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: 'rgba(196,30,58,0.75)' }}
        />

        {/* Sector tag top-left */}
        <div className="absolute top-5 left-5 z-10">
          <span className="text-xs font-bold tracking-widest uppercase text-white px-3 py-1"
            style={{ background: 'var(--red)' }}>
            {sector.tag}
          </span>
        </div>

        {/* Default content (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-7 z-10 transition-all duration-400 group-hover:translate-y-2 group-hover:opacity-0">
          <h3 className="text-xl font-black text-white leading-tight">{sector.title}</h3>
        </div>

        {/* Hover content (centre) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0">
          <h3 className="text-xl font-black text-white text-center mb-3 leading-tight">{sector.title}</h3>
          <p className="text-sm text-white text-center leading-relaxed mb-6 opacity-90">{sector.desc}</p>
          <span
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-widest uppercase text-white transition-all duration-200"
            style={{ border: '1.5px solid rgba(255,255,255,0.7)' }}
          >
            VIEW SECTOR →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-px w-8" style={{ background: 'var(--red)' }} />
              <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--red)' }}>
                DIVERSIFIED INVESTMENTS
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-none" style={{ color: 'var(--navy)' }}>
              Our Business<br />
              <span style={{ color: 'var(--red)' }}>Sectors</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 items-start md:items-end">
            <p className="text-sm leading-relaxed max-w-xs text-right hidden md:block" style={{ color: 'var(--text-muted)' }}>
              Nexone Group operates across 11 strategic sectors — hover to explore each one.
            </p>
            <Link
              href="/businesses"
              className="group inline-flex items-center gap-3 px-7 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-200"
              style={{ background: 'var(--navy)', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--red)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--navy)')}
            >
              VIEW ALL 11 SECTORS
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        {/* ── Cards Grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sectors.map((sector, i) => (
            <SectorCard key={i} sector={sector} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
