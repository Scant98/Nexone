'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const floatingStats = [
  { value: '11', label: 'Sectors' },
  { value: '5+', label: 'Countries' },
  { value: '2K+', label: 'Jobs' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[640px]">

        {/* ── Left — Image stack ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:w-1/2"
          style={{ minHeight: '460px' }}
        >
          <Image
            src="/images/Agriculture2.jpeg"
            alt="About Nexone Group"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(8,15,42,0.45) 0%, transparent 60%)' }}
          />

          {/* Floating stats badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-8 left-8 right-8 flex gap-3 z-10"
          >
            {floatingStats.map((s, i) => (
              <div
                key={i}
                className="flex-1 text-center py-4"
                style={{ background: i === 1 ? 'var(--red)' : 'rgba(8,15,42,0.88)', backdropFilter: 'blur(8px)' }}
              >
                <p className="text-2xl font-black text-white leading-none">{s.value}</p>
                <p className="text-xs text-white opacity-70 mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-16 h-16"
            style={{ background: 'var(--red)' }}
          />
        </motion.div>

        {/* ── Right — Content ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-1/2 flex flex-col justify-center px-10 py-16 lg:px-16"
          style={{ background: 'var(--navy)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block h-px w-8" style={{ background: 'var(--red)' }} />
            <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--red)' }}>
              ABOUT NEXONE GROUP
            </p>
          </div>

          <h2 className="text-4xl font-black text-white leading-tight mb-6">
            Shaping Africa&apos;s Future Through<br />
            <span style={{ color: 'var(--red)' }}>Strategic Investment</span>
          </h2>

          <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Nexone Group is a diversified investment holding company established with a clear purpose:
            to unlock Africa&apos;s vast economic potential by creating sustainable businesses, strategic
            partnerships, and long-term investment opportunities.
          </p>

          <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Headquartered in Dar es Salaam, Tanzania, we connect global capital with Africa&apos;s greatest
            opportunities across 11 strategic sectors — from agriculture and mining to real estate, energy,
            logistics, and beyond.
          </p>

          {/* Vision + Purpose */}
          <div className="flex flex-col gap-5 mb-10">
            {[
              {
                label: 'OUR VISION',
                text: "To become Africa's most trusted and respected investment group, connecting global opportunities with sustainable African growth while creating lasting value for generations.",
              },
              {
                label: 'OUR PURPOSE',
                text: "Connecting Global Capital with Africa's Greatest Opportunities — identifying opportunities that transform industries, empower communities, and contribute to Africa's long-term prosperity.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                className="flex gap-4"
              >
                <span className="w-0.5 shrink-0 self-stretch" style={{ background: 'var(--red)' }} />
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: 'var(--red)' }}>
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed text-white opacity-75">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-bold tracking-widest uppercase self-start transition-all duration-300"
            style={{ background: 'var(--red)', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fff', e.currentTarget.style.color = 'var(--red)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)', e.currentTarget.style.color = '#fff')}
          >
            LEARN MORE ABOUT US
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
