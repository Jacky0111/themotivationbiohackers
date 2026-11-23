import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL } from "@/lib/site";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

const SEOHead = ({
  title,
  description = "Science-based longevity and functional wellness programs in Malaysia — functional medicine, regenerative therapies, and biohacking.",
  path = "/",
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Wellness Center Malaysia`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

export default SEOHead;
