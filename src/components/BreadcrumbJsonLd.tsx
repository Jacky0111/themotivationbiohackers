import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/lib/site";

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
      item: `${SITE_URL}${it.path}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

export default BreadcrumbJsonLd;
