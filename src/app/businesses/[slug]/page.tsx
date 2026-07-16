import { notFound } from "next/navigation";
import BusinessDetailContent from "@/components/pages/BusinessDetailContent";
import { sectors, getSectorById } from "@/data/sectors";

export async function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorById(slug);

  if (!sector) return {};

  return {
    title: sector.title,
    description: sector.desc,
    alternates: { canonical: `/businesses/${slug}` },
    openGraph: {
      title: `${sector.title} | Nexone Group`,
      description: sector.desc,
      images: [{ url: sector.image }],
    },
  };
}

export default async function BusinessDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorById(slug);

  if (!sector) notFound();

  return <BusinessDetailContent sector={sector} />;
}
