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
  description = "Elevate your well-being through science and holistic care. Premier functional medicine, regenerative therapies, and longevity optimisation clinic in Malaysia.",
  path = "/",
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Functional Medicine & Longevity Clinic Malaysia`;
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
