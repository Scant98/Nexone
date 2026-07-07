import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link";

const investmentPoints = [
  "Diversified exposure across 11 high-growth sectors",
  "Deep local expertise combined with global best practices",
  "Strong ESG framework and responsible investment approach",
  "Strategic partnerships with leading regional and global institutions",
  "Proven track record of value creation across East Africa",
];

const investmentApproach = [
  {
    number: "01",
    title: "Identify",
    desc: "We identify high-potential opportunities in sectors that drive Africa's economic transformation — from natural resources and agriculture to real estate and logistics.",
  },
  {
    number: "02",
    title: "Structure",
    desc: "Every project is carefully structured with rigorous due diligence, regulatory compliance, and clear governance frameworks that protect investor interests.",
  },
  {
    number: "03",
    title: "Partner",
    desc: "We facilitate partnerships between global capital and local expertise, connecting investors, institutions, and operators around shared long-term goals.",
  },
  {
    number: "04",
    title: "Grow",
    desc: "We actively manage and grow each investment, creating sustainable value for our partners while generating jobs and lasting impact across the region.",
  },
];

const governancePrinciples = [
  { title: "Transparency",   desc: "We maintain open and honest communication with all stakeholders, providing timely and accurate disclosures." },
  { title: "Accountability", desc: "Our leadership is held to the highest standards of performance and ethical conduct across all operations." },
  { title: "Responsibility", desc: "We take responsibility for our economic, social, and environmental impact across every market we operate in." },
  { title: "Fairness",       desc: "We treat all investors, partners, and stakeholders equitably and with respect for their interests." },
];

const partnerTypes = [
  {
    title: "Institutional Investors",
    desc: "Development finance institutions, funds, and family offices seeking diversified exposure to Africa's growth story through a trusted local partner.",
  },
  {
    title: "Strategic Partners",
    desc: "Global and regional companies looking to enter or expand in East African markets through joint ventures and co-investment structures.",
  },
  {
    title: "Private Investors",
    desc: "Individuals and private groups seeking direct participation in vetted projects across mining, agriculture, real estate, and logistics.",
  },
];

export default function InvestorRelationsPageContent() {
  return (
    <>
      <PageBanner
        tag="INVESTOR CENTRE"
        title="Investor Relations"
        subtitle="Partner with Nexone Group and gain access to Africa's most compelling investment opportunities — backed by local expertise, transparency, and strong governance."
        image="/images/investors relation.jpeg"
        breadcrumbs={[{ label: "Investor Relations", href: "/investor-relations" }]}
      />

      {/* ─── Key Metrics Banner (disabled for now) ─────────────────────────
      const highlights = [
        { value: "11",     label: "Business Sectors", desc: "Diversified portfolio across high-growth African industries" },
        { value: "5+",     label: "Countries",        desc: "Operations spanning key East and Central African markets" },
        { value: "$500M+", label: "Portfolio Value",  desc: "Total assets under management across all sectors" },
        { value: "2,000+", label: "Jobs Created",     desc: "Direct employment across our portfolio companies" },
      ];

      <section style={{ background: "var(--red)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="px-8 py-10 flex flex-col gap-2"
                style={{ borderRight: i < highlights.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none" }}
              >
                <p className="text-3xl font-black text-white">{h.value}</p>
                <p className="text-sm font-bold text-white">{h.label}</p>
                <p className="text-xs text-white opacity-70 leading-snug">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      ──────────────────────────────────────────────────────────────────── */}

      {/* ─── Why Invest With Us ────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--red)" }}>
                WHY INVEST WITH US
              </p>
              <h2 className="text-3xl font-black mb-6" style={{ color: "var(--navy)" }}>
                Africa&apos;s Investment Opportunity
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                Africa represents one of the world&apos;s most compelling investment frontiers — a continent of
                1.4 billion people, abundant natural resources, and rapidly growing economies. Nexone Group
                positions investors at the heart of this transformation.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                With deep local expertise, a diversified portfolio across 11 sectors, and a commitment to responsible
                investment, we deliver sustainable returns while creating lasting positive impact across East and
                Central Africa.
              </p>

              <div className="flex flex-col gap-3">
                {investmentPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                      style={{ background: "var(--red)" }}
                    >✓</span>
                    <p className="text-sm" style={{ color: "var(--navy)" }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" style={{ height: "480px" }}>
              <Image
                src="/images/investor relations1.jpeg"
                alt="Investment Opportunity"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(8,15,42,0.6) 0%, transparent 50%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-2 text-white opacity-70"
                >OUR COMMITMENT</p>
                <p className="text-lg font-black text-white leading-snug">
                  &ldquo;Connecting Global Capital with Africa&apos;s Greatest Opportunities.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Investment Approach ───────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "var(--gray-light)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--red)" }}>
            HOW WE WORK
          </p>
          <h2 className="text-3xl font-black mb-12" style={{ color: "var(--navy)" }}>
            Our Investment Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentApproach.map((step, i) => (
              <div
                key={i}
                className="bg-white p-8 flex flex-col gap-4 card-lift relative overflow-hidden"
                style={{ borderTop: "3px solid var(--red)" }}
              >
                <span className="text-5xl font-black" style={{ color: "var(--gray-mid)" }}>{step.number}</span>
                <h3 className="text-lg font-black" style={{ color: "var(--navy)" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We Work With ──────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1" style={{ height: "440px" }}>
              <Image
                src="/images/investors relation.jpeg"
                alt="Partnership"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div
                className="absolute top-0 left-0 w-14 h-14"
                style={{ background: "var(--red)" }}
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--red)" }}>
                WHO WE WORK WITH
              </p>
              <h2 className="text-3xl font-black mb-6" style={{ color: "var(--navy)" }}>
                Built for Every Kind of Investor
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                Whether you are an institution deploying capital at scale or a private investor exploring African
                markets for the first time, we structure opportunities to match your goals, risk appetite, and horizon.
              </p>

              <div className="flex flex-col gap-6">
                {partnerTypes.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-0.5 shrink-0 self-stretch" style={{ background: "var(--red)" }} />
                    <div>
                      <h3 className="text-base font-bold mb-1" style={{ color: "var(--navy)" }}>{p.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Corporate Governance ──────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--red)" }}>
            OUR STANDARDS
          </p>
          <h2 className="text-3xl font-black text-white mb-12">Corporate Governance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {governancePrinciples.map((p, i) => (
              <div
                key={i}
                className="p-8 flex flex-col gap-4"
                style={{ borderRight: i < governancePrinciples.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
              >
                <span className="text-3xl font-black text-white opacity-20">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-white opacity-70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Investor Enquiries CTA ────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black mb-2" style={{ color: "var(--navy)" }}>Investor Enquiries</h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              For investor relations enquiries, please contact our team directly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@nexonegroup.com"
              className="btn-red px-8 py-4 text-sm font-bold tracking-widest"
            >EMAIL US →</a>
            <Link href="/contact" className="btn-outline-navy px-8 py-4 text-sm font-bold tracking-widest">
              CONTACT US →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
