
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Litty Mobile Detailing | Premium Auto Care',
  description = 'Top-rated mobile auto detailing in Kissimmee. We bring the showroom shine to you. Ceramic coating, interior cleaning, and paint correction.',
  canonicalUrl = 'https://litty-detailing.com', // Replace with actual URL
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": "Litty Mobile Detailing LLC",
    "image": "https://litty-detailing.com/logo.png", // Replace
    "url": canonicalUrl,
    "telephone": "+13219001858",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2501 Addison Creek Dr",
      "addressLocality": "Kissimmee",
      "addressRegion": "FL",
      "postalCode": "34758",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.291956, // Approximate based on zip/city
      "longitude": -81.407570 // Approximate based on zip/city
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "10"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="keywords" content="auto detailing, car detailing, mobile detailing, ceramic coating, paint correction, Kissimmee, Orlando, Florida" />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
