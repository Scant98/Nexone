import BusinessesPageContent from "@/components/pages/BusinessesPageContent";

export const metadata = {
  title: "Our Businesses",
  description:
    "Explore Nexone Group's 11 diversified business sectors — from mining and agriculture to real estate, energy, technology, and beyond.",
  alternates: { canonical: "/businesses" },
};

export default function BusinessesPage() {
  return <BusinessesPageContent />;
}
