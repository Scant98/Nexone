'use client'

import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const contactDetails = [
  {
    icon: "📍",
    label: "Head Office — Tanzania",
    lines: [
      'Block "41" Kinondoni,',
      "Alli Hassan Mwinyi Road,",
      "Dar es Salaam, Tanzania",
      "P.O. Box 9334",
    ],
  },
  {
    icon: "📍",
    label: "Europe Office — Slovakia",
    lines: [
      "Zechenterova 370/52,",
      "96701 Kremnica,",
      "Slovakia",
    ],
  },
  {
    icon: "📞",
    label: "Phone — Tanzania",
    lines: ["+255 750 070 000", "+421 947 110 610"],
  },
  {
    icon: "📞",
    label: "Phone — Slovakia",
    lines: ["+421 948 903 973"],
  },
  {
    icon: "✉️",
    label: "Email",
    lines: ["info@nexonegroup.co.tz"],
  },
  {
    icon: "🕐",
    label: "Business Hours",
    lines: [
      "Monday – Friday: 8:00 AM – 5:00 PM",
      "Saturday: 9:00 AM – 1:00 PM",
      "Sunday: Closed",
    ],
  },
];

const sectors = [
  "Natural Resources & Mining",
  "Logistics & Supply Chain",
  "Real Estate & Property Development",
  "Infrastructure Development",
  "Energy",
  "Agriculture & Agribusiness",
  "Tourism & Hospitality",
  "International Trade",
  "Investment & Financial Advisory",
  "Technology & Innovation",
  "Oil & Gas",
  "General Enquiry",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  border: "1px solid var(--gray-mid)",
  fontSize: "0.875rem",
  outline: "none",
  color: "var(--navy)",
  background: "#fff",
  transition: "border-color 0.2s",
};

export default function ContactPageContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sector: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner
        tag="GET IN TOUCH"
        title="Contact Us"
        subtitle="Connect with Nexone Group to explore investment opportunities, partnerships, or general enquiries."
        image="/images/Real estate.3.jpeg"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      {/* ─── Main Contact Section ──────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--red)" }}>
                  REACH US
                </p>
                <h2 className="text-3xl font-black mb-4" style={{ color: "var(--navy)" }}>
                  Contact Information
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Our team is ready to answer your questions and explore how Nexone Group can partner
                  with you across Africa&apos;s most dynamic sectors.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 flex items-center justify-center shrink-0 text-lg"
                      style={{ background: "var(--red)", color: "#fff" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-1.5"
                        style={{ color: "var(--navy)", opacity: 0.5 }}
                      >
                        {item.label}
                      </p>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-sm" style={{ color: "var(--navy)" }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "var(--navy)", opacity: 0.5 }}
                >
                  FOLLOW US
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Facebook", "X", "Instagram", "LinkedIn", "YouTube"].map((s) => (
                    <button
                      key={s}
                      aria-label={s}
                      className="px-3 py-2 text-xs font-bold transition-all duration-200"
                      style={{ border: "1px solid var(--gray-mid)", color: "var(--navy)" }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "var(--red)";
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.borderColor = "var(--red)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--navy)";
                        e.currentTarget.style.borderColor = "var(--gray-mid)";
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 md:p-10" style={{ background: "var(--gray-light)" }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--red)" }}>
                  SEND A MESSAGE
                </p>
                <h3 className="text-2xl font-black mb-6" style={{ color: "var(--navy)" }}>Get In Touch</h3>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div
                      className="w-16 h-16 flex items-center justify-center text-2xl text-white mx-auto mb-5"
                      style={{ background: "var(--red)" }}
                    >✓</div>
                    <h4 className="text-xl font-black mb-3" style={{ color: "var(--navy)" }}>Message Sent!</h4>
                    <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
                      Thank you for contacting Nexone Group. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-red px-6 py-3 text-sm font-bold"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs font-bold uppercase tracking-widest mb-2"
                          style={{ color: "var(--navy)", opacity: 0.6 }}
                        >Full Name *</label>
                        <input
                          type="text" required value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name" style={inputStyle}
                          onFocus={e => (e.target.style.borderColor = "var(--navy)")}
                          onBlur={e => (e.target.style.borderColor = "var(--gray-mid)")}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-bold uppercase tracking-widest mb-2"
                          style={{ color: "var(--navy)", opacity: 0.6 }}
                        >Email Address *</label>
                        <input
                          type="email" required value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com" style={inputStyle}
                          onFocus={e => (e.target.style.borderColor = "var(--navy)")}
                          onBlur={e => (e.target.style.borderColor = "var(--gray-mid)")}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs font-bold uppercase tracking-widest mb-2"
                          style={{ color: "var(--navy)", opacity: 0.6 }}
                        >Phone Number</label>
                        <input
                          type="tel" value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="+255 000 000 000" style={inputStyle}
                          onFocus={e => (e.target.style.borderColor = "var(--navy)")}
                          onBlur={e => (e.target.style.borderColor = "var(--gray-mid)")}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-bold uppercase tracking-widest mb-2"
                          style={{ color: "var(--navy)", opacity: 0.6 }}
                        >Company / Organisation</label>
                        <input
                          type="text" value={form.company}
                          onChange={e => setForm({ ...form, company: e.target.value })}
                          placeholder="Your company name" style={inputStyle}
                          onFocus={e => (e.target.style.borderColor = "var(--navy)")}
                          onBlur={e => (e.target.style.borderColor = "var(--gray-mid)")}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: "var(--navy)", opacity: 0.6 }}
                      >Area of Interest</label>
                      <select
                        value={form.sector}
                        onChange={e => setForm({ ...form, sector: e.target.value })}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={e => (e.target.style.borderColor = "var(--navy)")}
                        onBlur={e => (e.target.style.borderColor = "var(--gray-mid)")}
                      >
                        <option value="">Select a sector...</option>
                        {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: "var(--navy)", opacity: 0.6 }}
                      >Message *</label>
                      <textarea
                        required rows={5} value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your enquiry, investment interest, or how we can help you..."
                        style={{ ...inputStyle, resize: "vertical" }}
                        onFocus={e => (e.target.style.borderColor = "var(--navy)")}
                        onBlur={e => (e.target.style.borderColor = "var(--gray-mid)")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-red w-full py-4 text-sm font-bold tracking-widest justify-center"
                    >
                      SEND MESSAGE →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Offices Banner ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* Tanzania */}
          <div className="flex flex-col items-center text-center py-10 px-8" style={{ borderRight: "1px solid rgba(255,255,255,0.1)" }}>
            <span className="text-3xl mb-4">📍</span>
            <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--red)" }}>Head Office</p>
            <p className="text-white font-bold text-lg mb-1">Dar es Salaam, Tanzania</p>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
              Block &quot;41&quot; Kinondoni, Alli Hassan Mwinyi Road, P.O. Box 9334
            </p>
            <a
              href="https://maps.google.com/?q=Kinondoni,Dar+es+Salaam,Tanzania"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-widest uppercase px-5 py-2.5 transition-all duration-200 btn-outline-white"
            >
              VIEW ON MAP →
            </a>
          </div>

          {/* Slovakia */}
          <div className="flex flex-col items-center text-center py-10 px-8">
            <span className="text-3xl mb-4">📍</span>
            <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--red)" }}>Europe Office</p>
            <p className="text-white font-bold text-lg mb-1">Kremnica, Slovakia</p>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
              Zechenterova 370/52, 96701 Kremnica, Slovakia
            </p>
            <a
              href="https://maps.google.com/?q=Zechenterova+370/52,+96701+Kremnica,+Slovakia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-widest uppercase px-5 py-2.5 transition-all duration-200 btn-outline-white"
            >
              VIEW ON MAP →
            </a>
          </div>
        </div>
      </section>

      {/* ─── Quick Links ───────────────────────────────────────────────── */}
      <section className="py-12 px-6" style={{ background: "var(--gray-light)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-center">
          {[
            { label: "Our Businesses",     href: "/businesses" },
            { label: "About Us",           href: "/about" },
            { label: "Investor Relations", href: "/investor-relations" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="btn-outline-navy px-8 py-3 text-sm font-bold tracking-widest"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
