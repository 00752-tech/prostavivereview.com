import Script from 'next/script'

interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
}

export function VideoSchema({ name, description, thumbnailUrl, uploadDate, contentUrl }: VideoSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "contentUrl": contentUrl
  };

  return (
    <Script
      id="video-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

