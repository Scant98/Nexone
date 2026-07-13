'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import type { Attraction } from '@/data/sectors'

const SLIDE_INTERVAL = 3500

function Slideshow({ images, alt, sizes }: { images: string[]; alt: string; sizes: string }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => setIndex(i => (i + 1) % images.length), SLIDE_INTERVAL)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <Image src={images[index]} alt={alt} fill className="object-cover" sizes={sizes} />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 z-10">
          {images.map((_, i) => (
            <span
              key={i}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ width: i === index ? '18px' : '6px', background: i === index ? '#fff' : 'rgba(255,255,255,0.5)' }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function AttractionsGrid({ attractions }: { attractions: Attraction[] }) {
  const [selected, setSelected] = useState<number | null>(null)
  const close = useCallback(() => setSelected(null), [])
  const active = selected !== null ? attractions[selected] : null

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {attractions.map((a, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="bg-white card-lift flex flex-col overflow-hidden text-left cursor-pointer"
          >
            <div className="relative" style={{ height: '230px' }}>
              <Slideshow images={a.images} alt={`${a.title} — Tanzania`} sizes="(max-width: 768px) 100vw, 33vw" />
              <span
                className="absolute top-4 left-4 text-xs font-bold tracking-widest uppercase text-white px-3 py-1 z-10"
                style={{ background: 'var(--red)' }}
              >
                {a.tag}
              </span>
            </div>
            <div className="p-7 flex flex-col gap-3">
              <h3 className="text-lg font-black" style={{ color: 'var(--navy)' }}>{a.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a.desc}</p>
              <span className="text-xs font-bold tracking-widest uppercase mt-1" style={{ color: 'var(--red)' }}>
                VIEW DETAILS →
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0" style={{ background: 'rgba(8,15,42,0.85)' }} onClick={close} />

            <motion.div
              className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-white text-xl leading-none"
                style={{ background: 'rgba(8,15,42,0.6)' }}
              >
                ×
              </button>

              <div className="relative" style={{ height: '320px' }}>
                <Slideshow images={active.images} alt={`${active.title} — Tanzania`} sizes="(max-width: 768px) 100vw, 672px" />
                <span
                  className="absolute top-4 left-4 text-xs font-bold tracking-widest uppercase text-white px-3 py-1 z-10"
                  style={{ background: 'var(--red)' }}
                >
                  {active.tag}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black mb-4" style={{ color: 'var(--navy)' }}>{active.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{active.desc}</p>

                {active.highlights && active.highlights.length > 0 && (
                  <div className="flex flex-col gap-3">
                    {active.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="block w-1.5 h-1.5 mt-2 shrink-0" style={{ background: 'var(--red)' }} />
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{h}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
