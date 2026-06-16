import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.unicareglobalhospitals.com';

// Per-page meta title/description/canonical URL/keywords + optional JSON-LD schema (one object or an array).
export default function SEO({ title, description, url, keywords, schema }) {
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];
  const canonical = url ? `${SITE_URL}${url}` : undefined;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {keywords && <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
