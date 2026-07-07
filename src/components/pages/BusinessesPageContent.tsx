'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { sectors, type Sector } from "@/data/sectors";

function SectorCard({ sector, index }: { sector: Sector; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/businesses/${sector.id}`}
        className="group relative overflow-hidden cursor-pointer block"
        style={{ height: "420px" }}
      >
        {/* Background image */}
        <Image
          src={sector.image}
          alt={sector.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Hover overlay — dark navy slate, fades in */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: "rgba(13,27,75,0.91)" }}
        />

        {/* Hover content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 z-10 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0">
          {/* Top — title + tags */}
          <div>
            <h3 className="text-2xl font-black text-white leading-tight mb-2">{sector.title}</h3>
            <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.55)" }}>
              {sector.tags.join(" / ")}
            </p>
            {/* Divider line — like Dangote */}
            <div className="flex items-center gap-2 mt-4 mb-5">
              <span className="block h-px w-8 bg-white opacity-50" />
              <span className="block h-px w-4 bg-white opacity-30" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
              {sector.desc}
            </p>
          </div>

          {/* Bottom — "+" button */}
          <div>
            <span
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-light bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[var(--navy)]"
              style={{ border: "2px solid rgba(255,255,255,0.7)" }}
            >
              +
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BusinessesPageContent() {

  return (
    <>
      <PageBanner
        tag="DIVERSIFIED INVESTMENTS. SUSTAINABLE GROWTH."
        title="Our Business Sectors"
        subtitle="Nexone Group operates through 11 strategic sectors that support Africa's economic transformation — from natural resources and agriculture to technology, energy, and beyond."
        image="/images/Mining1.jpeg"
        breadcrumbs={[{ label: "Our Businesses", href: "/businesses" }]}
      />

      {/* ─── Sector Cards Grid ──────────────────────────────────────── */}
      <section className="pt-14 pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {sectors.map((sector, i) => (
              <SectorCard key={sector.id} sector={sector} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ background: "var(--red)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white mb-2">Interested in Investing With Us?</h3>
            <p className="text-sm text-white opacity-85">
              Connect with our team to explore opportunities across our 11 business sectors.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 text-sm font-bold tracking-widest shrink-0 transition-all duration-200"
            style={{ background: "#fff", color: "var(--red)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--navy)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "var(--red)"; }}
          >
            CONTACT US →
          </Link>
        </div>
      </section>
    </>
  );
}
