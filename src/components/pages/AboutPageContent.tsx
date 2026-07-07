import PageBanner from "@/components/PageBanner";
import StorySlider from "@/components/StorySlider";
import Link from "next/link";

const values = [
  {
    title: "Integrity",
    desc: "We conduct our business with the highest standards of transparency, ethics, and accountability in all our dealings.",
  },
  {
    title: "Excellence",
    desc: "We pursue world-class standards in every investment, operation, and partnership we undertake across Africa.",
  },
  {
    title: "Innovation",
    desc: "We embrace new ideas, technologies, and approaches that drive efficiency and create competitive advantages.",
  },
  {
    title: "Sustainability",
    desc: "We invest with a long-term view, ensuring our activities create lasting positive impact for communities and the environment.",
  },
  {
    title: "Partnership",
    desc: "We believe in the power of collaboration — building strategic alliances that multiply impact and create shared value.",
  },
  {
    title: "African Leadership",
    desc: "We champion African talent, expertise, and leadership as the foundation of the continent's economic transformation.",
  },
];

const visionMissionPurpose = [
  {
    label: "OUR VISION",
    icon: "◎",
    text: "To become Africa's most trusted and respected investment group, connecting global opportunities with sustainable African growth while creating lasting value for generations.",
    highlight: false,
  },
  {
    label: "OUR MISSION",
    icon: "⬡",
    text: "To build, invest in, and manage world-class businesses that drive economic growth, foster innovation, create employment, and deliver sustainable returns through strategic partnerships, responsible leadership, and operational excellence.",
    highlight: true,
  },
  {
    label: "OUR PURPOSE",
    icon: "◈",
    text: "Connecting Global Capital with Africa's Greatest Opportunities. We exist to identify opportunities that transform industries, empower communities, and contribute to Africa's long-term prosperity.",
    highlight: false,
  },
];

export default function AboutPageContent() {
  return (
    <>
      <PageBanner
        tag="ABOUT NEXONE GROUP"
        title="Shaping Africa's Future Through Strategic Investment"
        subtitle="A diversified investment holding company connecting global capital with Africa's greatest opportunities."
        image="/images/Agriculture2.jpeg"
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />

      {/* ─── Our Story ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--red)" }}>
                WHO WE ARE
              </p>
              <h2 className="text-3xl font-black mb-6" style={{ color: "var(--navy)" }}>Our Story</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                Nexone Group is a diversified investment holding company established with a clear purpose: to unlock
                Africa&apos;s vast economic potential by creating sustainable businesses, strategic partnerships, and
                long-term investment opportunities.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                Headquartered in Dar es Salaam, Tanzania, we operate across 11 strategic sectors spanning natural
                resources, agriculture, real estate, energy, logistics, tourism, technology, and more. Our approach
                combines local expertise with global best practices to deliver exceptional outcomes.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                We exist to identify opportunities that transform industries, empower communities, and contribute to
                Africa&apos;s long-term prosperity — building bridges between global capital and Africa&apos;s greatest
                opportunities.
              </p>
            </div>

            <StorySlider />
          </div>
        </div>
      </section>

      {/* ─── Vision / Mission / Purpose ────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3 text-center" style={{ color: "var(--red)" }}>
            OUR FOUNDATION
          </p>
          <h2 className="text-3xl font-black text-white text-center mb-12">Vision, Mission &amp; Purpose</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {visionMissionPurpose.map((item, i) => (
              <div
                key={i}
                className="p-10 flex flex-col gap-5"
                style={{
                  background: item.highlight ? "var(--red)" : "transparent",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}
              >
                <div className="text-4xl text-white opacity-40">{item.icon}</div>
                <p
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: item.highlight ? "rgba(255,255,255,0.7)" : "var(--red)" }}
                >
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed text-white opacity-85">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Core Values ───────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "var(--gray-light)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--red)" }}>
            WHAT DRIVES US
          </p>
          <h2 className="text-3xl font-black mb-12" style={{ color: "var(--navy)" }}>Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
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
                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--navy)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white mb-2">Ready to Partner With Us?</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              Explore investment opportunities across Africa with Nexone Group.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/businesses" className="btn-red px-8 py-4 text-sm font-bold tracking-widest">
              OUR BUSINESSES →
            </Link>
            <Link href="/contact" className="btn-outline-white px-8 py-4 text-sm font-bold tracking-widest">
              CONTACT US →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
