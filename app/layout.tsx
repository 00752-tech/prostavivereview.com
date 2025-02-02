import './globals.css'
import type { Metadata } from 'next'
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

