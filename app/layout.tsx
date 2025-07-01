import './globals.css'
import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import Script from 'next/script' // IMPORTANT: Added this import

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prostavivereview.com'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* The direct <script> tag for Clarity has been removed from here.
            The `next/script` component below will handle injecting it correctly into the <head>.
            You can keep this <head> tag if you have other meta tags or links here,
            otherwise, if it's empty, Next.js might optimize it away.
        */}
      </head>
      <body>
        {/* Microsoft Clarity Script - Using Next.js's Script component for proper loading */}
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

        <Navigation />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
