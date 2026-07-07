import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import type { Sector } from "@/data/sectors";

export default function BusinessDetailContent({ sector }: { sector: Sector }) {
  return (
    <>
      <PageBanner
        tag={`SECTOR ${sector.number} / 11`}
        title={sector.title}
        subtitle={sector.desc}
        image={sector.image}
        breadcrumbs={[
          { label: "Our Businesses", href: "/businesses" },
          { label: sector.title, href: `/businesses/${sector.id}` },
        ]}
      />

      {/* ─── Overview ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--red)" }}>
                OVERVIEW
              </p>
              <h2 className="text-3xl font-black mb-6" style={{ color: "var(--navy)" }}>
                {sector.title}
              </h2>
              {sector.longDesc.map((para, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed mb-4 last:mb-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="relative" style={{ height: "420px" }}>
              <Image
                src={sector.image2}
                alt={`${sector.title} — Nexone Group`}
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div
                className="absolute bottom-0 right-0 p-6"
                style={{ background: "var(--navy)", maxWidth: "220px" }}
              >
                <p className="text-2xl font-black text-white mb-1">Sector {sector.number}</p>
                <p className="text-xs text-white opacity-75">Nexone Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Focus Areas ───────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "var(--gray-light)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--red)" }}>
            WHERE WE FOCUS
          </p>
          <h2 className="text-3xl font-black mb-12" style={{ color: "var(--navy)" }}>Key Focus Areas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sector.tags.map((tag, i) => (
              <div
                key={i}
                className="bg-white p-8 card-lift"
                style={{ border: "1px solid var(--gray-mid)" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-5 text-white text-sm font-black"
                  style={{ background: "var(--red)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold" style={{ color: "var(--navy)" }}>{tag}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white mb-2">Interested in {sector.title}?</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              Connect with our team to explore opportunities in this sector.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/businesses" className="btn-outline-white px-8 py-4 text-sm font-bold tracking-widest">
              ← ALL BUSINESSES
            </Link>
            <Link href="/contact" className="btn-red px-8 py-4 text-sm font-bold tracking-widest">
              CONTACT US →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
