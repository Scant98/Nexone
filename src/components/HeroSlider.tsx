'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const slides = [
  {
    image: '/images/Agriculture1.jpeg',
    tag: 'AGRICULTURE & AGRIBUSINESS',
    headline: ['FEEDING THE', 'CONTINENT'],
    sub: 'Investing across the agricultural value chain — from modern farming and food processing to storage, distribution, and agricultural exports.',
    cta: 'OUR BUSINESSES',
    href: '/businesses',
  },
  {
    image: '/images/logistic5.jpeg',
    tag: 'LOGISTICS & SUPPLY CHAIN',
    headline: ['CONNECTING', "AFRICA'S", 'MARKETS'],
    sub: 'Integrated logistics solutions including freight forwarding, transportation, warehousing, and end-to-end supply chain management across East and Central Africa.',
    cta: 'OUR BUSINESSES',
    href: '/businesses',
  },
  {
    image: '/images/Mining5.jpeg',
    tag: 'NATURAL RESOURCES & MINING',
    headline: ['UNLOCKING', "AFRICA'S", 'MINERAL WEALTH'],
    sub: 'Responsible exploration, trading, value addition, and export of high-value natural resources including gemstones and strategic commodities.',
    cta: 'OUR BUSINESSES',
    href: '/businesses',
  },
  {
    image: '/images/Real estate.jpeg',
    tag: 'REAL ESTATE & PROPERTY',
    headline: ["BUILDING AFRICA'S", 'FUTURE CITIES'],
    sub: 'Modern residential, commercial, hospitality, and mixed-use properties meeting growing demand for quality infrastructure across Tanzania.',
    cta: 'OUR BUSINESSES',
    href: '/businesses',
  },
]

const stats = [
  { value: '5+',     label: 'Countries of Operation' },
  { value: '11',     label: 'Business Sectors' },
  { value: '2,000+', label: 'Jobs Created' },
  { value: '50+',    label: 'Strategic Partners' },
]

const SLIDE_DURATION = 6000

export default function HeroSlider() {
  const [current, setCurrent]         = useState(0)
  const [progress, setProgress]       = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (progressRef.current) clearInterval(progressRef.current)
  }

  const next = useCallback(() => {
    setIsAnimating(true)
    setProgress(0)
    setCurrent(prev => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [])

  const startTimers = useCallback(() => {
    stopTimers()
    const step = 100 / (SLIDE_DURATION / 50)
    progressRef.current = setInterval(() => setProgress(p => Math.min(p + step, 100)), 50)
    intervalRef.current = setInterval(next, SLIDE_DURATION)
  }, [next])

  useEffect(() => {
    startTimers()
    return stopTimers
  }, [startTimers])

  const goTo = (index: number) => {
    if (!isAnimating && index !== current) {
      setIsAnimating(true)
      setProgress(0)
      setCurrent(index)
      setTimeout(() => setIsAnimating(false), 800)
      startTimers()
    }
  }

  // Compute cumulative word count before a given line for delay offsetting
  const wordsBeforeLine = (lineIndex: number) =>
    slides[current].headline
      .slice(0, lineIndex)
      .reduce((acc, l) => acc + l.split(' ').length, 0)

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '640px' }}>

      {/* ── Background Images — Ken Burns zoom ──────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 1.12 }}
          transition={{
            opacity: { duration: 1.2, ease: 'easeInOut' },
            scale:   { duration: SLIDE_DURATION / 1000, ease: 'linear' },
          }}
          style={{
            backgroundImage: `url('${slides[current].image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* ── Overlays ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0" style={{ background: 'rgba(8,15,42,0.62)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,15,42,0.75) 0%, transparent 50%)' }} />

      {/* ── Stats Panel (right edge, xl only) ────────────────────────── */}
      <div className="absolute top-1/2 right-0 hidden xl:flex flex-col z-10" style={{ transform: 'translateY(-50%)', width: '240px' }}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
            className="flex items-center gap-4 px-5 py-4"
            style={{
              background: i % 2 === 0 ? 'var(--red)' : 'rgba(196,30,58,0.82)',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <div className="w-px self-stretch shrink-0" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <div>
              <p className="text-xl font-black text-white leading-none">{stat.value}</p>
              <p className="text-xs text-white mt-0.5" style={{ opacity: 0.75 }}>{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Centred Slide Content ─────────────────────────────────────── */}
      <div className="absolute inset-0 xl:pr-[240px] z-10 flex flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div key={current} className="flex flex-col items-center w-full max-w-4xl">

            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="block w-8 h-px" style={{ background: 'var(--red)' }} />
              <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: 'var(--red)' }}>
                {slides[current].tag}
              </p>
              <span className="block w-8 h-px" style={{ background: 'var(--red)' }} />
            </motion.div>

            {/* Headline — word by word */}
            <div className="mb-8">
              {slides[current].headline.map((line, li) => {
                const words = line.split(' ')
                const offset = wordsBeforeLine(li)
                return (
                  <div key={li} className="flex flex-wrap justify-center">
                    {words.map((word, wi) => (
                      <div key={`${word}-${wi}`} className="overflow-hidden mx-1">
                        <motion.span
                          initial={{ y: '110%', opacity: 0 }}
                          animate={{ y: '0%', opacity: 1 }}
                          exit={{ y: '-40%', opacity: 0 }}
                          transition={{
                            duration: 0.55,
                            delay: 0.1 + (offset + wi) * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="block font-black text-white"
                          style={{
                            fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.05,
                          }}
                        >
                          {word}
                        </motion.span>
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, delay: 0.6 }}
              className="max-w-xl leading-relaxed mb-10 text-center"
              style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1rem' }}
            >
              {slides[current].sub}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.78 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                href={slides[current].href}
                className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300"
                style={{ background: 'var(--red)', color: '#fff' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#fff', e.currentTarget.style.color = 'var(--red)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)', e.currentTarget.style.color = '#fff')}
              >
                {slides[current].cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300"
                style={{ border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff', e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)', e.currentTarget.style.background = 'transparent')}
              >
                ABOUT US
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom Controls ───────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-8 md:px-16 pb-10 xl:pr-[260px]">

        {/* Progress dots */}
        <div className="flex items-center gap-4">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{ opacity: i === current ? 1 : 0.4 }}
            >
              <div style={{ height: '2px', width: i === current ? '48px' : '20px', background: 'rgba(255,255,255,0.3)', transition: 'width 0.3s' }}>
                {i === current && (
                  <motion.div
                    className="h-full"
                    style={{ background: 'var(--red)' }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0, ease: 'linear' }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Counter + next */}
        <div className="flex items-center gap-6">
          <div className="text-white">
            <span className="text-lg font-black">{String(current + 1).padStart(2, '0')}</span>
            <span className="text-sm opacity-40 mx-1">/</span>
            <span className="text-sm opacity-40">{String(slides.length).padStart(2, '0')}</span>
          </div>
          <button
            onClick={() => { next(); startTimers() }}
            className="w-11 h-11 flex items-center justify-center text-white text-lg transition-all duration-200"
            style={{ border: '1.5px solid rgba(255,255,255,0.4)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--red)', e.currentTarget.style.borderColor = 'var(--red)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
          >›</button>
        </div>
      </div>

      {/* ── Scroll Indicator ─────────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10">
        <span className="text-xs tracking-[0.2em] uppercase text-white opacity-35">Scroll</span>
        <div className="w-px h-10 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.2)' }}>
          <motion.div
            className="w-full absolute top-0"
            style={{ background: 'var(--red)', height: '40%' }}
            animate={{ y: ['0%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

    </section>
  )
}
