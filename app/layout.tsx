// This is your RootLayout.tsx (or layout.tsx in the app directory)
import './globals.css'
import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import Script from 'next/script' // IMPORTANT: Make sure this import is present

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.prostavive.com' // Changed to www.prostavive.com for schema consistency

export const metadata: Metadata = {
  title: 'ProstaVive: End Frequent Bathroom Trips & Sleep Better Tonight',
  description: 'Reclaim your nights with ProstaVive. Our natural formula supports prostate health, reduces urgency, and promotes restful sleep for men over 40. Scientifically backed. 180-day guarantee.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'ProstaVive: End Frequent Bathroom Trips & Sleep Better Tonight',
    description: 'Reclaim your nights with ProstaVive. Our natural formula supports prostate health, reduces urgency, and promotes restful sleep for men over 40. Scientifically backed. 180-day guarantee.',
    images: [`${baseUrl}/home-assets/images/product.png`],
    url: baseUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProstaVive: End Frequent Bathroom Trips & Sleep Better Tonight',
    description: 'Reclaim your nights with ProstaVive. Our natural formula supports prostate health, reduces urgency, and promotes restful sleep for men over 40. Scientifically backed. 180-day guarantee.',
    images: [`${baseUrl}/home-assets/images/product.png`],
  },
  verification: {
    google: 'iLzbuKlYvaD49hrpIMReWRz2DDfCcTDBqYj5ohQAiKM'
  },
  alternates: {
    canonical: baseUrl
  }
}

// JSON-LD Schemas - Defined outside the component for clarity and to avoid re-creation on re-renders
const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ProstaVive",
  "url": baseUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ProstaVive",
  "url": baseUrl,
  "logo": `${baseUrl}/images/logo.png`, // Ensure this path is correct relative to your public directory
  "sameAs": [
    "https://facebook.com/prostavive", // Replace with actual Facebook URL if available
    "https://twitter.com/prostavive"   // Replace with actual Twitter URL if available
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Microsoft Clarity Script */}
        <Script
          id="microsoft-clarity-script" // A unique ID for this script
          strategy="beforeInteractive" // Ensures the script loads and executes before page hydration
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s7ns006vlf");
            `,
          }}
        />

        {/* Schema.org JSON-LD for WebSite */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive" // Ensures it's in the initial HTML for SEO parsers
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
        />

        {/* Schema.org JSON-LD for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive" // Ensures it's in the initial HTML for SEO parsers
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
