import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prostavivereview.com'

export const metadata: Metadata = {
  title: 'ProstaVive Review: #1 Natural Prostate Support | Clinically Proven',
  description: 'Discover ProstaVive, the clinically proven natural prostate supplement. Reduce frequent urination, improve flow, and boost overall prostate health. Try risk-free today!',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'ProstaVive Review: #1 Natural Prostate Support | Clinically Proven',
    description: 'Discover ProstaVive, the clinically proven natural prostate supplement. Reduce frequent urination, improve flow, and boost overall prostate health. Try risk-free today!',
    images: [`${baseUrl}/home-assets/images/product.png`],
    url: baseUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProstaVive Review: #1 Natural Prostate Support | Clinically Proven',
    description: 'Discover ProstaVive, the clinically proven natural prostate supplement. Reduce frequent urination, improve flow, and boost overall prostate health. Try risk-free today!',
    images: [`${baseUrl}/home-assets/images/product.png`],
  },
  verification: {
    google: 'iLzbuKlYvaD49hrpIMReWRz2DDfCcTDBqYj5ohQAiKM'
  },
  alternates: {
    canonical: 'https://prostavivereview.com'
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
        <link rel="canonical" href="https://prostavivereview.com" />
        {/* Microsoft Clarity Tracking Code */}
        <Script
          id="clarity"
          strategy="afterInteractive"
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
