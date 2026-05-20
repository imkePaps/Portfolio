import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

const SITE_NAME = "Imke Paps";

const SITE_URL = "https://imkepaps.com";

const DEFAULT_IMAGE = "https://imkepaps.com/preview.webp";

function SEO({
  title,
  description,
  url = SITE_URL,
  image = DEFAULT_IMAGE,
  keywords = [],
  noIndex = false,
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description}/>

      {/* Optional keywords */}
      {keywords.length > 0 && (
        <meta name="keywords"content={keywords.join(", ")}/>
      )}

      {/* Robots */}
      <meta name="robots" content={
          noIndex ? "noindex, nofollow" : "index, follow"
        } />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Theme */}
      <meta name="theme-color" content="var(--color-surface)"/>

      {/* Open Graph */}
      <meta property="og:type" content="website"/>
      <meta property="og:site_name" content={SITE_NAME}/>
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description}/>
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle}/> 
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={image}/>

    </Helmet>
  );
}

export default SEO;