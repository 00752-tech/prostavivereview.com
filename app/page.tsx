import type { Metadata } from 'next'
import Script from 'next/script'
import VSLClient from './VSLClient'

export const metadata: Metadata = {
  title: 'ProstaVive Reviews - Real Customer Experiences',
  description: 'Read real ProstaVive reviews from customers who have experienced the benefits. Discover how ProstaVive has helped improve prostate health, urinary flow, energy, and confidence.',
}

// JSON-LD Schemas
const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ProstaVive",
  "url": "https://www.prostavive.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.prostavive.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ProstaVive",
  "url": "https://www.prostavive.com",
  "logo": "https://www.prostavive.com/images/logo.png",
  "sameAs": [
    "https://facebook.com/prostavive",
    "https://twitter.com/prostavive"
  ]
}

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* SCHEMA.ORG JSON-LD SCRIPTS */}
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <VSLClient />
    </main>
  )
}
