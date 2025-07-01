// This is your RootLayout.tsx (or layout.tsx in the app directory)
import './globals.css'
import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import Script from 'next/script' // Make sure this import is present

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.prostavive.com'

export const metadata: Metadata = {
  title: 'ProstaVive: End Frequent Bathroom Trips & Sleep Better Tonight',
  description: 'Reclaim your nights with ProstaVive. Natural formula supports prostate health, reduces urgency, and boosts sleep for men 40+. Scientifically backed, 180-day guarantee.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'ProstaVive: End Frequent Bathroom Trips & Sleep Better Tonight',
    description: 'Reclaim your nights with ProstaVive. Natural formula supports prostate health, reduces urgency, and boosts sleep for men 40+. Scientifically backed, 180-day guarantee.',
    images: [`${baseUrl}/home-assets/images/product.png`],
    url: baseUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProstaVive: End Frequent Bathroom Trips & Sleep Better Tonight',
    description: 'Reclaim your nights with ProstaVive. Natural formula supports prostate health, reduces urgency, and boosts sleep for men 40+. Scientifically backed, 180-day guarantee.',
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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "ProstaVive Natural Prostate Supplement", // Exact product name
  "description": "Natural breakthrough formula designed to support prostate health, reduce frequent bathroom trips, and promote restful sleep for men over 40.", // Detailed product description
  "image": `${baseUrl}/home-assets/images/product.png`, // URL to a high-quality product image
  "sku": "PROSTAVIVE-SUPP-001", // Your product's SKU (Stock Keeping Unit)
  "brand": {
    "@type": "Brand",
    "name": "ProstaVive"
  },
  "offers": {
    "@type": "Offer",
    "url": baseUrl, // URL to the product's sales page
    "priceCurrency": "USD",
    "price": "69.00", // Example price. Update with actual price.
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock", // Or OutOfStock, PreOrder, etc.
    "seller": {
      "@type": "Organization",
      "name": "ProstaVive"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9", // Average rating from your customers
    "reviewCount": "10000" // Total number of reviews
  },
  "review": [ // Optional: Add a few example recent reviews here if you have them
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Satisfied Customer" // Or actual reviewer name
      },
      "reviewBody": "ProstaVive has truly changed my life. No more constant bathroom trips at night!",
      "datePublished": "2024-06-25" // Date of the review
    }
    // Add more review objects as needed
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

        {/* Schema.org JSON-LD for Product */}
        <Script
          id="product-schema"
          type="application/ld+json"
          strategy="beforeInteractive" // Ensures it's in the initial HTML for SEO parsers
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
