'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Businesses', href: '/businesses' },
  { label: 'About Us', href: '/about' },
  { label: 'Investor Relations', href: '/investor-relations' },
  { label: 'Contact', href: '/contact' },
]

const sectors = [
  'Natural Resources & Mining',
  'Logistics & Supply Chain',
  'Real Estate & Property Development',
  'Infrastructure Development',
  'Energy',
  'Agriculture & Agribusiness',
  'Tourism & Hospitality',
  'International Trade',
  'Investment & Financial Advisory',
  'Technology & Innovation',
  'Oil & Gas',
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <footer style={{ background: 'var(--navy-dark)' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 inline-block p-3" style={{ background: '#fff' }}>
              <Image src="/images/logonew.jpeg" alt="Nexone Group" width={600} height={400}
                className="object-contain" style={{ width: 'auto', height: '48px' }} />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Building Africa&apos;s Future Through Investment, Innovation &amp; Sustainable Growth. Connecting Global Capital with Africa&apos;s Greatest Opportunities.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'Facebook', icon: 'f' },
                { label: 'X / Twitter', icon: 'X' },
                { label: 'Instagram', icon: '◈' },
                { label: 'LinkedIn', icon: 'in' },
                { label: 'YouTube', icon: '▶' },
              ].map((s) => (
                <button key={s.label} aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center text-xs font-bold text-white transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.25)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.background = 'var(--red)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'transparent' }}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}
                    className="text-sm flex items-center gap-2 transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    <span style={{ color: 'var(--red)' }}>›</span>{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5" style={{ color: 'var(--red)' }}>📞</span>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Phone</p>
                  <p className="text-sm text-white">+255 750 070 000</p>
                  <p className="text-sm text-white">+421 947 110 610</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5" style={{ color: 'var(--red)' }}>✉️</span>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Email</p>
                  <p className="text-sm text-white">info@nexonegroup.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5" style={{ color: 'var(--red)' }}>📍</span>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Head Office</p>
                  <p className="text-sm text-white leading-snug">Block &ldquo;41&rdquo; Kinondoni,<br />Alli Hassan Mwinyi Road,<br />Dar es Salaam, Tanzania</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-3">Newsletter</h4>
            <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Subscribe to stay updated on Africa&apos;s investment landscape and Nexone Group news.
            </p>
            {submitted ? (
              <p className="text-sm font-bold" style={{ color: 'var(--red)' }}>Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Email address" required
                  className="flex-1 px-4 py-3 text-sm outline-none"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRight: 'none', color: '#fff' }}
                />
                <button type="submit"
                  className="px-4 py-3 flex items-center justify-center transition-all duration-200"
                  style={{ background: 'var(--red)', color: '#fff', minWidth: '48px' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--red-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
                >→</button>
              </form>
            )}

            {/* Sectors mini list */}
            <div className="mt-6">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Our Sectors</p>
              <div className="flex flex-wrap gap-1.5">
                {sectors.slice(0, 6).map(s => (
                  <span key={s} className="text-xs px-2 py-1" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.55)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-4" style={{ background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © 2026 Nexone Group. All Rights Reserved. | Dar es Salaam, Tanzania
          </p>
          <div className="flex gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <a href="#" onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>Terms of Service</a>
            <span>•</span>
            <a href="#" onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
