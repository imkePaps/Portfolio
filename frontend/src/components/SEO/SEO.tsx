import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
};

function SEO({ title, description }: Props) {
  return (
    <Helmet titleTemplate="%s | Imke Paps" defaultTitle="Imke Paps">
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />

      <meta property="og:image" content="/preview.webp" />

      <meta property="og:url" content="https://yourdomain.com" />

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

export default SEO;
