import { Helmet } from "react-helmet-async";

const BASE_URL = "https://themotivationbiohackers.lovable.app";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

const BreadcrumbJsonLd = ({ items }: { items: BreadcrumbItem[] }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BASE_URL}${it.path}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

export default BreadcrumbJsonLd;
