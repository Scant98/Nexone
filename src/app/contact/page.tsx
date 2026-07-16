import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Nexone Group in Dar es Salaam, Tanzania. Call +255 750 070 000 or email info@nexonegroup.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
