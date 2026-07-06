import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

const SITE_NAME = "The Motivation Biohackers";
const BASE_URL = "https://themotivationbiohackers.lovable.app";

const SEOHead = ({
  title,
  description = "Science-based longevity and functional wellness programs in Malaysia — functional medicine, regenerative therapies, and biohacking.",
  path = "/",
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Wellness Center Malaysia`;
  const url = `${BASE_URL}${path}`;

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
