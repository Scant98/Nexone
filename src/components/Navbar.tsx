'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Businesses', href: '/businesses' },
  { label: 'About Us', href: '/about' },
  { label: 'Investor Relations', href: '/investor-relations' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: '#ffffff',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.12)' : '0 1px 3px rgba(0,0,0,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logonew.jpeg"
            alt="Nexone Group"
            width={600}
            height={400}
            className="object-contain"
            style={{ width: 'auto', height: '56px' }}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-wide transition-colors duration-200 relative pb-1"
                style={{ color: isActive(link.href) ? 'var(--red)' : 'var(--navy)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                  style={{
                    width: isActive(link.href) ? '100%' : '0%',
                    background: 'var(--red)',
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200"
          style={{ background: 'var(--red)', color: '#fff' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--red-dark)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
        >
          GET IN TOUCH →
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--navy)',
                opacity: i === 1 && menuOpen ? 0 : 1,
                transform:
                  i === 0 && menuOpen ? 'rotate(45deg) translateY(8px)' :
                  i === 2 && menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '400px' : '0' }}
      >
        <ul className="px-6 pb-6 flex flex-col gap-1" style={{ background: '#fff' }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium py-3 border-b"
                style={{
                  color: isActive(link.href) ? 'var(--red)' : 'var(--navy)',
                  borderColor: 'var(--gray-light)',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center text-sm font-bold py-3 tracking-widest"
              style={{ background: 'var(--red)', color: '#fff' }}
            >
              GET IN TOUCH →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
