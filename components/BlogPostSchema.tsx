import Script from 'next/script'

interface BlogPostSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  imageUrl: string;
  authorName: string;
}

export function BlogPostSchema({ title, description, datePublished, imageUrl, authorName }: BlogPostSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": datePublished,
    "author": {
      "@type": "Person",
      "name": authorName
    }
  };

  return (
    <Script
      id="blogpost-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

