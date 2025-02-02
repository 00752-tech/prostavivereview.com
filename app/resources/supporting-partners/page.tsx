import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supporting Your Partner\'s Prostate Health | ProstaVive',
  description: 'Learn how to support your partner through their prostate health journey. Discover warning signs, helpful tips, and natural solutions with ProstaVive.',
  openGraph: {
    title: 'Supporting Your Partner\'s Prostate Health | ProstaVive',
    description: 'Learn how to support your partner through their prostate health journey. Discover warning signs, helpful tips, and natural solutions with ProstaVive.',
    type: 'article',
    url: 'https://prostavivereview.com/resources/supporting-partners',
  },
}

export default function SupportingPartners() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Supporting Your Partner's Prostate Health Journey</h1>
      
      <p className="text-lg mb-6 text-gray-700">
        Understanding and supporting your partner through prostate health challenges can strengthen your relationship 
        while improving their health outcomes. Learn how you can make a difference in your partner's prostate health journey.
      </p>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Warning Signs to Watch For</h2>
        <ul className="space-y-3">
          {[
            "Frequent bathroom visits, especially at night",
            "Difficulty starting or maintaining urine flow",
            "Complaints of incomplete bladder emptying",
            "Decreased interest in intimate activities",
            "Signs of discomfort or pain during urination",
            "Avoiding social activities due to bathroom concerns"
          ].map((sign, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>{sign}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How You Can Help</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Encourage Healthy Habits</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Support regular exercise routines</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Help prepare prostate-friendly meals</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Remind about staying hydrated</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Emotional Support</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Listen without judgment</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Encourage regular check-ups</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Be patient and understanding</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 border border-green-100 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Natural Support with ProstaVive</h2>
        <p className="mb-6">
          ProstaVive offers a natural, scientifically-formulated solution to support your partner's prostate health. 
          Our unique blend of ingredients works to:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Support normal urinary flow and frequency</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Promote healthy prostate size</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
            <span>Enhance overall vitality and well-being</span>
          </li>
        </ul>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
            Learn How ProstaVive Can Help Your Partner
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <div className="prose max-w-none">
        <h2>Taking Action Together</h2>
        <p>
          Supporting your partner through prostate health challenges shows you care about their well-being. 
          By understanding the issues and taking proactive steps together, you can help them maintain optimal 
          prostate health and improve their quality of life.
        </p>
        
        <h3>Additional Resources</h3>
        <ul>
          <li>
            <a href="https://www.cancer.gov/types/prostate/patient/prostate-treatment-pdq" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Prostate Cancer Treatment (PDQ®)–Patient Version - National Cancer Institute
              <ExternalLink className="inline-block ml-1 h-4 w-4" />
            </a>
          </li>
          <li>
            <a href="https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Prostate Problems - National Institute of Diabetes and Digestive and Kidney Diseases
              <ExternalLink className="inline-block ml-1 h-4 w-4" />
            </a>
          </li>
          <li>
            <a href="https://www.cdc.gov/cancer/prostate/basic_info/symptoms.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              What Are the Symptoms of Prostate Cancer? - Centers for Disease Control and Prevention
              <ExternalLink className="inline-block ml-1 h-4 w-4" />
            </a>
          </li>
          <li>
            <Link href="/blog/supporting-your-partner" className="text-blue-600 hover:underline">
              Complete Guide to Supporting Your Partner's Prostate Health
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
  "headline": "Supporting Your Partner's Prostate Health Journey",
  "description": "Learn how to support your partner through prostate health challenges, recognize warning signs, and discover natural solutions like ProstaVive.",
  "image": "https://prostavivereview.com/images/couple-health-support.jpg",
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

