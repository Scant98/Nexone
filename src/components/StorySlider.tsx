'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const slides = [
  { image: '/images/Real estate1.jpeg', sector: 'Real Estate' },
  { image: '/images/Mining3.jpeg', sector: 'Mining & Resources' },
  { image: '/images/Agriculture1.jpeg', sector: 'Agriculture' },
  { image: '/images/logistic4.jpeg', sector: 'Logistics' },
]

const SLIDE_DURATION = 4500

export default function StorySlider() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const startTimer = useCallback(() => {
    stopTimer()
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, SLIDE_DURATION)
  }, [])

  useEffect(() => {
    startTimer()
    return stopTimer
  }, [startTimer])

  const goTo = (index: number) => {
    if (index !== current) {
      setCurrent(index)
      startTimer()
    }
  }

  return (
    <div className="relative" style={{ height: '420px' }}>
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <Image
            src={slides[current].image}
            alt={`Nexone Group — ${slides[current].sector}`}
            fill
            className="object-cover"
            sizes="50vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute bottom-0 right-0 p-6 z-10"
        style={{ background: 'var(--navy)', maxWidth: '220px' }}
      >
        <p className="text-2xl font-black text-white mb-1">Est. Tanzania</p>
        <p className="text-xs text-white opacity-75">Dar es Salaam | Head Office</p>
      </div>

      {/* Sector label */}
      <div className="absolute top-0 left-0 p-4 z-10">
        <span
          className="text-xs font-bold tracking-widest uppercase text-white px-3 py-1.5"
          style={{ background: 'rgba(196,30,58,0.9)' }}
        >
          {slides[current].sector}
        </span>
      </div>

      {/* Dots */}
      <div className="absolute bottom-0 left-0 p-4 z-10 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Show ${s.sector} photo`}
            className="transition-all duration-300"
            style={{
              width: i === current ? '22px' : '8px',
              height: '8px',
              background: i === current ? 'var(--red)' : 'rgba(255,255,255,0.6)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
