import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nexone Group – Building Africa's Future",
    template: "%s | Nexone Group",
  },
  description:
    "Nexone Group is a diversified investment holding company connecting global capital with Africa's greatest opportunities in Agriculture, Mining, and Real Estate.",
  keywords: [
    "Nexone Group",
    "investment Tanzania",
    "Africa investment",
    "mining Tanzania",
    "agriculture Tanzania",
    "real estate Dar es Salaam",
    "logistics East Africa",
    "tourism Tanzania",
    "investment holding company",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nexone Group",
    title: "Nexone Group – Building Africa's Future",
    description:
      "A diversified investment holding company connecting global capital with Africa's greatest opportunities across 11 strategic sectors.",
    images: [{ url: "/images/logonew.jpeg", width: 1200, height: 630, alt: "Nexone Group" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexone Group – Building Africa's Future",
    description:
      "A diversified investment holding company connecting global capital with Africa's greatest opportunities across 11 strategic sectors.",
    images: ["/images/logonew.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexone Group",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logonew.jpeg`,
  description:
    "Diversified investment holding company connecting global capital with Africa's greatest opportunities across 11 strategic sectors.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block 41 Kinondoni, Alli Hassan Mwinyi Road",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+255-750-070-000",
    contactType: "customer service",
    email: "info@nexonegroup.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
