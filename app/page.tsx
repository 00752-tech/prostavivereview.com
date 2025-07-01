import type { Metadata } from 'next'
// Remove Script import as it's no longer needed in this file for schemas
import VSLClient from './VSLClient'

export const metadata: Metadata = {
  title: 'ProstaVive: End Frequent Bathroom Trips & Sleep Better Tonight',
  description: 'Reclaim your nights with ProstaVive. Natural formula supports prostate health, reduces urgency, and boosts sleep for men 40+. Scientifically backed, 180-day guarantee.',
}

// Remove JSON-LD Schemas (homeSchema, organizationSchema) from here

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Remove SCHEMA.ORG JSON-LD SCRIPTS from here */}
      {/*
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
      */}
      <VSLClient />
    </main>
  )
}
