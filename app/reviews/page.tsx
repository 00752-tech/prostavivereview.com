import './globals.css'
import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'

export const metadata: Metadata = {
  title: 'ProstaVive Reviews | Customer Testimonials and Ratings',
  description: 'Read real ProstaVive customer reviews and testimonials. See how our natural prostate supplement has helped thousands of men improve their prostate health.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'ProstaVive Reviews | Customer Testimonials and Ratings',
    description: 'Read real ProstaVive customer reviews and testimonials. See how our natural prostate supplement has helped thousands of men improve their prostate health.',
    url: 'https://www.prostavive.com/reviews',
    type: 'website',
    images: ['https://www.prostavive.com/home-assets/images/product.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProstaVive Reviews | Customer Testimonials and Ratings',
    description: 'Read real ProstaVive customer reviews and testimonials. See how our natural prostate supplement has helped thousands of men improve their prostate health.',
    images: ['https://www.prostavive.com/home-assets/images/product.png']
  },
  alternates: {
    canonical: 'https://www.prostavive.com/reviews'
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
        {/* Microsoft Clarity Tracking Code */}
        <script
          type="text/javascript"
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
