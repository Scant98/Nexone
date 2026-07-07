'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = (target / duration) * 16
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 11,   suffix: '',   prefix: '',  label: 'Business Sectors',         sub: 'Across East & Central Africa' },
  { value: 5,    suffix: '+',  prefix: '',  label: 'Countries of Operation', sub: 'Regional footprint' },
  { value: 2000, suffix: '+',  prefix: '',  label: 'Jobs Created',           sub: 'Direct employment' },
  { value: 500,  suffix: 'M+', prefix: '$', label: 'Portfolio Value',        sub: 'USD — Assets under management' },
  { value: 50,   suffix: '+',  prefix: '',  label: 'Strategic Partners',     sub: 'Global & regional alliances' },
]

export default function StatsBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ background: 'var(--navy)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between px-8 py-10 relative group"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                borderBottom: '3px solid transparent',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderBottomColor = 'var(--red)')}
              onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'transparent')}
            >
              {/* Number */}
              <p
                className="text-3xl xl:text-4xl font-black mb-2 leading-none"
                style={{ color: i === 0 ? 'var(--red)' : '#fff' }}
              >
                {inView
                  ? <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  : `${stat.prefix}0${stat.suffix}`}
              </p>

              {/* Label */}
              <div>
                <p className="text-sm font-bold text-white mb-0.5">{stat.label}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{stat.sub}</p>
              </div>

              {/* Subtle top accent on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'var(--red)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
