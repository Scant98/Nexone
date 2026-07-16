import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Nexone Group's vision, mission, purpose, and core values — shaping Africa's future through strategic investment.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
