import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Golf and Prostate Health: Staying Active on the Green | ProstaVive',
  description: 'Discover how golf can benefit your prostate health. Learn tips for maximizing health benefits on the course and how ProstaVive can support your prostate health off the green.',
  openGraph: {
    title: 'Golf and Prostate Health: Staying Active on the Green | ProstaVive',
    description: 'Discover how golf can benefit your prostate health. Learn tips for maximizing health benefits on the course and how ProstaVive can support your prostate health off the green.',
    type: 'article',
    url: 'https://prostavivereview.com/resources/golf-and-prostate-health',
  },
}

export default function GolfAndProstateHealth() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Golf and Prostate Health: Staying Active on the Green</h1>
      
      <p className="text-lg mb-6 text-gray-700">
        Golf is not just a leisurely pastime; it can also be an excellent way for men to stay active and support their prostate health. 
        Learn how your time on the golf course can contribute to better prostate health and overall well-being.
      </p>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Golf for Prostate Health</h2>
        <ul className="space-y-3">
          {[
            "Low-impact exercise that's easy on the joints",
            "Promotes cardiovascular health",
            "Reduces stress and improves mental well-being",
            "Encourages social interaction, which is beneficial for overall health",
            "Provides exposure to vitamin D from sunlight (in moderation)",
            "Can help maintain a healthy weight, which is important for prostate health"
          ].map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Tips for Maximizing Health Benefits on the Golf Course</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Physical Health</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Walk the course instead of using a cart when possible</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Stay hydrated throughout your game</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Practice proper swing mechanics to avoid injury</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Mental Well-being</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Use golf as a way to de-stress and relax</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Enjoy the social aspects of the game</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Practice mindfulness while on the course</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 border border-green-100 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Supporting Your Prostate Health Off the Course</h2>
        <p className="mb-6">
          While golf can contribute to your overall health, it's important to support your prostate health in other ways too. 
          ProstaVive offers a natural supplement designed to promote prostate health and overall male vitality.
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Supports normal urinary function</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Promotes healthy prostate size</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Enhances overall male vitality</span>
          </li>
        </ul>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
            Learn More About ProstaVive
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <div className="prose max-w-none">
        <h2>Conclusion</h2>
        <p>
          Golf can be an excellent way to stay active and support your prostate health. By combining regular golf sessions 
          with a healthy lifestyle and targeted supplements like ProstaVive, you can take a comprehensive approach to 
          maintaining your prostate health and overall well-being.
        </p>
        
        <h3>Additional Resources</h3>
        <ul>
          <li>
            <a href="https://www.cdc.gov/physicalactivity/basics/pa-health/index.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Physical Activity Basics - Centers for Disease Control and Prevention
            </a>
          </li>
          <li>
            <a href="https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Prostate Problems - National Institute of Diabetes and Digestive and Kidney Diseases
            </a>
          </li>
          <li>
            <Link href="/blog/holistic-prostate-health" className="text-blue-600 hover:underline">
              Holistic Approach to Prostate Health
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>* These statements have not been evaluated by the Food and Drug Administration. 
        This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Golf and Prostate Health: Staying Active on the Green",
  "description": "Learn how golf can contribute to better prostate health and overall well-being. Discover tips for maximizing health benefits on the course and how ProstaVive supports prostate health.",
  "image": "https://prostavivereview.com/images/golf-course.jpg",
  "author": {
    "@type": "Organization",
    "name": "ProstaVive"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ProstaVive",
    "logo": {
      "@type": "ImageObject",
      "url": "https://prostavivereview.com/logo.png"
    }
  },
  "datePublished": "2024-03-23",
  "dateModified": "2024-03-23"
}) }} />
    </div>
  )
}

