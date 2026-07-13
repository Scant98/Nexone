'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const pillars = [
  { title: 'Identify',  desc: 'High-potential opportunities in transformative sectors' },
  { title: 'Structure', desc: 'Rigorous due diligence and clear governance frameworks' },
  { title: 'Partner',   desc: 'Connecting global capital with trusted local expertise' },
]

export default function InvestorSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[580px]">

        {/* ── Left — Investment approach (Red bg) ───────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-3/5 px-10 py-16 lg:px-16 flex flex-col justify-center"
          style={{ background: 'var(--red)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block h-px w-8" style={{ background: 'rgba(255,255,255,0.5)' }} />
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white opacity-70">
              INVESTOR CENTRE
            </p>
          </div>
          <h2 className="text-3xl font-black text-white mb-2 leading-tight">
            Partner With Us to<br />Invest in Africa
          </h2>
          <p className="text-sm mb-10 max-w-md" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Nexone Group connects global capital with Africa&apos;s greatest opportunities —
            through transparency, strong governance, and deep local expertise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
                className="pt-4"
                style={{ borderTop: '2px solid rgba(255,255,255,0.35)' }}
              >
                <p className="text-xs font-black tracking-widest text-white opacity-50 mb-2">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="text-base font-bold text-white mb-1">{p.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <Link
              href="/investor-relations"
              className="group inline-flex items-center gap-3 px-7 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#fff', e.currentTarget.style.color = 'var(--red)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)', e.currentTarget.style.color = '#fff')}
            >
              LEARN MORE
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        {/* ── Right — IR teaser ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-2/5 flex flex-col"
        >
          {/* Image top half */}
          <div className="relative flex-1" style={{ minHeight: '220px' }}>
            <Image
              src="/images/investor relations1.jpeg"
              alt="Investor Relations"
              fill
              className="object-cover"
              sizes="40vw"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(8,15,42,0.5)' }} />
            <div className="absolute bottom-5 left-6">
              <span className="text-xs font-bold tracking-widest text-white opacity-60">BRATISLAVA, SLOVAKIA</span>
            </div>
          </div>

          {/* Content bottom half */}
          <div className="flex flex-col justify-center px-10 py-10 flex-1 bg-white">
            <h3 className="text-2xl font-black mb-3 leading-tight" style={{ color: 'var(--navy)' }}>
              <span style={{ color: 'var(--red)' }}>Investor</span>{' '}
              Relations
            </h3>
            <p className="text-sm leading-relaxed mb-7" style={{ color: 'var(--text-muted)' }}>
              Stay connected to the performance and governance of Nexone Group. Discover our
              investment approach, governance standards, and partnership opportunities.
            </p>

            <div className="flex flex-col gap-2 mb-7">
              {['Investment Approach', 'Corporate Governance', 'Partnership Opportunities', 'Sector Performance'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--navy)' }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--red)' }} />
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/investor-relations"
              className="group inline-flex items-center gap-3 px-7 py-3.5 text-xs font-bold tracking-widest uppercase self-start transition-all duration-300"
              style={{ background: 'var(--red)', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--navy)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
            >
              INVESTOR CENTRE
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
