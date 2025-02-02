import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check,  } from 'lucide-react'

export default function ProstateHealthSupplements() {
  const supplements = [
    {
      name: "Saw Palmetto",
      benefits: "May help reduce symptoms of benign prostatic hyperplasia (BPH)",
      researchLevel: "Moderate"
    },
    {
      name: "Beta-Sitosterol",
      benefits: "May improve urinary symptoms associated with BPH",
      researchLevel: "Moderate"
    },
    {
      name: "Pygeum",
      benefits: "May help reduce BPH symptoms and inflammation",
      researchLevel: "Limited"
    },
    {
      name: "Zinc",
      benefits: "Important for prostate health and immune function",
      researchLevel: "Moderate"
    },
    {
      name: "Selenium",
      benefits: "May play a role in prostate cancer prevention",
      researchLevel: "Mixed"
    }
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Prostate Health Supplements: A Comprehensive Guide",
  "description": "Explore popular prostate health supplements, their potential benefits, and how to choose the right one for you.",
  "image": "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200",
  "datePublished": "2024-03-21",
  "author": {
    "@type": "Organization",
    "name": "ProstaVive"
  }
}) }} />
      <div className="relative h-[400px] w-full mb-8">
        <Image 
          src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&h=400"
          alt="Various prostate health supplements and natural ingredients"
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6 text-gray-900">Prostate Health Supplements: A Comprehensive Guide</h1>

      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        As men age, maintaining prostate health becomes increasingly important. While a healthy diet and lifestyle are crucial, many turn to supplements for additional support. In this guide, we'll explore popular prostate health supplements, their potential benefits, and what the research says.
      </p>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Consider Prostate Health Supplements?</h2>
        <p className="text-gray-700 mb-4">
          Prostate health supplements are designed to support overall prostate function and may help alleviate symptoms associated with common prostate issues like benign prostatic hyperplasia (BPH). While not a replacement for medical treatment, these supplements can be a part of a comprehensive approach to prostate health.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="https://prostavivereview.com/api/vsl" className="flex items-center">
            Learn About ProstaVive's Unique Formula
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Popular Prostate Health Supplements</h2>
      <div className="space-y-6">
        {supplements.map((supplement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{supplement.name}</h3>
            <p className="text-gray-700 mb-2">{supplement.benefits}</p>
            <p className="text-sm text-gray-600">Research Level: {supplement.researchLevel}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Choosing the Right Supplement</h2>
      <p className="mb-4 text-gray-700">When selecting a prostate health supplement, consider the following factors:</p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Ingredient quality and sourcing</li>
        <li>Dosage and potency</li>
        <li>Third-party testing for purity and safety</li>
        <li>Manufacturer reputation</li>
        <li>Potential interactions with medications</li>
      </ul>

      <div className="bg-green-50 border border-green-100 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Why Choose ProstaVive?</h3>
        <p className="text-gray-700 mb-4">
          ProstaVive offers a comprehensive blend of scientifically-backed ingredients for optimal prostate support:
        </p>
        <ul className="mb-4">
          {supplements.map((supplement, index) => (
            <li key={index} className="flex items-start gap-2 mb-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{supplement.name}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
            Try ProstaVive Risk-Free Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">The Importance of Consulting Your Healthcare Provider</h2>
      <p className="mb-6 text-gray-700">
        While prostate health supplements can be beneficial, it's crucial to consult with your healthcare provider before starting any new supplement regimen. They can help you determine if supplements are right for you and ensure they won't interact with any medications you're currently taking.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
      <p className="mb-6 text-gray-700">
        Prostate health supplements can be a valuable addition to your overall prostate health strategy. By understanding the potential benefits and limitations of these supplements, you can make informed decisions about your health. Remember, supplements work best when combined with a healthy lifestyle, including a balanced diet, regular exercise, and routine check-ups with your healthcare provider.
      </p>

      <div className="mt-8 text-sm text-gray-500">
        <p className="mb-2">Disclaimer: This article is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional before starting any supplement regimen.</p>
      </div>
      <div className="mt-8 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4">Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://www.fda.gov/food/information-consumers-using-dietary-supplements" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Information for Consumers on Using Dietary Supplements - U.S. Food and Drug Administration (FDA)
            </a>
          </li>
          <li>
            <a href="https://ods.od.nih.gov/factsheets/list-all/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Dietary Supplement Fact Sheets - Office of Dietary Supplements (NIH)
            </a>
          </li>
          <li>
            <a href="https://www.cancer.gov/about-cancer/treatment/cam/patient/prostate-supplements-pdq" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Prostate Cancer, Nutrition, and Dietary Supplements (PDQ®)–Patient Version - National Cancer Institute
            </a>
          </li>
        </ul>
      </div>
    </article>
  )
}

