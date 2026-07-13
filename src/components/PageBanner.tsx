'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface PageBannerProps {
  tag: string
  title: string
  subtitle?: string
  image?: string
  breadcrumbs?: { label: string; href: string }[]
}

export default function PageBanner({ tag, title, subtitle, image = '/images/Mining1.jpeg', breadcrumbs }: PageBannerProps) {
  return (
    <section
      className="relative flex items-end pt-20 overflow-hidden"
      style={{
        height: '420px',
        backgroundImage: `url("${encodeURI(image)}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Layered overlays */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(100deg, rgba(8,15,42,0.95) 0%, rgba(8,15,42,0.75) 60%, rgba(8,15,42,0.5) 100%)' }} />
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(8,15,42,0.7) 0%, transparent 50%)' }} />

      {/* Red accent top bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-20 left-0 right-0 h-0.5 origin-left"
        style={{ background: 'var(--red)', opacity: 0.6 }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-14">

        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-2 mb-5 text-xs"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span style={{ color: 'var(--red)' }}>›</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="transition-colors hover:text-white">{crumb.label}</Link>
                )}
              </span>
            ))}
          </motion.div>
        )}

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="block w-8 h-px" style={{ background: 'var(--red)' }} />
          <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--red)' }}>{tag}</p>
        </motion.div>

        {/* Title */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-black text-white leading-tight"
          >
            {title}
          </motion.h1>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm max-w-xl leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-0 mt-6 origin-left"
        >
          <span className="block h-0.5 w-12" style={{ background: 'var(--red)' }} />
          <span className="block h-px w-24" style={{ background: 'rgba(255,255,255,0.2)' }} />
        </motion.div>
      </div>
    </section>
  )
}
