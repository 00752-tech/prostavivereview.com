import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prostate Health Resources | ProstaVive',
  description: 'Explore our comprehensive collection of prostate health resources. Learn about supporting partners, golf and prostate health, and more with ProstaVive.',
  openGraph: {
    title: 'Prostate Health Resources | ProstaVive',
    description: 'Explore our comprehensive collection of prostate health resources. Learn about supporting partners, golf and prostate health, and more with ProstaVive.',
    type: 'website',
    url: 'https://prostavivereview.com/resources',
  },
}

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Prostate Health Resources</h1>
      
      <p className="text-lg mb-6">
        Explore our collection of targeted resources to help you understand and manage prostate health in various aspects of your life.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Supporting Your Partner</h2>
          <p className="mb-4">Learn how to support your partner through their prostate health journey.</p>
          <Button asChild>
            <Link href="/resources/supporting-partners" className="flex items-center">
              Read More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Golf and Prostate Health</h2>
          <p className="mb-4">Discover how to maintain your prostate health while enjoying your time on the golf course.</p>
          <Button asChild>
            <Link href="/resources/golf-and-prostate-health" className="flex items-center">
              Read More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">More Resources</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link href="/blog" className="text-blue-600 hover:underline">
              Prostate Health Blog
            </Link>
          </li>
          <li>
            <Link href="/calculators" className="text-blue-600 hover:underline">
              Prostate Health Calculators
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-blue-600 hover:underline">
              Frequently Asked Questions
            </Link>
          </li>
        </ul>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Prostate Health Resources",
  "description": "Explore our collection of targeted resources to help you understand and manage prostate health in various aspects of your life.",
  "url": "https://prostavivereview.com/resources",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Supporting Your Partner",
      "description": "Learn how to support your partner through their prostate health journey.",
      "url": "https://prostavivereview.com/resources/supporting-partners"
    },
    {
      "@type": "WebPage",
      "name": "Golf and Prostate Health",
      "description": "Discover how to maintain your prostate health while enjoying your time on the golf course.",
      "url": "https://prostavivereview.com/resources/golf-and-prostate-health"
    }
  ]
}) }} />
    </div>
  )
}

