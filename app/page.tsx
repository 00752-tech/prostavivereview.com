import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ProstaVive | Natural Prostate Health Support',
  description: 'ProstaVive offers natural supplements and resources for optimal prostate health. Learn about our scientifically-backed approach to prostate wellness.',
}

export default function HomePage() {
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

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([homeSchema, organizationSchema]) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Support Your Prostate Health Naturally
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {`Discover ProstaVive's scientifically-backed natural supplements designed to promote optimal prostate function and overall male wellness.`}
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="https://prostavivereview.com/api/vsl" className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/hero-img.png"
                alt="Natural prostate health supplements"
                fill
                className="object-cover rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ProstaVive?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Ingredients",
                description: "Carefully selected natural ingredients backed by scientific research"
              },
              {
                title: "Proven Results",
                description: "Thousands of satisfied customers reporting improved prostate health"
              },
              {
                title: "Expert Support",
                description: "Access to prostate health resources and expert guidance"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md">
                <Check className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Prostate Health?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of men who have discovered the natural way to support their prostate health with ProstaVive.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Prostate Health Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Prostate Cancer", href: "/prostate-cancer" },
              { title: "BPH Information", href: "/bph" },
              { title: "Natural Remedies", href: "/natural-remedies" },
              { title: "Health Blog", href: "/blog" }
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-blue-600 flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

