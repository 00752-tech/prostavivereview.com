import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Check, FileText } from 'lucide-react'

export default function ChoosingProstateSupplements() {
  const keyFactors = [
    {
      factor: "Ingredient Quality",
      description: "Look for clinically proven ingredients like Saw Palmetto, Beta-Sitosterol, and Pygeum Africanum."
    },
    {
      factor: "Dosage and Potency",
      description: "Ensure the supplement contains effective doses of key ingredients."
    },
    {
      factor: "Manufacturing Standards",
      description: "Choose supplements made in FDA-approved facilities following Good Manufacturing Practices (GMP)."
    },
    {
      factor: "Third-Party Testing",
      description: "Independent lab testing ensures product purity and potency."
    },
    {
      factor: "Customer Reviews",
      description: "Real user experiences can provide valuable insights into a supplement's effectiveness."
    }
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative h-[400px] w-full mb-8">
        <Image 
          src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200"
          alt="Various prostate supplements showcasing the importance of choosing the right product for optimal prostate health"
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <Button asChild className="w-full mb-4 bg-blue-600 hover:bg-blue-700">
          <Link href="https://26de3m62r9dn8y9j2ly8481s3u.hop.clickbank.net/?&traffic_source=prosta_site" className="flex items-center justify-center">
            <Play className="mr-2 h-5 w-5" />
            Watch Video: How to Choose the Best Prostate Supplement
          </Link>
        </Button>
        <p className="text-sm text-blue-600 text-center">
          Learn why ProstaVive stands out in the crowded market of prostate supplements
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-gray-900">Choosing the Right Prostate Supplement: A Buyer's Guide</h1>

      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        With the myriad of prostate supplements available on the market, selecting the right one can be overwhelming. 
        This comprehensive guide will walk you through the key factors to consider, ensuring you make an informed decision 
        that best supports your prostate health.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Factors in Choosing a Prostate Supplement</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        {keyFactors.map((item, index) => (
          <div key={index} className="p-6 border-b border-gray-100 last:border-b-0">
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.factor}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="relative h-[300px]">
          <Image 
            src="https://prostavive.org/home-assets/images/product.png"
            alt="ProstaVive's unique formula showcasing its high-quality ingredients and manufacturing standards"
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why ProstaVive Stands Out</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Clinically proven natural ingredients</p>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Optimal dosages for maximum effectiveness</p>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Manufactured in FDA-approved facilities</p>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Third-party tested for purity and potency</p>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Thousands of satisfied customers</p>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Understanding Prostate Supplement Ingredients</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        When evaluating prostate supplements, it's crucial to understand the role of key ingredients. ProstaVive's formula 
        includes scientifically-backed components such as Saw Palmetto, Beta-Sitosterol, and Pygeum Africanum, each chosen 
        for their specific benefits to prostate health.
      </p>

      <div className="my-12">
        <h2 className="text-2xl font-semibold mb-6">Watch: Expert Insights on Choosing Prostate Supplements</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe 
            src="https://www.youtube.com/embed/O9Wp41nSda4" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
          />
        </div>
        <div className="mt-4">
          <Link href="/video-transcript" className="text-blue-600 hover:underline inline-flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Read Video Transcript
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
        <h2 className="text-3xl font-bold mb-4">Make an Informed Choice for Your Prostate Health</h2>
        <p className="mb-6">Discover why thousands of men trust ProstaVive for their prostate health needs</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Button asChild variant="secondary" className="w-full">
            <Link href="https://26de3m62r9dn8y9j2ly8481s3u.hop.clickbank.net/?&traffic_source=prosta_site" className="flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Video Presentation
            </Link>
          </Button>
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <Link href="https://26de3m62r9dn8y9j2ly8481s3u.hop.clickbank.net/?&traffic_source=prosta_site" className="flex items-center justify-center">
              Try ProstaVive Risk-Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-8">
        <p className="mb-2">* These statements have not been evaluated by the Food and Drug Administration. 
        This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
        <p>Individual results may vary. Consult your healthcare provider before starting any supplement regimen.</p>
      </div>
    </article>
  )
}

